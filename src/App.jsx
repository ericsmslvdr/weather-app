import { useEffect, useState } from 'react'
import { fetchCurrentWeather } from './services/api'
import Footer from './components/Footer'

function App() {
  const [location, setLocation] = useState("")
  const [data, setData] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    const input = document.getElementById('location-input').value
    setLocation(input)
  }

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
      <div className='container mx-auto flex justify-center'>
        <div className='flex flex-col w-1/2'>
          <form>
            <label for="location-input" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div class="relative">
              <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
              </div>
              <input
                type="search"
                id="location-input"
                class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search City here..."
                required />
              <button
                type="submit"
                onClick={handleSubmit}
                class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >Search</button>
            </div>
          </form>

          {data == null
            ? null
            : <>
              <div className='bg-blue-400'>
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
                  <div className='bg-orange-200'>
                    <p>pressure</p>
                    <p>{data.current.pressure_mb} mb / {data.current.pressure_in} inHg </p>
                  </div>
                </div>
              </div>
            </>
          }

          <Footer />
        </div >
      </div >
    </>
  )
}

export default App
