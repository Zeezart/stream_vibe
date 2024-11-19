import { Box, Text } from "@chakra-ui/react"
import DevicesComponentCard from "../components/DevicesComponentCard"

function Devices() {
    return(
        <Box position="relative" p={{base:"3rem",lg:"1rem 4rem", xl:"1rem 6rem"}}>
            <Box width="100%">
                <Box>
                    <Text fontSize={{base:"1.5rem", md:"2rem"}} color="#ffffff" fontWeight="bold">We provide you streaming experiences across various devices</Text>
                    <Text fontSize={{base:"0.8rem", md:"1rem"}} color="#999999" marginTop="4px">With StreamVibe, you can enjoy your favorite movies and TV shows anytime, anywhere. Our platform is designed to be compatible 
                        with a wide range of devices, ensuring that you never miss a moment of entertainment.</Text>
                </Box>
            </Box>

            <Box>
                <DevicesComponentCard />
            </Box>
        </Box>
    )
}

export default Devices