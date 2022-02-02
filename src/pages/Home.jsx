import { useState } from 'react';
import { useSelector } from 'react-redux';
import IndexCard from '../components/IndexCard';

const Home = () => {
  const [queryName, setQueryName] = useState('');
  const [queryRegion, setQueryRegion] = useState('all');
  const [pageNumber, setPageNumber] = useState(1);

  let { countries } = useSelector((state) => state.countriesReducer);
  const countriesLength = countries.length;
  const { loading } = useSelector((state) => state.countriesReducer);
  let regions = new Set(countries.map((country) => country.un_geoscheme.region));
  regions = [...regions];

  if (queryRegion !== 'all') {
    countries = countries.filter((country) => {
      const countryRegion = country.un_geoscheme.region;
      return countryRegion === queryRegion;
    });
  }

  if (queryName.trim()) {
    countries = countries.filter((country) => {
      const name = country.name.toUpperCase();
      return name.includes(queryName.trim().toUpperCase());
    });
  }

  countries = countries.slice((pageNumber - 1) * 6, pageNumber * 6);

  const changePageNumber = (value) => {
    if (value < 0 && pageNumber === 1) return;
    if (value > 0 && pageNumber * 6 > countriesLength) {
      return;
    }
    setPageNumber((prev) => prev + value);
  };

  return (
    <div>
      <input value={queryName} onChange={(e) => setQueryName(e.target.value)} placeholder="Search country by name" />
      <br />
      <select name="" value={queryRegion} onChange={(e) => setQueryRegion(e.target.value)}>
        <option value="all">All</option>
        { regions
          ? regions.map((region) => (
            <option key={region} value={region}>
              {region}
            </option>

          ))
          : ''}
      </select>

      { loading && <p>Loading...</p> }

      { countries.length < 1 && !loading
        ? (
          <p>Not found</p>
        )
        : (
          <ul>
            {countries.map((country) => (
              <IndexCard
                key={country.iso_3166.numeric}
                id={country.iso_3166.numeric}
                name={country.name}
                population={country.population.total}
                flagName={country.iso_3166.alpha2}
              />
            ))}
          </ul>
        )}
      <div>
        <button type="button" onClick={() => changePageNumber(-1)}>Prev</button>
        <p>{pageNumber}</p>
        <button type="button" onClick={() => changePageNumber(1)}>Next</button>
      </div>
    </div>
  );
};

export default Home;
