import { Box, Text, Button, Divider } from "@chakra-ui/react"

function Footer() {
    return(
           <Box   
                p={{base:"3rem",lg:"3rem 4rem 1rem", xl:"3rem 6rem 1rem"}}
                bg="#0f0f0f"
                fontSize={{base:"0.8rem", md:"1rem"}}
            >
                <Box display="grid" gridTemplateColumns={{base:"repeat(2,2fr)", md:"repeat(4, 1fr)"}} gap="2rem" mb="3rem">
                    <Box color="#999">
                        <Text fontWeight="bold" color="#fff">Home</Text>
                        <Text pt="10px">Campaign</Text>
                        <Text pt="10px">Devices</Text>
                        <Text pt="10px">Prices</Text>
                        <Text pt="10px">FAQ</Text>
                    </Box>

                    <Box color="#999">
                        <Text fontWeight="bold" color="#fff">Movies</Text>
                        <Text pt="10px">Games</Text>
                        <Text pt="10px">Trending</Text>
                        <Text pt="10px">New Releases</Text>
                        <Text pt="10px">Popular</Text>
                    </Box>

                    <Box color="#999">
                        <Text fontWeight="bold" color="#fff">Support</Text>
                        <Text pt="10px">Contact us</Text>
                        <Text pt="10px">Devices</Text>
                        <Text pt="10px">Prices</Text>
                        <Text pt="10px">FAQ</Text>
                    </Box>

                    <Box color="#999">
                        <Text fontWeight="bold" color="#fff">Subscription</Text>
                        <Text pt="10px">Plan</Text>
                        <Text pt="10px">Features</Text>
                    </Box>
                </Box>

                <Divider w="100%" color="#999" bg="#999" opacity="10%"/>

                <Box color="#999" mt="1rem" display="flex" flexDirection={{base:"column", md:"row"}} gap="1rem" justifyContent="space-between" alignItems="center">
                    <Text>2023 All Rights Reserved</Text>

                    <Box display="flex" justifyContent="space-between" alignItems="center" gap="1rem">
                        <Text>Terms of Use</Text>
                        <Text>Privacy Policy</Text>
                        <Text>Cookie Policy</Text>
                    </Box>
                </Box>    
           </Box>
        
    )
}

export default Footer