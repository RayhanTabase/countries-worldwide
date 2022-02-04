import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import getWeather from '../utils/getWeather';

const City = () => {
  const param = useParams();
  const { city } = param;
  const [weather, setWeather] = useState([]);
  const [main, setMain] = useState([]);
  const [wind, setWind] = useState([]);

  useEffect(async () => {
    const data = await getWeather(city);
    setWeather(data.weather[0]);
    setMain(data.main);
    setWind(data.wind);

    console.log(data);
  }, []);
  return (
    <div>
      {city}
      {
        weather
          ? (
            <>
              <div>{weather.description}</div>
              <div>{main.temp}</div>
              <div>{wind.speed}</div>
            </>
          )
          : ''
      }
    </div>
  );
};

export default City;
