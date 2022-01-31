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
        <div>
          {country.name}
        </div>
      ) : (
        <div>
          <p>Loading...</p>
        </div>
      )}
    </>
  );
};

export default Details;
