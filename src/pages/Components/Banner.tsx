import { Box, Text, Button } from "@chakra-ui/react"
import {bannerImage} from "../../assets/index"

function Banner() {
    return(
           <Box 
                p="3rem" 
                h={{base:"40vh", md:"40vh" }}
                m={{base:"3rem",lg:"5rem 6rem"}}
                bgImage={bannerImage}
                display="flex"
                flexDirection={{base:"column", md:"row"}}
                gap="2rem"
                justifyContent="space-between"
                alignItems="center"
                borderRadius="12px"
            >
                <Box textAlign={{base:"center", md:"left"}}>
                    <Text fontSize={{base:"1.5rem", md:"2rem"}} color="#fff">Start your free trial today.</Text>
                    <Text fontSize={{base:"0.8rem", md:"1rem"}} color="#999">This is a clear and concise call to action that encourages users to sign up for a free trial of StreamVibe.</Text>
                </Box>

                <Button bg="#e50000" p="1rem 2rem" color="#fff">Start a free trial</Button>
           </Box>
        
    )
}

export default Banner