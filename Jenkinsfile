pipeline {
    pipelineTriggers([
        githubPush()
    ])
    agent any

    tools {
        nodejs 'NODE21' 
    }

    environment {
        SCANNER_HOME = tool 'SONAR6.2'
        IMAGE_NAME = 'zeezart/stream-vibe'
        TAG = "${BUILD_NUMBER}"
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
                sh '''
                    npm i
                ''' 
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

        stage('Build') {
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
    }

    post {
        always {
            echo 'Pipeline finished.'
        }
    }
}
