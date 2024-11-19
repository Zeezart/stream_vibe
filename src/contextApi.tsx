import { createContext, useContext, useState, ReactNode, useEffect} from "react"
import axios from "axios"
interface IMovieApiDataContext {
    movieData: any[]
    loading: boolean
    error: string | null
    genreData: any[]
    selectedGenre: number | null
    setSelectedGenre: any
    selectedGenreMovies: any[]
    popularMovies: any[]
    setSelectedMovieId: any
    selectedMovieId: number | null
    page: number
    setPage: any
    popularTvshows: any[]
    tvshowsData: any[]
    genreList: any[]
    selectedGenreTvshows: any[]
    searchResults: any[]
    setQuery: any
}

const MovieApiDataContext = createContext <IMovieApiDataContext | null >(null)


export const MovieDataProvider = ({children}: {children:ReactNode}) => {
    const [movieData, setMovieData] = useState<any[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)
    const [genreData, setGenreData] = useState<any[]>([])
    const [selectedGenre, setSelectedGenre] = useState<number|null>(null)
    const [selectedGenreMovies, setSelectedGenreMovies] = useState<any[]>([])
    const [popularMovies, setPopularMovies] = useState<any[]>([])
    const [selectedMovieId, setSelectedMovieId] = useState<number|null>(null)
    const [page, setPage] = useState<number>(1)
    const [genreList, setGenreList] = useState<any[]>([])
    const [selectedGenreTvshows, setSelectedGenreTvShows] = useState<any>({})


    
    const [popularTvshows, setPopularTvshows] = useState<any[]>([])
    
    const [tvshowsData, setTvshowsData] = useState<any[]>([])

    

    const baseUrl = import.meta.env.VITE_API_URL
    const apiKey = import.meta.env.VITE_API_KEY

   

    useEffect(() => {
        const fetchAllMovies = async(page: number) => {
            try{
                const { data } = await axios.get(`${baseUrl}/discover/movie?api_key=${apiKey}&language=en-US&page=${page}`)
                setMovieData(data?.results)
            }catch(err){
                setError("Failed to fetch data")
            }finally{
                setLoading(false)
            }
            
        }

        fetchAllMovies(page)
    },[page])

    //Fetch Tv shows data

    useEffect(() => {
        const fetchAllTvshows = async(page:number) => {
            try{
                const { data } = await axios.get(`${baseUrl}/discover/tv?api_key=${apiKey}&language=en-US&page=${page}`)
                setTvshowsData(data?.results)
            }catch(err){
                setError("Failed to fetch data")
            }finally{
                setLoading(false)
            }
            
        }

        fetchAllTvshows(page)
    },[page])


    //to fetch genre list
    useEffect(() => {
        const fetchGenre = async() => {
            try{
                const { data } = await axios.get(`${baseUrl}/genre/movie/list?api_key=${apiKey}&language=en-US&page=1`)
                setGenreData(data?.genres)
            }catch(err){
                setError("Failed to fetch data")
            }
            
        }

    fetchGenre()
    },[])

    //to fetch genre list for tv shows
    useEffect(() => {
        const fetchGenreList = async() => {
            try{
                const { data } = await axios.get(`${baseUrl}/genre/tv/list?api_key=${apiKey}&language=en-US&page=1`)
                setGenreList(data?.genres)
            }catch(err){
                setError("Failed to fetch data")
            }
            
        }

    fetchGenreList()
    },[])

    //fetch selected genre for movies
    useEffect(() => {
        const fetchGenreMovies = async(selectedGenre: number | null, page:number) => {
            try{
                //const { data } = await axios.get(`${baseUrl}/discover/movie?api_key=${apiKey}&language=en-US&page=1&with_genres=28`)
                const { data } = await axios.get(`${baseUrl}/discover/movie?api_key=${apiKey}&language=en-US&page=${page}&with_genres=${selectedGenre}`)
                setSelectedGenreMovies(data?.results)
            }catch(err){
                setError("Failed to fetch data")
            }finally{
                setLoading(false)
            }
            
        }

        fetchGenreMovies(selectedGenre, page)
    },[page, selectedGenre])

    //fetch selected genre for TvShow
    useEffect(() => {
        const fetchGenreTvshows = async(selectedGenre:number|null, page:number) => {
            try{
                //const { data } = await axios.get(`${baseUrl}/discover/movie?api_key=${apiKey}&language=en-US&page=1&with_genres=28`)
                const { data } = await axios.get(`${baseUrl}/discover/tv?api_key=${apiKey}&language=en-US&page=${page}&with_genres=${selectedGenre}`)
                setSelectedGenreTvShows(data?.results)
            }catch(err){
                setError("Failed to fetch data")
            }finally{
                setLoading(false)
            }
            
        }

        fetchGenreTvshows(selectedGenre, page)
    },[page, selectedGenre])


    //fetch popular movies for carousel
    useEffect(() => {
        const fetchPopularMovies = async() => {
            try{
                //const { data } = await axios.get(`${baseUrl}/discover/movie?api_key=${apiKey}&language=en-US&page=1&with_genres=28`)
                const { data } = await axios.get(`${baseUrl}/movie/popular?api_key=${apiKey}&language=en-US&page=1&with_genres=${selectedGenre}`)
                setPopularMovies(data?.results)
            }catch(err){
                setError("Failed to fetch data")
            }finally{
                setLoading(false)
            }
            
        }

        fetchPopularMovies()
    },[])

    //fetch popular Tvshows for carousel
    useEffect(() => {
        const fetchPopularTvshows = async() => {
            try{
                //const { data } = await axios.get(`${baseUrl}/discover/movie?api_key=${apiKey}&language=en-US&page=1&with_genres=28`)
                const { data } = await axios.get(`${baseUrl}/tv/popular?api_key=${apiKey}&language=en-US&page=1&with_genres=${selectedGenre}`)
                setPopularTvshows(data?.results)
            }catch(err){
                setError("Failed to fetch data")
            }finally{
                setLoading(false)
            }
            
        }

        fetchPopularTvshows()
    },[])

    //fetch Search Results
    const [searchResults, setSearchResults] = useState<any[]>([])
    const [query, setQuery] = useState<string>("")

    useEffect(() => {
        const fetchSearchResults = async(query:string, page:number) => {
            try{
                //const { data } = await axios.get(`${baseUrl}/discover/movie?api_key=${apiKey}&language=en-US&page=1&with_genres=28`)
                const { data } = await axios.get(`${baseUrl}/search/multi?api_key=${apiKey}&language=en-US&page=${page}&query=${query}`)
                setSearchResults(data?.results)
            }catch(err){
                setError("Failed to fetch data")
            }finally{
                setLoading(false)
            }
            
        }

        fetchSearchResults(query,page)
    },[query,page])

    
    
    

    return(
        <MovieApiDataContext.Provider value={{
            movieData, 
            loading, error, 
            genreData,selectedGenre,
            setSelectedGenre,selectedGenreMovies, 
            popularMovies,
            setSelectedMovieId,selectedMovieId,
            page, setPage,
            popularTvshows, tvshowsData,
            genreList, selectedGenreTvshows,
            searchResults,
            setQuery
            }}>
            {children}
        </MovieApiDataContext.Provider>
    )
}

export const imagePath = "https://image.tmdb.org/t/p/w500"
export const imagePathOriginal = "https://image.tmdb.org/t/p/original/"
export const baseUrl = import.meta.env.VITE_API_URL
export const apiKey = import.meta.env.VITE_API_KEY



export const useMovieApi = () => {
    const context = useContext(MovieApiDataContext)
    if(!context){
        throw new Error("useMovieApi must be used within an ApiProvider")
    }
    return context
}