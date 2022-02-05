import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import getWeather from '../utils/getWeather';

const City = () => {
  const param = useParams();
  const { city } = param;
  const [weather, setWeather] = useState(null);
  const [main, setMain] = useState(null);
  const [wind, setWind] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    const data = await getWeather(city);
    if (data) {
      setWeather(data.weather[0]);
      setMain(data.main);
      setWind(data.wind);
    }
    setLoading(false);
  }, []);
  return (
    <div className="px-4 flex flex-col justify-center items-center">
      <h3 className=" text-lg font-bold mb-10">{city}</h3>
      {
        !loading && !weather && <p>Unavailable</p>
      }
      {
        weather
        && (
        <div>
          <img src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`} alt="weather icon" />
        </div>
        )
      }
      {
        weather
        && <p>{weather.description}</p>
      }
      {
        main
        && (
        <p>
          {main.temp}
          {' '}
          °C
          temp
        </p>
        )
      }
      {
        wind
        && (
        <p>
          {wind.speed}
          {' '}
          m/s
          wind
        </p>
        )
      }
    </div>
  );
};

export default City;
