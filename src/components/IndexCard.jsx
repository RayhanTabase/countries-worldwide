import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Flags from 'country-flag-icons/react/3x2';
import { BsArrowRightCircle } from 'react-icons/bs';

const IndexCard = ({
  id, name, population, flagName, shade,
}) => {
  const Flag = Flags[flagName];
  return (
    <li className={`${shade ? 'bg-[#3E61A3] border-[#4369B0]' : 'bg-[#4369B0] border-[#3E61A3] border'} h-40`}>
      <Link to={`/details/${id}`}>
        <div className="flex flex-col justify-between h-[100%] w-[100%] p-2">
          <div className="h-[50%] w-[100%] flex justify-between items-start">
            <Flag className="w-[70%] max-h-[100%] " />
            <BsArrowRightCircle className="w-[15%] justify-self-end" />
          </div>
          <div className="h-[50%] flex flex-col justify-end overflow-hidden gap-4">
            <p className="font-semibold max-h-[50%] text-right">
              {name}
            </p>
            <p className="max-h-[50%] text-right">
              { Math.abs(population) > 999 ? `${((Math.abs(population) / 1000).toFixed(1))}k` : Math.abs(population)}
            </p>
          </div>
        </div>
      </Link>
    </li>
  );
};

IndexCard.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  population: PropTypes.number.isRequired,
  flagName: PropTypes.string.isRequired,
  shade: PropTypes.bool.isRequired,
};

export default IndexCard;
