import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Flags from 'country-flag-icons/react/3x2';
import InfoCard from '../components/InfoCard';

const Details = () => {
  const param = useParams();
  const { id } = param;
  const { countries } = useSelector((state) => state.countriesReducer);
  const country = countries.find((country) => country.iso_3166.numeric === id);
  const Flag = country ? Flags[country.iso_3166.alpha2] : Flags;

  return (
    <>
      {country ? (
        <>
          <div className="flex p-3">
            <div className="w-[50%] max-w-28 max-h-28">
              <Flag className="max-h-[100%]" />
            </div>
            <div className="w-[50%] flex flex-col justify-center items-end">
              <h2 className="text-lg font-semibold">
                {country.name}
              </h2>
              <p>
                { Math.abs(country.population.total) > 999
                  ? `${Math.sign(country.population.total) * ((Math.abs(country.population.total) / 1000).toFixed(1))}k`
                  : Math.sign(country.population.total) * Math.abs(country.population.total)}
              </p>
            </div>
          </div>
          <p className="text-sm bg-[#35548B] pl-3">
            Other Information
          </p>
          <ul>
            <InfoCard
              key="1"
              title="State"
              info={country.state_name ? country.state_name : 'None'}
            />
            { country.capital ? country.capital.map((cap, index) => (
              <InfoCard
                key="2"
                title={`Capital ${index + 1}`}
                info={cap.name}
              />
            ))
              : (
                <InfoCard
                  key="3"
                  title="Capital"
                  info="None"
                />
              )}
            <InfoCard
              key="4"
              title="Region"
              info={country.un_geoscheme.region ? country.un_geoscheme.region : 'None'}
            />
            <InfoCard
              key="5"
              title="Sub-region"
              info={country.un_geoscheme.subregion ? country.un_geoscheme.subregion : 'None'}
            />
          </ul>
        </>
      ) : (
        <p className="text-center p-16">No Results</p>
      )}
    </>
  );
};

export default Details;
