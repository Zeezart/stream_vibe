import { Box, Text, Button } from "@chakra-ui/react"
import Plan from "../Home/sections/Plan"
import Navbar from "../Components/Navbar"
import Banner from "../Components/Banner"
import Footer from "../Components/Footer"

function Subscribe(){

    const planFeatures = [
        {
            id: 1,
            heading: "Features",
            features: [
                "Content",
                "Devices",
                "Free Trial",
                "HDR",
                "Ad free",
                "Offline Viewing",
                "Family Plan"
            ]
        },

        {
            id: 2,
            heading: "Basic Plan",
            features: [
                "Content",
                "Mobile",
                "Yes",
                "Yes",
                "Yes",
                "No",
                "No"
            ]
        },

        {
            id: 3,
            heading: "Standard Plan",
            features: [
                "Content",
                "All",
                "Yes",
                "Yes",
                "Yes",
                "Yes",
                "No"
            ]
        },

        {
            id: 4,
            heading: "Premium Plan",
            features: [
                "Content",
                "All",
                "Yes",
                "Yes",
                "Yes",
                "Yes",
                "Yes"
            ]
        },
    ]

    return(
        <Box position="relative" backgroundColor="#141414">
            <Box p={{base:"3rem",lg:"1rem 4rem", xl:"1rem 6rem"}} >
                <Navbar />
            </Box>
                <Plan />

            <Box p={{base:"3rem",lg:"1rem 4rem", xl:"1rem 6rem"}} >
                <Box mt="3rem">
                    <Text fontSize={{ base: "1.5rem", md: "2rem" }} color="#ffffff" fontWeight="bold">
                        Compare our plans and choose the right one for you.
                    </Text>
                    <Text fontSize={{ base: "0.8rem", md: "1rem" }} color="#999999" marginTop="4px">
                        Join StreamVibe and select from our flexible subscription options tailored to suit your
                        viewing preferences. Get ready for non-stop entertainment!
                    </Text>
                </Box>

                <Box display="grid" gridTemplateColumns="repeat(4,1fr)" mt="3rem">
                    {planFeatures.map(feature => (
                        <Box textAlign="justify" bgColor="#1f1f1f" p="2rem" >
                            <Text color="#fff" mb="1rem">{feature.heading}</Text>
                            {feature.features.map(option => (
                                <Text color="#999" mb="1rem" >{option}</Text>
                            ))}
                        </Box>
                    ))}
                </Box>
            </Box>
            <Banner />

            <Footer />
        </Box>
    )
}

export default Subscribe