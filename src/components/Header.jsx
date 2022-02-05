import { FiSettings } from 'react-icons/fi';
import { FaMicrophone } from 'react-icons/fa';
import { IoIosArrowBack } from 'react-icons/io';
import { useLocation, Link } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  return (
    <header className="flex justify-between p-2 mb-5 border-b border-blue-400">
      { location.pathname !== '/'
        ? (
          <Link to="/">
            <IoIosArrowBack />
          </Link>
        )
        : '2022'}

      <h1>Worldwide countries</h1>
      <div className="flex justify-center items-center gap-2">
        <FaMicrophone />
        <FiSettings />
      </div>
    </header>
  );
};

export default Header;
