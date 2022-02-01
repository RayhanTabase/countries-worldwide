import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const IndexCard = ({ id, name, population }) => (
  <li>
    <Link to={`/details/${id}`}>
      <p>
        {name}
      </p>
      <p>
        {population}
      </p>
    </Link>
  </li>
);

IndexCard.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  population: PropTypes.string.isRequired,
};

export default IndexCard;
