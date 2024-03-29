import PropTypes from 'prop-types';
import { useParams, Link } from 'react-router-dom';
import { BsArrowRightCircle } from 'react-icons/bs';

const CityCard = ({ title }) => {
  const param = useParams();
  const { id } = param;
  return (
    <li className="odd:bg-[#3E61A3] bg-[#4369B0]">
      <Link to={`/city/weather/${id}/${title}`}>
        <div className="flex flex-wrap justify-between h-24 px-1 items-center">
          <p className="w-[30%]">{title}</p>
          <BsArrowRightCircle className="w-[10%]" />
        </div>
      </Link>
    </li>
  );
};

CityCard.propTypes = {
  title: PropTypes.string.isRequired,
};

export default CityCard;
