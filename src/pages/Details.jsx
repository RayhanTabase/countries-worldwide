import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';

const Details = () => {
  const param = useParams();
  const { id } = param;
  const { countries } = useSelector((state) => state.countriesReducer);
  const country = countries.find((country) => country.iso_3166.numeric === id);

  return (
    <>
      <Link to="/">
        Back
      </Link>

      {country ? (
        <>
          <div>
            {country.name}
          </div>
          <div>
            {country.state_name}
          </div>
          <div>
            <h3>
              {country.capital.length}
              {' '}
              Capital(s)
            </h3>
            {country.capital.map((cap) => (
              <p key={cap.name}>{cap.name}</p>
            ))}
          </div>
          <div>
            {country.un_geoscheme.region}
          </div>
          <div>
            {country.un_geoscheme.subregion}
          </div>
        </>
      ) : (
        <p>No Results</p>
      )}
    </>
  );
};

export default Details;
