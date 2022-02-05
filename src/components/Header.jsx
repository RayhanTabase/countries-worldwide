import { FiSettings } from 'react-icons/fi';
import { FaMicrophone } from 'react-icons/fa';
import { IoIosArrowBack } from 'react-icons/io';
import { useLocation, Link } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const locationList = location.pathname.split('/');
  console.log(locationList[3]);
  return (
    <header className="flex justify-between p-2 mb-5 border-b border-blue-400">
      {
          location.pathname === '/' && <p>2022</p>
      }

      { location.pathname.includes('/details/')
          && (
          <Link to="/">
            <IoIosArrowBack />
          </Link>
          )}

      {
          locationList[4] && (
            <Link to={`/details/${locationList[3]}`}>
              <IoIosArrowBack />
            </Link>
          )
      }

      <h1>Worldwide countries</h1>
      <div className="flex justify-center items-center gap-2">
        <FaMicrophone />
        <FiSettings />
      </div>
    </header>
  );
};

export default Header;
