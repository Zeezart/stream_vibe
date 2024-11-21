import { Box, Text } from "@chakra-ui/react";
import { useMovieApi } from "../../../contextApi";
import MovieCardComponent from "../../Movies/components/MovieCardComponent";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { useState, useEffect, useRef } from "react";

function AllMovies() {
  const [displayAll, setDisplayAll] = useState<boolean>(true);

  const { movieData, genreData, selectedGenre, setSelectedGenre, selectedGenreMovies, page, setPage } = useMovieApi();

  const carouselRef = useRef<HTMLDivElement>(null);

  // Handle genre selection
  const displayGenreMovies = (id: number | null) => {
    setSelectedGenre(id);
    setDisplayAll(id === null);
  };

  // Handle page changes
  const handleNext = () => {
    setPage(page + 1);
  };

  const handlePrev = () => {
    setPage(page - 1);
  };

  // Automatically scroll to the selected genre in the carousel
  useEffect(() => {
    if (carouselRef.current && selectedGenre !== null) {
      const genreElement = Array.from(carouselRef.current.children).find(
        (child) => (child as HTMLElement).dataset.genreId === selectedGenre.toString()
      );
  
      if (genreElement) {
        (genreElement as HTMLElement).scrollIntoView({
          behavior: "smooth",
          inline: "center", // Ensure the genre is centered
        });
      }
    }
  }, [selectedGenre]);
  

  return (
    <Box p={{ base: "1rem", sm: "1rem", md: "1rem 3rem", lg: "1rem 4rem", xl: "1rem 6rem" }}>
      <Box m="3rem 0">
        <Carousel>
          <CarouselContent className="flex space-x-2" ref={carouselRef}>
            <CarouselItem className="flex-auto shrink-0" data-genre-id="all">
              <Box
                p="0.8rem 1.5rem"
                bg={displayAll ? "#E50000" : "#1A1A1A"}
                width="fit-content"
                borderRadius="12px"
                cursor="pointer"
                onClick={() => displayGenreMovies(null)}
                textAlign="center"
              >
                <Text color="#fff" fontSize="1rem">All</Text>
              </Box>
            </CarouselItem>
            {genreData &&
              genreData.map((genre) => (
                <CarouselItem
                  key={genre.id}
                  className="flex-auto shrink-0"
                  data-genre-id={genre.id.toString()} 
                >
                  <Box
                    p="0.8rem 1.5rem"
                    bg={selectedGenre === genre.id ? "#E50000" : "#1A1A1A"}
                    width="fit-content"
                    borderRadius="12px"
                    cursor="pointer"
                    onClick={() => displayGenreMovies(genre.id)}
                    textAlign="center"
                  >
                    <Text color="#fff" fontSize="1rem">{genre.name}</Text>
                  </Box>
                </CarouselItem>
              ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </Box>

     
      <Box
        display="grid"
        gridTemplateColumns={{ base: "repeat(2, 1fr)", md: "repeat(4, 1fr)", lg: "repeat(6, 1fr)" }}
        gap="1rem"
      >
        {displayAll
          ? movieData &&
            movieData.map((movieItem) => (
              <MovieCardComponent key={movieItem.id} movieItem={movieItem} type="movie" />
            ))
          : selectedGenreMovies &&
            selectedGenreMovies.map((movieItem) => (
              <MovieCardComponent key={movieItem.id} movieItem={movieItem} type="movie" />
            ))}
      </Box>

      {/* Pagination */}
      <Box
        display={movieData || selectedGenreMovies ? "flex" : "none"}
        gap="1rem"
        m="2rem 0"
        justifyContent="center"
      >
        <Box
          cursor="pointer"
          display="flex"
          gap="5px"
          alignItems="center"
          color={page <= 1 ? "#BFBFBF" : "#ffffff"}
          onClick={page > 1 ? handlePrev : undefined}
        >
          <ArrowLeftIcon color="#fff" boxSize="10px" />
          <Text>Prev</Text>
        </Box>

        <Box cursor="pointer" display="flex" gap="5px" alignItems="center" onClick={handleNext}>
          <Text color="#ffffff">Next</Text>
          <ArrowRightIcon color="#fff" boxSize="10px" />
        </Box>
      </Box>
    </Box>
  );
}

export default AllMovies;
