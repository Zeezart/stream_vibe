import { Box, Text } from "@chakra-ui/react"
import ExploreComponentCard from "../components/ExploreComponentCard"

function Explore() {
    return(
        <Box 
            position="relative" 
            p={{base:"1rem",sm:"1rem", md:"1rem 3rem", lg:"1rem 4rem", xl:"1rem 6rem"}}  
            width="100%" mt={{base:"1rem", md: "8rem"}}
        >
            <Box width="100%" display="flex" gap="2rem" justifyContent="space-between" alignItems="center">
                <Box>
                    <Text fontSize={{base:"1.5rem", md:"2rem"}} color="#ffffff" fontWeight="bold">Explore our wide variety of categories</Text>
                    <Text fontSize={{base:"0.8rem", md:"1rem"}} color="#999999" marginTop="4px">Whether you're looking for a comedy to make you laugh, 
                    a drama to make you think, or a documentary to learn something new</Text>
                </Box>

            </Box>

            <Box>
                
                <ExploreComponentCard />
            </Box>
        </Box>
    )
}

export default Explore