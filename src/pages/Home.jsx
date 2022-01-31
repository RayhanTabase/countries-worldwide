import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Home = () => {
  const [query, setQuery] = useState('');

  let { countries } = useSelector((state) => state.countriesReducer);
  if (query.trim()) {
    countries = countries.filter((country) => {
      const name = country.name.toUpperCase();
      return name.includes(query.trim().toUpperCase());
    });
  }
  return (
    <div>
      <input type="number" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Input query" />
      <ul>
        {countries.map((country) => (
          <li key={country.name}>
            <Link to={`/details/${country.iso_3166.numeric}`}>
              {country.name}
              -----
              {country.population.total}
              {' '}
              people
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
