import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import CityCard from './CityCard';

const Cities = ({ citiesData }) => {
  const [cities, setCities] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  useEffect(() => {
    setCities(citiesData);
  }, [citiesData]);

  const searchName = (queryName) => {
    if (queryName.trim()) {
      const filterCities = citiesData.filter((city) => {
        const name = city.toUpperCase();
        return name.includes(queryName.trim().toUpperCase());
      });
      setCities(filterCities);
    } else {
      setCities(citiesData);
    }
  };

  const changePageNumber = (value) => {
    if (value < 0 && pageNumber === 1) return;
    if (value > 0 && pageNumber * 6 > cities.length) {
      return;
    }
    setPageNumber((prev) => prev + value);
  };

  return (
    <>
      <input
        onChange={(e) => { searchName(e.target.value); setPageNumber(1); }}
        placeholder="Search by name"
        className="bg-blue-400 text-white placeholder:text-white rounded p-2"
      />
      <ul>
        {
          cities.slice((pageNumber - 1) * 6, pageNumber * 6).map((city) => (
            <CityCard key={city} title={city} />
          ))
        }
      </ul>
      <div className="flex items-center justify-center gap-4 pb-10">
        <button type="button" onClick={() => changePageNumber(-1)} className="bg-blue-400 p-2 rounded ">Prev</button>
        <p>{pageNumber}</p>
        <button type="button" onClick={() => changePageNumber(1)} className="bg-blue-400 p-2 rounded ">Next</button>
      </div>
    </>
  );
};

Cities.propTypes = {
  citiesData: PropTypes.oneOfType([PropTypes.array]).isRequired,
};

export default Cities;
