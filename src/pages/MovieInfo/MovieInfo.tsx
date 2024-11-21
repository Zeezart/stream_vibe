import { Box, Text, Button, Image } from "@chakra-ui/react"
import Navbar from "../Components/Navbar"
import axios from "axios"
import { imagePathOriginal } from "../../contextApi"
import { genre, calendar, language, rating} from "../../assets/index"
import Banner from "../Components/Banner"
import Footer from "../Components/Footer"
import {useParams} from "react-router-dom"
import { useEffect, useState } from "react"
import {baseUrl, apiKey} from "../../contextApi"
import {ChevronLeftIcon, ChevronRightIcon} from "@chakra-ui/icons"


type MovieDetails = {
    id: number;
    overview: string;
    backdrop_path: string;
    original_title?: string;
    name?: string;
    release_date?: string;
    first_air_date?: string;
    genres?: { id: number; name: string }[];
    genre_ids?: { id: number; name: string }[];
    poster_path: string;
    vote_average: number;
    number_of_seasons: number;
    number_of_episodes: number;
};

function MovieInfo() {
    const router = useParams()
    const { id, type } = router

    
       
        
        // Set movieDetails to the type or null
        const [movieDetails, setMovieDetails] = useState<MovieDetails | null>(null);
        const [loading, setLoading] = useState<boolean>(false);
        const [error, setError] = useState<string | null>(null);
        
        useEffect(() => {
            const fetchMovieDetails = async (movie_id = id) => {
                try {
                    setLoading(true);
                    const { data } = await axios.get(`${baseUrl}/${type}/${movie_id}?api_key=${apiKey}`);
                    setMovieDetails(data);
                } catch (err) {
                    setError("Failed to fetch data");
                } finally {
                    setLoading(false);
                }
                console.log(loading,error)
            };
    
            fetchMovieDetails();
        }, [id]);

        //fetch movie review
        const [review, setReview] = useState<any[]>([])
        useEffect(() => {
            const fetchMovieReview = async (movie_id = id) => {
                try {
                    setLoading(true);
                    const { data } = await axios.get(`${baseUrl}/${type}/${movie_id}/reviews?api_key=${apiKey}`);
                    setReview(data?.results);
                } catch (err) {
                    setError("Failed to fetch data");
                } finally {
                    setLoading(false);
                }
            };
    
            fetchMovieReview();
        }, [id]);
    
        
    
        const details = {
            id: movieDetails?.id,
            overview: movieDetails?.overview,
            bgImage: movieDetails?.backdrop_path,
            title: movieDetails?.original_title || movieDetails?.name,
            release_date: movieDetails?.release_date || movieDetails?.first_air_date,
            genres: movieDetails?.genres || movieDetails?.genre_ids,
            posterImage: movieDetails?.poster_path,
            rating: movieDetails?.vote_average,
            seasons: movieDetails?.number_of_seasons,
            episodes: movieDetails?.number_of_episodes
        };
    
        const [expandReview, setExpandReview] = useState<boolean>(false)

        function toggleExpand(){
            setExpandReview(!expandReview)
        }

        const [reviewIndex, setReviewIndex] = useState<number>(0)

        function nextReview(){
            setReviewIndex(reviewIndex + 1)
        }

        function prevReview(){
            setReviewIndex(reviewIndex - 1)
        }

    return(
        <Box>
            <Box position="relative" p={{base:"1rem",sm:"1rem", md:"1rem 3rem", lg:"1rem 4rem", xl:"1rem 6rem"}}  backgroundColor="#141414">
                <Navbar />
                <Box position="relative">
                    <Box 
                        bgImage=  {`${imagePathOriginal}/${details?.bgImage}`}
                        h={{base:"auto", md:"80vh" }} 
                        display="flex"
                        flexDirection={{base:"column", sm:"column", md:"row", lg:"row", xl:"row"}}
                        justifyContent="space-between"
                        gap="2rem"
                        mt="2rem"
                        p={{base:"1rem", sm:"1rem",md:"2rem", lg:"3rem", xl:"3rem"}}
                        borderRadius="12px"
                        alignItems="center"
                    >
                        <Image src= {`${imagePathOriginal}/${details?.posterImage}`} borderRadius="24px" width="250px"/>
                        <Box  width={{base:"100%", md:"75%"}} m="0 auto">
                            <Box m="1.5rem 0">
                                <Text fontSize={{base:"2rem", md:"3rem"}} color="#fff" fontWeight="bold">{details?.title}</Text>
                                {type === "movie" ? <Text fontSize="0.8rem" color="#999">{details.overview}</Text> :
                                    <Box color="#fff">
                                        <Text>Number of Seasons: {details.seasons} </Text>
                                        <Text>Total number of episodes: {details.episodes} </Text>
                                    </Box>
                                }
                            </Box>
                            <Box>   
                                <Button p="1rem" color="#fff" borderRadius="8px" backgroundColor="#e50000">Watch Now</Button>
                            </Box>
                        </Box>
                        
                    </Box>
                    <Box 
                        bgGradient="linear(to-t,rgba(20, 20, 20, 1),rgba(20, 20, 20, 1),rgba(20, 20, 20, 0.8),rgba(20, 20, 20, 0))"
                        position={{base:"absolute",md:"absolute"}} 
                        bottom={{base:"0", md:"-10px"}}
                        p={{base:"3rem",lg:"1rem 6rem", xl:"1rem 6rem"}}
                        
                    >

                        
                    </Box>
                </Box>


                <Box display="flex" flexDirection={{base:"column", md:"row"}} justifyContent="space-between" width="100%" m="3rem 0" gap="1rem">
                    <Box display="flex" flexDirection="column" gap="1rem" width={{base:"100%", md:"75%"}}>
                        <Box bgColor="#1A1A1A" border="1px solid #262626" p="2rem" borderRadius="10px">
                            <Text color="#999" mb="10px">Description</Text>
                            <Text color="#fff">{details.overview}</Text>
                        </Box>

                        <Box bgColor="#1A1A1A" border="1px solid #262626" p="2rem" borderRadius="10px">
                            <Text color="#999" mb="10px">Review</Text>
                            <Box>
                                {
                                    review.length === 0 ? <Text textAlign="center" color="#fff">No Reviews Yet</Text> :
                                <Box bgColor="#0F0F0F" p="1rem" borderRadius="10px" border="1px solid #262626">
                                    <Box display="flex" justifyContent="space-between" mb="1rem">
                                        <Text color="#fff" fontWeight="bold">{review[reviewIndex]?.author}</Text>
                                        <Box display="flex" gap="5px" alignItems="center">
                                            <Text color="#999">{review[reviewIndex]?.author_detail?.rating}</Text>
                                            <Text fontSize="10px">/10</Text>
                                        </Box>
                                    </Box>

                                    <Box>
                                        {expandReview?
                                            <Text color="#999">{review[reviewIndex]?.content}</Text>
                                        :
                                            <Text color="#999">{review[reviewIndex]?.content.slice(0,200)}...</Text>
                                        }

                                        <Text onClick={toggleExpand}>{expandReview? "Show less" : "Read More"}</Text>
                                    </Box>
                                </Box>
                                }
                            </Box>
                            

                            <Box display={review.length === 0 ? "none" : "flex"} gap="1rem" mt="2rem">

                                <Box display="flex" gap="2px" color={reviewIndex <= 0 ? "#999" : "#fff" } onClick={prevReview} alignItems="center">
                                    <ChevronLeftIcon boxSize="4"/>
                                    <Text>Prev</Text>
                                </Box>
                                <Box display="flex" gap="2px" color={reviewIndex >= review.length ? "#999" : "#fff" } onClick={nextReview} alignItems="center">
                                    <Text>Next</Text>
                                    <ChevronRightIcon boxSize="4"/>
                                </Box>

                                
                            </Box>
                        </Box>
                    </Box>


                    <Box 
                        width={{base:"100%", md:"50%", lg:"35%"}}
                        bgColor="#1A1A1A" 
                        border="1px solid #262626" 
                        p="2rem" 
                        borderRadius="10px" 
                        display="flex" 
                        flexDirection="column" 
                        gap="1.5rem"
                        color="#999"
                    >
                        <Box>
                            <Box display="flex" gap="5px" alignItems="center" mb="10px">
                                <Image src={calendar} />
                                <Text>Release Year</Text>
                            </Box>
                            <Text color="#fff">{details.release_date}</Text> 
                        </Box>

                        <Box>
                            <Box display="flex" gap="5px" alignItems="center" mb="10px">
                                <Image src={language} />
                                <Text>Available Languages</Text>
                            </Box>
                            <Box color="#fff" display="flex">
                                <Text bgColor="#0F0F0F" border="1px solid #262626" p="0.5rem" borderRadius="5px">English</Text>
                            </Box>
                        </Box>

                        <Box>
                            <Box display="flex" gap="5px" alignItems="center" mb="10px">
                                <Image src={rating} />
                                <Text>Ratings</Text>
                            </Box>
                            <Box color="#fff" display="flex" gap={{base:"0.5rem", lg:"1rem"}}>
                                <Text bgColor="#0F0F0F" border="1px solid #262626" p="0.5rem" borderRadius="5px">IMDB: {details.rating}</Text>
                            </Box>
                        </Box>

                        <Box>
                            <Box display="flex" gap="5px" alignItems="center" mb="10px">
                                <Image src={genre} />
                                <Text >Genre</Text>
                            </Box>
                            <Box color="#fff" display="flex">
                                {details.genres?.map((genre) => (
                                    <Text bgColor="#0F0F0F" border="1px solid #262626" p="0.5rem" borderRadius="5px" key={genre.id}>{genre.name}</Text>
                                ))}
                            </Box>
                        </Box>
                    </Box>
                </Box>

                <Banner />
            </Box>
                <Footer />
        </Box>
    )
}

export default MovieInfo