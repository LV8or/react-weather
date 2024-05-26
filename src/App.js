import { useState } from "react";
import { weatherApiUrl, weatherApiKey} from './api';
import Search from './components/search/search';
import Loader from './components/loader/loader';
import CurrentWeather from "./components/current-weather/current-weather";
import Forecast from "./components/forecast/forecast";
import ErrorMsg from "./components/errormsg/errormsg";
import './App.css';

export default function App() {

  const [loading, setLoading] = useState(false);
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [dataError, setDataError] = useState(null);

  const handleOnSearchChange = async (searchData) => {
    setLoading(true);
    const [lat, lon] = searchData.value.split(" ");

    try {
      const currentWeatherResp = await fetch(`${weatherApiUrl}/weather?lat=${lat}&lon=${lon}&appid=${weatherApiKey}&units=imperial`);
      const wdata = await currentWeatherResp.json();

      if(wdata && wdata.cod === 200) {
        setCurrentWeather({city: searchData.label, ...wdata});

        try {
          const forecastFetch = await fetch(`${weatherApiUrl}/forecast?lat=${lat}&lon=${lon}&appid=${weatherApiKey}&units=imperial`);
          const fdata = await forecastFetch.json();

          if(fdata && fdata.cod === '200') {
            setForecast({city: searchData.label, ...fdata})
          }else{
            setDataError("Message (forecast): "+fdata.message+", Status: "+fdata.cod);
          }
        }catch(error) {
          setDataError('Failed to load forecast: '+error);
        }

      }else{
        setDataError("Message (weather): "+wdata.message+", Status: "+wdata.cod);
      }

    }catch(error) {
      setDataError('Failed to load weather: '+error);
    }finally{
      setLoading(false);
    }

  }

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
      {loading && <Loader/>}
      {currentWeather && <CurrentWeather data={currentWeather} />}
      {forecast && <Forecast data={forecast}/>}
      {dataError && <ErrorMsg err={dataError}/>}
    </div>
  );
}