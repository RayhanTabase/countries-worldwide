import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import store from '../redux/configureStore';

import countryReducer from '../redux/countries/reducer';
import { START_REQUEST_COUNTRIES, GET_COUNTRIES_SUCCESS, GET_COUNTRIES_FAILURE } from '../redux/countries/constants';
import Home from '../pages/Home';
import IndexCard from '../components/IndexCard';
import data from '../utils/data';

describe('Home page test', () => {
  test('snapshot test for Home', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <Home />
      </Provider>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

describe('Index card', () => {
  test('snapshot test and name render for IndexCard component', () => {
    const { asFragment } = render(
      <IndexCard
        key="1"
        id="004"
        name="Afghanistan"
        population="3140853"
        flagName="AF"
        shade={false}
      />,
      { wrapper: MemoryRouter },
    );
    expect(asFragment()).toMatchSnapshot();
    expect(screen.getByText('Afghanistan')).toBeInTheDocument();
  });
});

describe('Unit test for countries reducer', () => {
  it('test that when API is still being fetched loading is set to true', () => {
    expect(countryReducer({ countries: [], loading: false, error: '' }, { type: START_REQUEST_COUNTRIES })).toEqual(
      {
        countries: [],
        loading: true,
        error: '',
      },
    );
  });

  it('test that data is fetched from the API and loading is set to false', () => {
    expect(countryReducer({ countries: [], loading: true, error: '' }, { type: GET_COUNTRIES_SUCCESS, payload: data })).toEqual(
      {
        countries: data,
        loading: false,
        error: '',
      },
    );
  });

  it('test that failed fetch', () => {
    const errorMessage = 'failed to respond';
    expect(countryReducer({ countries: [], loading: true, error: '' }, { type: GET_COUNTRIES_FAILURE, payload: errorMessage })).toEqual(
      {
        countries: [],
        loading: false,
        error: errorMessage,
      },
    );
  });
});
