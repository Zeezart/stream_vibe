import { Box } from "@chakra-ui/react"
import MovieHero from "./sections/MovieHero"
import AllMovies from "./sections/AllMovies"
import Banner from "../Components/Banner"
import Footer from "../Components/Footer"

function Movies() {

    
    return(
        <Box position="relative" backgroundColor="#141414" className="body">
            <Box width="100%">
                <MovieHero />
                <AllMovies />
                <Banner />
                <Footer />
            </Box>
        </Box>
    )
}

export default Movies