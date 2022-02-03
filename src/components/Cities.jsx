import PropTypes from 'prop-types';
import CityCard from './CityCard';

const Cities = ({ cities }) => (
  <ul>
    {
      cities.map((city) => (
        <CityCard key={city} title={city} />
      ))
    }
  </ul>
);

Cities.propTypes = {
  cities: PropTypes.oneOfType([PropTypes.array]).isRequired,
};

export default Cities;
