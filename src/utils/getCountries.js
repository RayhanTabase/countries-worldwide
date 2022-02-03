import { startCountriesRequest, getCountriesSuccess } from '../redux/countries/actions';
import data from './data';

const getCountries = () => async (dispatch) => {
  dispatch(startCountriesRequest());
  dispatch(getCountriesSuccess(data));
};

export default getCountries;
