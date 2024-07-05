import { createContext, useEffect, useState } from "react";
import { fetchCurrentWeather } from "../api/locationApi";
import PropTypes from "prop-types";

const LocationContext = createContext()

export const LocationProvider = ({ children }) => {
    const [locationData, setLocationData] = useState(null);
    const [locationToSearch, setLocationToSearch] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchWeatherInfo = async () => {
            setLoading(true)
            setError("")
            setLocationData(null)

            if (!locationToSearch) {
                return
            }

            try {
                const response = await fetchCurrentWeather(locationToSearch);
                setLocationData(response);
                setLoading(false);
            } catch (error) {
                if (error.response.data.error.code === 1006) {
                    setError(error.response.data.error.message)
                }
                setLoading(false)
                setTimeout(() => {
                    setError("");
                }, 3000);
            }
        }

        fetchWeatherInfo()
    }, [locationToSearch])

    const value = {
        setLocationToSearch,
        locationData,
        loading,
        error
    }

    return (
        <LocationContext.Provider value={value}>
            {children}
        </LocationContext.Provider>
    )
}

LocationProvider.propTypes = {
    children: PropTypes.node
}

export default LocationContext
