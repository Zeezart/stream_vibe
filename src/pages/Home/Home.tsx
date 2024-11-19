import { Box } from "@chakra-ui/react"
import Explore from "./sections/Explore"
import Devices from "./sections/Devices"
import Faq from "./sections/Faq"
import Plan from "./sections/Plan"
import Hero from "./sections/Hero"
import Banner from "../Components/Banner"
import Footer from "../Components/Footer"

function Home() {
    return(
        <Box position="relative" backgroundColor="#141414" className="body">
            <Box width="100%">
                <Hero />
                <Explore />
                <Devices />
                <Faq />
                <Plan />
                <Banner />
                <Footer />
            </Box>
        </Box>
    )
}

export default Home