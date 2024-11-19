import { Box } from "@chakra-ui/react"
import TvshowsHero from "./sections/TvshowsHero"
import AllTvshows from "./sections/AllTvshows"
import Banner from "../Components/Banner"
import Footer from "../Components/Footer"

function Tvshows() {

   return (
        <Box position="relative" backgroundColor="#141414" className="body">
            <Box width="100%">
                <TvshowsHero />
                <AllTvshows />
                <Banner />
                <Footer />
            </Box>
        </Box>
    )
}

export default Tvshows