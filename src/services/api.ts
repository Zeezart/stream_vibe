import axios from "axios"

const baseURL="https://api.themoviedb.org/3"
const apiKey = import.meta.env.VITE_API_KEY

//TRENDING
export const fetchTrending = async (time_window = "day") => {
    const res = await axios.get(`$(baseURL)/trending/all/$(time_window)?api_key=$(apiKey)`)

    return res
}