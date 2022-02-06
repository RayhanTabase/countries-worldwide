const getCities = async (country) => {
  try {
    const response = await fetch('https://countriesnow.space/api/v0.1/countries/cities',
      {
        method: 'POST',
        body: JSON.stringify({
          country,
        }),
        mode: 'cors',
        headers: {
          'Content-type': 'application/json',
          Accept: 'application/json',
        },
      });
    const data = await response.json();
    return data.data;
  } catch (error) {
    return false;
  }
};

export default getCities;
