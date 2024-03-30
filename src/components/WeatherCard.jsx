import { useState } from "react"

const WeatherCard = ({ data }) => {
    const date = new Date(data.current.last_updated)
    const dateOptions = { weekday: 'long', hour: 'numeric', minute: 'numeric', hour12: true }
    const formattedDate = date.toLocaleString('en-US', dateOptions)

    const [currTemperature, setCurrTemperature] = useState(data.current.temp_c)

    const changeMeasurement = (measurement) => {
        if (measurement === 'celsius') {
            setCurrTemperature(data.current.temp_c)
        } else {
            setCurrTemperature(data.current.temp_f)

        }
    }

    return (
        <div className='bg-blue-400 rounded-lg p-4'>
            <p className="text-slate-800 font-medium">Current weather in {data.location.name}:</p>
            <p className="text-slate-700">{formattedDate}</p>
            <div className='flex gap-16'>
                <div className="flex gap-2">
                    <img className="w-28" src={data.current.condition.icon} alt="" />
                    <span className="pt-4 text-3xl font-medium">{currTemperature}
                        <span className="cursor-pointer" onClick={() => changeMeasurement('celsius')}> &#8451;</span> | <span className="cursor-pointer" onClick={() => changeMeasurement('fahrenheit')}>&#8457;</span>
                    </span>
                </div>
                <div>
                    <p>{data.current.condition.text}</p>
                    <span>{data.current.feelslike_c}&#8451; / {data.current.feelslike_f}&#8457;</span>
                </div>
            </div>
            <div className='flex gap-16'>
                <div>
                    <p>wind</p>
                    <p>{data.current.wind_kph}kph / {data.current.wind_mph}mph</p>
                    <p>from {data.current.wind_dir}</p>
                </div>
                <div>
                    <p>humidity</p>
                    <p>{data.current.humidity}%</p>
                </div>
                <div>
                    <p>visibility</p>
                    <p>{data.current.vis_km} km / {data.current.vis_miles} mi</p>
                </div>
                <div>
                    <p>pressure</p>
                    <p>{data.current.pressure_mb} mb / {data.current.pressure_in} inHg </p>
                </div>
            </div>
        </div>
    )
}

export default WeatherCard