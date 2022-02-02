import { useState } from 'react';
import { useSelector } from 'react-redux';
import IndexCard from '../components/IndexCard';
import Spinner from '../components/Spinner';
import Continent from '../components/Continent';

const Home = () => {
  const [queryName, setQueryName] = useState('');
  const [queryRegion, setQueryRegion] = useState('all');
  const [pageNumber, setPageNumber] = useState(1);

  let { countries } = useSelector((state) => state.countriesReducer);
  let countriesLength = countries.length;
  const { loading } = useSelector((state) => state.countriesReducer);
  let regions = new Set(countries.map((country) => country.un_geoscheme.region));
  regions = [...regions];

  if (queryRegion !== 'all') {
    countries = countries.filter((country) => {
      const countryRegion = country.un_geoscheme.region;
      return countryRegion === queryRegion;
    });
    countriesLength = countries.length;
  }

  const regionPop = countries.reduce(
    (partialSum, country) => partialSum + parseInt(country.population.total, 10), 0,
  );

  if (queryName.trim()) {
    countries = countries.filter((country) => {
      const name = country.name.toUpperCase();
      return name.includes(queryName.trim().toUpperCase());
    });
    countriesLength = countries.length;
  }

  const changePageNumber = (value) => {
    if (value < 0 && pageNumber === 1) return;
    if (value > 0 && pageNumber * 6 > countriesLength) {
      return;
    }
    setPageNumber((prev) => prev + value);
  };
  let counterShade = 2;
  countries = countries.slice((pageNumber - 1) * 6, pageNumber * 6);

  return (
    <div>
      <div className="flex flex-col gap-7 justify-center items-center rounded mb-7">
        <select
          name=""
          value={queryRegion}
          onChange={(e) => { setQueryRegion(e.target.value); setPageNumber(1); }}
          className="bg-blue-400 flex w-36 h-10"
        >
          <option value="all">All</option>
          { regions
            ? regions.map((region) => (
              <option key={region} value={region}>
                {region}
              </option>

            ))
            : ''}
        </select>
        <input
          value={queryName}
          onChange={(e) => { setQueryName(e.target.value); setPageNumber(1); }}
          placeholder="Search by name"
          className="bg-blue-400 text-white placeholder:text-white rounded p-2"
        />
      </div>
      <Continent region={queryRegion} totalPop={regionPop} />
      <p className="text-sm bg-[#35548B] pl-3">
        POP BY COUNTRY
      </p>

      { loading && <Spinner /> }

      { countries.length < 1 && !loading
        ? (
          <p>Not found</p>
        )
        : (
          <>
            <ul className="grid grid-cols-2 mb-10">
              {countries.map((country, index) => {
                const position = index + 1;
                let shade = false;
                if (position === counterShade) {
                  shade = true;
                  counterShade = position % 2 === 0 ? counterShade + 1 : counterShade + 3;
                }
                return (
                  <IndexCard
                    key={country.iso_3166.numeric}
                    id={country.iso_3166.numeric}
                    name={country.name}
                    population={parseInt(country.population.total, 10)}
                    flagName={country.iso_3166.alpha2}
                    shade={shade}
                  />
                );
              })}
            </ul>
            <div className="flex items-center justify-center gap-4 pb-10">
              <button type="button" onClick={() => changePageNumber(-1)} className="bg-blue-400 p-2 rounded ">Prev</button>
              <p>{pageNumber}</p>
              <button type="button" onClick={() => changePageNumber(1)} className="bg-blue-400 p-2 rounded ">Next</button>
            </div>
          </>
        )}
    </div>
  );
};

export default Home;
