import { Box, Text, Image } from "@chakra-ui/react"
import { rightScroll, animation, fantasy, horror, thriller, comedy, scifi, romance,action } from "../../../assets/index"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Link } from "react-router-dom"
import { useMovieApi } from "../../../contextApi"


const allGenre = [
  {
    id: 28,
    genre: "Action",
    image: action
  },

  {
    id: 53,
    genre: "Thriller",
    image: thriller
  },

  {
    id: 10749,
    genre: "Romance",
    image: romance
  },

  {
    id: 16,
    genre: "Animation",
    image: animation
  },

  {
    id: 27,
    genre: "Horror",
    image: horror
  },

  {
    id: 14,
    genre: "Fantasy",
    image: fantasy
  },

  {
    id: 878,
    genre: "Sci-Fi",
    image: scifi
  },

  {
    id: 35,
    genre: "Comedy",
    image: comedy
  },


]



function ExploreComponentCard() {

  const {setSelectedGenre} = useMovieApi()

  function displayGenreMovies(id: number | null){
    setSelectedGenre(id)
  }

    return(
        <Link to="/movie">
          <Box m="3rem 0">
            <Carousel>
              <CarouselContent className="flex space-x-4">
                {allGenre.map((genre, index) => (
                      <CarouselItem key={index} className="flex-auto shrink-0">
                        <Box mr="1rem" onClick={() => displayGenreMovies(genre.id)}>
                          <Box key={genre.id} margin="0" p="1rem" bg="#1A1A1A" width="fit-content" borderRadius="12px">
                            <Image src={genre.image}width="9.4rem" height="10.5rem" borderRadius="12px"/>
                  
                            <Box display="flex" justifyContent="space-between" alignItems="center" marginTop="1rem">
                                  <Text color="#fff">{genre.genre}</Text>
                                  <Image src={rightScroll} />
                            </Box>
                          </Box>
                        </Box>
                      </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>

          </Box>
        </Link>
    )
}

export default ExploreComponentCard