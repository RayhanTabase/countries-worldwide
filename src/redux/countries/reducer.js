import { START_REQUEST_COUNTRIES, GET_COUNTRIES_SUCCESS, GET_COUNTRIES_FAILURE } from './constants';

const initialState = {
  loading: true,
  countries: [],
  error: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case START_REQUEST_COUNTRIES:
      return {
        ...state,
        loading: true,
      };

    case GET_COUNTRIES_SUCCESS:
      return {
        ...state,
        loading: false,
        countries: action.payload,
      };

    case GET_COUNTRIES_FAILURE:
      return {
        ...state,
        loading: false,
        error: `${action.payload}`,
      };

    default:
      return state;
  }
};

export default reducer;
