import {Box, Text, Input, Button, Image} from "@chakra-ui/react"
import Navbar from "./Components/Navbar"
import React, { useState } from "react"
import {useMovieApi} from "../contextApi"
import {imagePath} from "../contextApi"
import {Link} from "react-router-dom"
import Footer from "./Components/Footer"

function Search(){

    const [searchInput, setSearchInput] = useState<string>("")
    const {setQuery, searchResults} = useMovieApi()

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>){
        setSearchInput(event.target.value)
    }

    function searchMovie(){
        setQuery(searchInput)
        console.log(searchResults)
    }
    return(
        <Box position="relative" backgroundColor="#141414" className="body" >
            <Box position="relative" p={{base:"3rem",lg:"1rem 4rem", xl:"1rem 6rem"}} minHeight="100vh">
                <Navbar />
                <Box mt="3rem">
                    <Text color="#fff" fontSize="2rem" textAlign="center" mb="1rem" fontWeight="bold">Search for Movies</Text>
                    <Box display="flex" justifyContent="space-between" alignItems="center" gap="3px">
                        <Input value={searchInput} onChange={handleInputChange} color="#fff" placeholder="Enter Movie Name" _placeholder={{color:"grey.100"}}/>
                        <Button onClick={searchMovie}>Search</Button>
                    </Box>

                    <Box>
                        
                    </Box>

                    <Box display="grid" mt="2rem" gridTemplateColumns={{base: "repeat(2, 1fr)", md: "repeat(4, 1fr)", lg: "repeat(6, 1fr)"}} gap="1rem">
                        {searchResults && searchResults.map((movieItem) => (
                            <Link to={`/${movieItem.media_type}/${movieItem.id}`} key={movieItem?.id}>
                                <Box 
                                    position="relative"
                                    transform="scale(1)" 
                                    _hover={{
                                        transform: {base:"scale(1)", md: "scale(1.08)"},
                                        transition: "transform 0.2s ease-in-out",
                                        "& .overlay": {
                                            opacity: 1,
                                        }
                                    }}
                                >
                                    <Image src={`${imagePath}/${movieItem?.poster_path}`}/>
                                    <Box position="absolute" p="0.5rem" bottom="0" left="0" w="100%" h="33%" bg="#1A1A1A" opacity="0" className="overlay" transition="opacity 0.3s ease-in-out">
                                        <Text color="#fff" textAlign="center">{movieItem.title || movieItem.name}</Text>
                                    </Box>
                                </Box>
                    
                            </Link> 
                        ))}
                    </Box>
                </Box>
            </Box>

            <Footer />

        </Box>
    )
}

export default Search