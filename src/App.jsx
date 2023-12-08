import { useEffect, useState } from 'react'
import { fetchCurrentWeather } from './services/api'
import Footer from './components/Footer'
import WeatherCard from './components/WeatherCard'
import SearchBar from './components/SearchBar'

function App() {
  const [location, setLocation] = useState("")
  const [data, setData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchCurrentWeather(location);
        setData(response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData()
  }, [location])

  console.log(data)
  console.log(data == null ? 'true' : 'false');

  return (
    <>
      <div className='container mx-auto flex justify-center h-screen'>
        <div className='m-auto w-1/2'>
          <div className='flex flex-col gap-4'>
            <SearchBar setLocation={setLocation} />
            {data == null
              ? null
              : <WeatherCard data={data} />
            }
            <Footer />
          </div >
        </div>
      </div >
    </>
  )
}

export default App
