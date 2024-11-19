import {Box, Text, Image} from "@chakra-ui/react"
import { Link } from "react-router-dom"
import {imagePath} from "../../../contextApi"

function MovieCardComponent({movieItem, type}){

    

    return(
        <Link to={`/${type}/${movieItem.id}`} key={movieItem?.id}>
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
    )
}

export default MovieCardComponent