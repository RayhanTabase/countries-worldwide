import { START_REQUEST_COUNTRIES, GET_COUNTRIES_SUCCESS, GET_COUNTRIES_FAILURE } from './constants';

export const startCountriesRequest = () => ({
  type: START_REQUEST_COUNTRIES,
});

export const getCountriesSuccess = (payload) => ({
  type: GET_COUNTRIES_SUCCESS,
  payload,
});

export const getCountriesFailure = (payload) => ({
  type: GET_COUNTRIES_FAILURE,
  payload,
});
