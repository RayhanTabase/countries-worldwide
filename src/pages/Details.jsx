import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Flags from 'country-flag-icons/react/3x2';

import InfoCard from '../components/InfoCard';
import SectionTitle from '../components/SectionTitle';
import Cities from '../components/Cities';
import getCities from '../utils/getCities';

const Details = () => {
  const param = useParams();
  const { id } = param;
  const { countries } = useSelector((state) => state.countriesReducer);
  const country = countries.find((country) => country.iso_3166.numeric === id);
  const Flag = country ? Flags[country.iso_3166.alpha2] : Flags;

  const [citiesData, setCitiesData] = useState([]);
  const [countryName, setCountryName] = useState('');
  const [loadingCities, setLoadingCities] = useState(true);

  if (!countryName && country) setCountryName(country.name);
  useEffect(async () => {
    if (countryName) {
      const data = await getCities(countryName);
      console.log(data);
      if (!data) setCitiesData([]);
      else setCitiesData(data);
      setLoadingCities(false);
    }
  }, [countryName]);

  return (
    <>
      {country ? (
        <>
          <div className="flex justify-between p-3">
            <div className="w-[45%] max-w-28 max-h-28">
              <Flag className="max-h-[100%]" />
            </div>
            <div className="w-[45%] flex flex-col justify-center items-end">
              <h2 className="text-lg font-semibold text-right">
                {country.name}
              </h2>
              <p>
                { Math.abs(country.population.total) > 999
                  ? `${((Math.abs(country.population.total) / 1000).toFixed(1))}k`
                  : Math.abs(country.population.total)}
              </p>
            </div>
          </div>
          <SectionTitle title="Other Information" />
          <ul>
            <InfoCard
              key="1"
              title="State"
              info={country.state_name ? country.state_name : 'None'}
              clickable={false}
            />
            { country.capital ? country.capital.map((cap, index) => (
              <InfoCard
                key={cap.name}
                title={`Capital ${index + 1}`}
                info={cap.name}
                clickable={false}
              />
            ))
              : (
                <InfoCard
                  key="2"
                  title="Capital"
                  info="None"
                  clickable={false}
                />
              )}
            <InfoCard
              key="3"
              title="Region"
              info={country.un_geoscheme.region ? country.un_geoscheme.region : 'None'}
              clickable={false}
            />
            <InfoCard
              key="4"
              title="Sub-region"
              info={country.un_geoscheme.subregion ? country.un_geoscheme.subregion : 'None'}
              clickable={false}
            />
          </ul>
          <SectionTitle title="Cities" />
          <Cities
            citiesData={citiesData}
            loading={loadingCities}
            capital={country.capital ? country.capital.map((cap) => cap.name) : []}
          />
        </>
      ) : (
        <p className="text-center p-16">No Results</p>
      )}
    </>
  );
};

export default Details;
