import { Box, Text, Image } from "@chakra-ui/react"
import deviceData from "../../../data/DeviceComponentData"

function DevicesComponentCard() {
    return(
           <Box 
                display="grid" 
                gridTemplateColumns={{base:"repeat(1,6fr)", md:"repeat(2,3fr)", lg:"repeat(3,2fr)"}} 
                gap="1rem"  
                marginTop="2rem" 
                position="relative"
            >
                {
                    deviceData.map((device) => {
                        return(

                            <Box 
                                bg="#0f0f0f" 
                                p= {{base:"1rem", sm:"1rem", md:"2rem", lg:"2rem", xl:"2rem"}}
                                borderRadius="12px" 
                                border="1px solid #262626" 
                                textAlign="justify" 
                                position="relative"
                                _hover={{
                                    transform: "scale(1.05)",
                                    transition: "all 0.2s ease-in-out",
                                  }} 
                            >
                                <Box display="flex" alignItems="center" gap="1rem" mb="1rem" position="relative" overflow="hidden">
                                    <Box bg="#141414" p="1rem" borderRadius="12px">
                                        <Image src={device.icon}/>
                                    </Box>
                                    <Text fontSize="1.3rem" color="#fff">{device.deviceName}</Text>
                                    
                                    <Box 
                                        bg="rgba(229, 0, 0, 0.6)" 
                                        position="absolute" 
                                        top="-50px" 
                                        right="-60px" 
                                        w="100px" 
                                        h="100px" 
                                        borderRadius="50%" 
                                        filter="blur(50px)"
                                        overflow="hidden"
                                        zIndex="0">
                                        
                                    </Box>
                                </Box>
                                <Box>
                                    <Text fontSize="1rem" color="#999999">{device.detail}</Text>
                                </Box>
                            </Box>
                        )
                    })
                }
           </Box>
        
    )
}

export default DevicesComponentCard