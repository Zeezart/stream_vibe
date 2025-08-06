import { Box, Text, Button } from "@chakra-ui/react"
import Navbar from "../../Components/Navbar"
import { heroImage } from "../../../assets/index"


function Hero() {
    return(
        <Box position="relative" >
            <Box 
                bgImage={heroImage} 
                h={{base:"80vh", md:"120vh" }}
                p={{base:"1rem",sm:"1rem", md:"1rem 3rem", lg:"1rem 4rem", xl:"1rem 6rem"}} 
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
            >
                <Navbar />
            </Box>
            <Box 
                bgGradient="linear(to-t,rgba(20, 20, 20, 1),rgba(20, 20, 20, 0))"
                position={{base:"absolute",md:"absolute"}} 
                bottom={{base:"0", md:"-20px"}}
                p={{base:"3rem",lg:"1rem 6rem", xl:"1rem 6rem"}}
                
            >

                <Box textAlign="center" width={{base:"100%", md:"75%"}} m="0 auto">
                    <Box m="1.5rem 0">
                        <Text fontSize={{base:"2rem", md:"3rem"}} color="#fff" fontWeight="bold">The Best Streaming Experience</Text>
                        <Text fontSize="0.8rem" color="#999">StreamVibe is the best streaming experience for watching your favorite movies and shows on demand, anytime, anywhere. With StreamVibe, you can enjoy a wide variety of content, including the latest blockbusters, classic movies, popular TV shows, and more. 
                            You can also create your own watchlists, so you can easily find the content you want to watch.</Text>
                    </Box>
                    <Button p="1rem" color="#fff" borderRadius="8px" backgroundColor="#e50000">Start Streaming Now</Button>
                </Box>
            </Box>
        </Box>
    )
}

export default Hero