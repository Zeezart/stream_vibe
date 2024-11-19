import { Box, Text, Button,Image, Skeleton} from "@chakra-ui/react"
import Navbar from "../../Components/Navbar"
import { useMovieApi } from "../../../contextApi"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import {imagePathOriginal} from "../../../contextApi"



function TvshowsHero() {

    const {popularTvshows, loading} = useMovieApi()
   

    const settings = {
        dots: true,
        slidesToShow:1,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:5000,
        lazyLoad: "ondemand",
        arrows: false,
        responsive:[
          {
            breakpoint: 900,
            settings:{
              arrows: false,
              swipe: true
            }
          }
        ]
      }

    return(
        <Box position="relative" p={{base:"3rem",lg:"1rem 4rem", xl:"1rem 6rem"}}>
            <Navbar />
        {
            loading ? <Skeleton  w="100%"
            h={{base:"80vh", md:"100vh" }} 
            mt="2rem"
            borderRadius="12px"
            /> : 
            <Slider {...settings}>
            
            {   
                popularTvshows && popularTvshows.map((movie) => (
                    
                    <Box position="relative">
                        <Image
                            src= {`${imagePathOriginal}/${movie?.backdrop_path}`}
                            bgSize="contain"
                            w="100%"
                            h={{base:"80vh", md:"100vh" }} 
                            mt="2rem"
                            borderRadius="12px"
                        >
                            
                        </Image>
                        
                        <Box 
                            bgGradient="linear(to-t,rgba(20, 20, 20, 1),rgba(20, 20, 20, 1),rgba(20, 20, 20, 0.8),rgba(20, 20, 20, 0))"
                            position={{base:"absolute",md:"absolute"}} 
                            bottom={{base:"0", md:"-50px"}}
                            h="50vh"
                            w="100%"
                            p={{base:"3rem",lg:"1rem 6rem", xl:"1rem 6rem"}}
                
                        >

                            <Box textAlign="center" width={{base:"100%", md:"100%"}} m="0 auto">
                                <Box m="1.5rem 0">
                                    <Text fontSize={{base:"2rem", md:"3rem"}} color="#fff" fontWeight="bold">{movie.title || movie.name}</Text>
                                    <Text fontSize="0.8rem" color="#999">{movie.overview}</Text>
                                </Box>
                                <Box>   
                                    <Button p="1rem" color="#fff" borderRadius="8px" backgroundColor="#e50000">Watch Trailer Now</Button>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                ))
            }

            </Slider>
        }
        </Box>
    )
}

export default TvshowsHero