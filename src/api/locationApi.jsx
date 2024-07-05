import axios from 'axios'

// pls be gud, gh pages wont let me add keys to .env
const key = "94fb58f8fac846bd90552644230410"
const url = "https://api.weatherapi.com/v1"

export const fetchCurrentWeather = async (location) => {
    const API_ENDPOINT = `${url}/current.json?key=${key}&q=${location}`;
    const response = await axios.get(API_ENDPOINT)
    return response.data
}