import { Box, Text, Button,IconButton } from "@chakra-ui/react"
import faq from "../../../data/FaqData"
import { AddIcon, MinusIcon } from "@chakra-ui/icons"
import { useState } from "react"

export default function Faq(){

    const [isOpen, setIsOpen] = useState<{ [key: number]: boolean }>({})

    const toggleAnswer = (id: number) => {
        setIsOpen((prevState) => ({
            ...prevState,
            [id]: !prevState[id]
        }))
    }

    return(
        <Box  p={{base:"1rem",sm:"1rem", md:"1rem 3rem", lg:"1rem 4rem", xl:"1rem 6rem"}} marginTop="3rem">
            <Box width="100%" display="flex" flexDirection={{base:"column", md:"row"}} gap="1rem" justifyContent="space-between" alignItems={{base:"flex-start", md:"center"}} >
                <Box >
                    <Text fontSize={{base:"1.5rem", md:"2rem"}} color="#ffffff" fontWeight="bold">Frequently Asked Questions</Text>
                    <Text fontSize={{base:"0.8rem", md:"1rem"}} color="#999999" marginTop="4px">Got questions? We've got answers! Check out our FAQ section 
                        to find answers to the most common questions about StreamVibe.</Text>
                </Box>
                <Box>
                    <Button bg="#E50000" borderRadius="12" color="#fff" padding="1rem 2rem" fontSize="12px">Ask Question</Button>
                </Box>
            </Box>

            <Box  mt="2rem" display={{base:"block", lg:"grid"}} gridTemplateColumns="repeat(2,2fr)" gap="2rem" >
                {
                    faq.map((faq) => {
                        return(
                            <Box mb="1rem">
                                <Box 
                                    display="flex" 
                                    color="#fff" 
                                    gap="1rem"  
                                    pb="1rem" 
                                    
                                    alignItems={isOpen[faq.id] ? 
                                    "flex-start" : "center"}
                                >
                                    <Box bg="#1F1F1F" p="1rem" borderRadius="12px" flexShrink={0}>
                                        <Text>{faq.id}</Text>
                                    </Box>

                                    <Box 
                                        display="flex" 
                                        justifyContent="space-between" 
                                        width="100%"
                                        alignItems={isOpen[faq.id] ? "flex-start" : "center"}
                                    >
                                        <Box>
                                            <Text fontSize={{base:"1rem", md:"1.3rem"}}>{faq.question}</Text>
                                            {isOpen[faq.id] && <Text fontSize={{base:"0.8rem", md:"1rem"}} color="#999">{faq.answer}</Text>}
                                        </Box>

                                        <Box>
                                            <IconButton
                                                icon={isOpen[faq.id] ? <MinusIcon /> : <AddIcon />}
                                                aria-label="Toggle Menu"
                                                display="block"
                                                onClick={() => toggleAnswer(faq.id)}
                                                bg="none"
                                                color="#fff"
                                            />
                                        </Box>
                                    </Box>
                                    
                                </Box>

                                <Box
                                    w="100%"
                                    h="2px"
                                    bgGradient="linear-gradient(to right, #1F1F1F,#E50000,#1F1F1F)"
                                ></Box>
                            </Box>
                        )
                    })
                }  
            </Box>
        </Box>
    )
}