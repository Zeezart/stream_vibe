import { Box, Text, Button } from "@chakra-ui/react"
//import plan from "../../../data/PlanComponentData"

const plan = [
    {
        id:1,
        plan: "Basic Plan",
        detail: "Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles.",
        monthlyAmount: "$9.99",
        yearlyAmount:"$92.99"
    },

    {
        id:2,
        plan: "Standard Plan",
        detail: "Access to a wider selection of movies and shows, including most new releases and exclusive content.",
        monthlyAmount: "$12.99",
        yearlyAmount:"$102.99"
    },

    {
        id:3,
        plan: "Premium Plan",
        detail: "Access to a wider selection of movies and shows, including most new releases and exclusive content",
        monthlyAmount: "$14.99",
        yearlyAmount:"$125.99"
    },
]





function PlanComponentCard({activePlan}) {
    return(
           <Box display="grid" gridTemplateColumns={{base:"repeat(1,3fr)",lg:"repeat(3,1fr)"}} gap="1rem"  marginTop="2rem" color="white">
                {
                    plan.map((plan) => {
                        return(
                            <Box bg="#0f0f0f" p={{base:"2rem", md:"1rem", lg:"2rem"}} borderRadius="12px">
                                <Box>
                                    <Text fontSize={{base:"1rem", md:"1.5rem"}} color="#fff">{plan.plan}</Text>
                                    <Text color="#999999">{plan.detail}</Text>
                                </Box>

                                <Box display="flex" margin="1rem 0" alignItems="flex-start">
                                    <Text fontSize={{base:"2rem",md:"2.5rem"}} p="0" m="0">{activePlan==="monthly" ? plan.monthlyAmount : plan.yearlyAmount}</Text>
                                    <Text fontSize={{base:"1rem", md:"1.3rem"}} color="#999999">{activePlan==="monthly" ? "/month" : "/year"}</Text>
                                </Box>
                                <Box display="flex" justifyContent="space-between" gap="1rem">
                                    <Button  bg="#141414" color="white" w="100%">Start Free Trial</Button>
                                    <Button  bg="#E50000" color="white" w="100%">Choose Plan</Button>
                                </Box>
                            </Box>
                        )
                    })
                }
           </Box>
        
    )
}

export default PlanComponentCard