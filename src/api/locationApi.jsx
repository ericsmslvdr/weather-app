import axios from 'axios'
const url = import.meta.env.VITE_BASE_URL
const key = import.meta.env.VITE_API_KEY

export const fetchCurrentWeather = async (location) => {
    const API_ENDPOINT = `${url}/current.json?key=${key}&q=${location}`;
    const response = await axios.get(API_ENDPOINT)
    return response.data
}