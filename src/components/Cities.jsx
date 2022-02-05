import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import CityCard from './CityCard';
import Spinner from './Spinner';

const Cities = ({ citiesData, loading, capital }) => {
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
    if (value > 0 && pageNumber * 5 > cities.length) {
      return;
    }
    setPageNumber((prev) => prev + value);
  };

  return (
    <>
      {
      cities.length > 0
        ? (
          <>
            <div className="flex justify-center items-center p-4">
              <input
                onChange={(e) => { searchName(e.target.value); setPageNumber(1); }}
                placeholder="Search by name"
                className="bg-blue-400 text-white placeholder:text-white rounded p-2"
              />
            </div>
            <ul>
              {
                cities.slice((pageNumber - 1) * 5, pageNumber * 5).map((city) => (
                  <CityCard key={city} title={city} />
                ))
              }
            </ul>
            <div className="flex items-center justify-center gap-4 pb-10 mt-8">
              <button type="button" onClick={() => changePageNumber(-1)} className="bg-blue-400 p-2 rounded ">Prev</button>
              <p>{pageNumber}</p>
              <button type="button" onClick={() => changePageNumber(1)} className="bg-blue-400 p-2 rounded ">Next</button>
            </div>
          </>
        )
        : (
          <>
            {loading && <Spinner />}
            {!loading && capital.length < 1 && <p className="text-center p-2">No cities Available</p>}
            {!loading && capital.length > 0
             && (
             <ul>
               {
                  capital.map((city) => (
                    <CityCard key={city} title={city} />
                  ))
                }
             </ul>
             )}
          </>
        )
    }
    </>
  );
};

Cities.propTypes = {
  citiesData: PropTypes.oneOfType([PropTypes.array]).isRequired,
  capital: PropTypes.oneOfType([PropTypes.array]).isRequired,
  loading: PropTypes.bool.isRequired,
};

export default Cities;
