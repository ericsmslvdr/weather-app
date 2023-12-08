
const Footer = () => {
    return (
        <div className="fixed bottom-0 left-0 right-0 flex items-center justify-center gap-4 py-4">
            <span>
                Powered by <a href="https://www.weatherapi.com/" title="Weather API" className="text-blue-700" target="_blank">WeatherAPI.com</a>
            </span>
            <a target="_blank" href="https://www.weatherapi.com/" title="Free Weather API"><img src='//cdn.weatherapi.com/v4/images/weatherapi_logo.png' alt="Weather data by WeatherAPI.com" border="0" /></a>
        </div>
    )
}

export default Footer