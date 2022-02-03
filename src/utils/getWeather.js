const getWeather = async (city) => {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f6c9106f9780f4cf1068a15ee4a98a67`);
  const data = await response.json();
  return data;
};

export default getWeather;
