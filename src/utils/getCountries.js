import { startCountriesRequest, getCountriesSuccess, getCountriesFailure } from '../redux/countries/actions';
import data from './data';

// const axios = require('axios').default;

// const getCountries = () => async (dispatch) => {
//   dispatch(startCountriesRequest());
//   const options = {
//     method: 'GET',
//     url: 'https://countries33.p.rapidapi.com/basic',
//     headers: {
//       'x-rapidapi-host': 'countries33.p.rapidapi.com',
//       'x-rapidapi-key': '40053a8a1cmsh4aa0adbed87465bp11a5cdjsn9bac254bdc85',
//     },
//   };
//   axios.request(options).then((response) => {
//     dispatch(getCountriesSuccess(response.data));
//   }).catch((error) => {
//     dispatch(getCountriesFailure(error.message));
//   });
// };

const getCountries = () => async (dispatch) => {
  dispatch(startCountriesRequest());
  try {
    dispatch(getCountriesSuccess(data));
  } catch (error) {
    dispatch(getCountriesFailure(error.message));
  }
};

export default getCountries;
