const getWeather = async (city) => {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=f6c9106f9780f4cf1068a15ee4a98a67`);
    if (response.status === 200) {
      const data = await response.json();
      return data;
    }
    throw Error('Something went wrong');
  } catch (error) {
    return false;
  }
};

export default getWeather;
