pipeline {
    triggers {
        githubPush()
    }

    agent any

    tools {
        nodejs 'NODE21' 
    }

    environment {
        SCANNER_HOME = tool 'SONAR6.2'
        IMAGE_NAME = 'zeezart/stream-vibe'
        TAG = "${BUILD_NUMBER}"
        EC2_HOST = "13.221.103.41" 
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Clone App Repo') {
            steps {
                sh '''
                    rm -rf stream_vibe
                    git clone --branch master https://github.com/Zeezart/stream_vibe.git
                '''
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
        }

        stage('SonarQube Analysis') {
            steps {
                withSonarQubeEnv('sonarserver') {
                    sh '''
                        export NODE_OPTIONS=--openssl-legacy-provider
                        ${SCANNER_HOME}/bin/sonar-scanner \
                        -Dsonar.projectKey=stream \
                        -Dsonar.projectName=stream \
                        -Dsonar.sources=. \
                        -Dsonar.exclusions=node_modules/** \
                        -Dsonar.javascript.lcov.reportPaths=coverage/lcov.info \
                        -X
                    '''
                }
            }
        }

        stage('Build App') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Docker Build') {
            steps {
                script {
                    docker.build("${IMAGE_NAME}:${TAG}")
                }
            }
        }

        stage('Docker Push') {
            steps {
                withCredentials([string(credentialsId: 'dockertoken', variable: 'TOKEN')]) {
                    sh '''
                        set -e
                        echo "$TOKEN" | docker login -u zeezart --password-stdin >/dev/null 2>&1 || {
                            echo "❌ Docker login failed"
                            exit 1
                        }

                        docker tag zeezart/stream-vibe:$BUILD_NUMBER zeezart/stream-vibe:latest
                        docker push zeezart/stream-vibe:$BUILD_NUMBER
                        docker push zeezart/stream-vibe:latest
                    '''
                }
            }
        }

        stage('Deploy to EC2') {
            steps {
                sshagent (credentials: ['ec2webkey']) {
                    sh '''
                        ssh -o StrictHostKeyChecking=no ubuntu@$EC2_HOST << 'EOF'
                            # Update system and install Docker if not installed
                            if ! command -v docker &> /dev/null
                            then
                                sudo apt update
                                sudo apt install -y docker.io
                                sudo usermod -aG docker ubuntu
                            fi

                            # Ensure group is refreshed
                            newgrp docker || true

                            # Pull and run the Docker container
                            docker pull zeezart/stream-vibe:latest
                            docker stop stream-vibe || true
                            docker rm stream-vibe || true
                            docker run -d -p 5173:80 --name stream-vibe zeezart/stream-vibe:latest
                        EOF
                    '''
                }
            }
        }

    }

    post {
        always {
            echo '✅ Pipeline finished.'
        }
    }
}

//TESTING PIPELINE AUTOMATED BUILD
// testing again
//testing again

