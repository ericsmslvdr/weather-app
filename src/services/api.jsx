import axios from 'axios'
const url = import.meta.env.VITE_BASE_URL
const key = import.meta.env.VITE_API_KEY

const fetchCurrentWeather = async (location) => {
    try {
        const response = await axios.get(`${url}/current.json?key=${key}&q=${location}`)
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export {
    fetchCurrentWeather
}