import { useState } from "react"
import useLocation from "../hooks/useLocation";

const WeatherCard = () => {
    const { locationData, loading } = useLocation();

    const date = new Date(locationData.current.last_updated)
    const dateOptions = { weekday: 'long', hour: 'numeric', minute: 'numeric', hour12: true }
    const formattedDate = date.toLocaleString('en-US', dateOptions)

    const [currTemperature, setCurrTemperature] = useState(locationData.current.temp_c)

    const changeMeasurement = (measurement) => {
        if (measurement === 'celsius') {
            setCurrTemperature(locationData.current.temp_c)
        } else {
            setCurrTemperature(locationData.current.temp_f)
        }
    }

    if (loading) {
        return <div>Loading...</div>
    }
    
    return (
        <div className='bg-blue-400 rounded-lg p-4'>
            {!locationData && <div>No locationData found</div>}
            <p className="text-slate-800 font-medium">Current weather in {locationData.location.name}:</p>
            <p className="text-slate-700">{formattedDate}</p>
            <div className='flex gap-16'>
                <div className="flex gap-2">
                    <img className="w-28" src={locationData.current.condition.icon} alt="" />
                    <span className="pt-4 text-3xl font-medium">{currTemperature}
                        <span className="cursor-pointer" onClick={() => changeMeasurement('celsius')}> &#8451;</span> | <span className="cursor-pointer" onClick={() => changeMeasurement('fahrenheit')}>&#8457;</span>
                    </span>
                </div>
                <div>
                    <p>{locationData.current.condition.text}</p>
                    <span>{locationData.current.feelslike_c}&#8451; / {locationData.current.feelslike_f}&#8457;</span>
                </div>
            </div>
            <div className='flex gap-16'>
                <div>
                    <p>wind</p>
                    <p>{locationData.current.wind_kph}kph / {locationData.current.wind_mph}mph</p>
                    <p>from {locationData.current.wind_dir}</p>
                </div>
                <div>
                    <p>humidity</p>
                    <p>{locationData.current.humidity}%</p>
                </div>
                <div>
                    <p>visibility</p>
                    <p>{locationData.current.vis_km} km / {locationData.current.vis_miles} mi</p>
                </div>
                <div>
                    <p>pressure</p>
                    <p>{locationData.current.pressure_mb} mb / {locationData.current.pressure_in} inHg </p>
                </div>
            </div>
        </div>
    )
}

export default WeatherCard