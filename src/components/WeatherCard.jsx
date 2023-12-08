
const WeatherCard = ({ data }) => {
    return (
        <div className='bg-blue-400 rounded-lg p-4'>
            <p>current weather:</p>
            <p>{data.current.last_updated}</p>
            <div className='flex gap-16'>
                <div className='bg-blue-200'>
                    <img src={data.current.condition.icon} alt="" />
                    <span>{data.current.temp_c}&#8451; / {data.current.temp_f}&#8457;</span>
                </div>
                <div className='bg-red-200'>
                    <p>{data.current.condition.text}</p>
                    <span>{data.current.feelslike_c}&#8451; / {data.current.feelslike_f}&#8457;</span>
                </div>
            </div>
            <div className='flex gap-16'>
                <div className='bg-blue-200'>
                    <p>wind</p>
                    <p>{data.current.wind_kph}kph / {data.current.wind_mph}mph</p>
                    <p>from {data.current.wind_dir}</p>
                </div>
                <div className='bg-red-200'>
                    <p>humidity</p>
                    <p>{data.current.humidity}%</p>
                </div>
                <div className='bg-sky-200'>
                    <p>visibility</p>
                    <p>{data.current.vis_km} km / {data.current.vis_miles} mi</p>
                </div>
                <div className='bg-orange-500'>
                    <p>pressure</p>
                    <p>{data.current.pressure_mb} mb / {data.current.pressure_in} inHg </p>
                </div>
            </div>
        </div>
    )
}

export default WeatherCard