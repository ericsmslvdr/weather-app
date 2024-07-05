import Footer from './components/Footer'
import WeatherCard from './components/WeatherCard'
import SearchBar from './components/SearchBar'
import useLocation from './hooks/useLocation'

function App() {
  const { locationData, error } = useLocation()

  return (
    <div className='container mx-auto flex justify-center h-screen'>
      <div className='m-auto w-1/2'>
        <div className='flex flex-col gap-4'>
          <SearchBar />
          {locationData && <WeatherCard />}
          {error && <div>{error}</div>}
          <Footer />
        </div >
      </div>
    </div >
  )
}

export default App
