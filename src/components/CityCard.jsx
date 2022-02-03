import PropTypes from 'prop-types';
import { BsArrowRightCircle } from 'react-icons/bs';

const CityCard = ({ title }) => (
  <li className="even:bg-[#3E61A3] bg-[#4369B0] flex flex-wrap justify-between h-24 px-1 items-center">
    <p className="w-[30%]">{title}</p>
    <BsArrowRightCircle className="w-[10%]" />
  </li>
);

CityCard.propTypes = {
  title: PropTypes.string.isRequired,
  // info: PropTypes.string.isRequired,
};

export default CityCard;
