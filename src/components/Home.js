import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { countryDetails, getCountriesData } from '../redux/CountriesSlice';
import './Home.css';
import Search from './Search';
import Hero from './Hero'

const Home = () => {
  const [query, setQuery] = useState('');

  const dispatch = useDispatch();
  const countries = useSelector((state) => state.allCountries);

  const filteredData = countries.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    dispatch(getCountriesData());
  }, [dispatch]);

  const countryDetailsHandler = ({ target }) => {
    const { id } = target;
    dispatch(countryDetails(id));
  };

  const queryHandler = (e) => {
    setQuery(e.target.value);
  };

  return (
    <>
    <Hero />
      <Search query={query} queryChangeHandler={queryHandler} />
        <ul className="wrap">
          {filteredData.map((country) => (
            <li key={country.name} className="country-card p-2">
              <Link to="/detail" className="name">
                <h5
                  className="name py-2"
                  id={country.name}
                  onClick={countryDetailsHandler}
                >
                  {country.name}
                </h5>
              </Link>
              <p className="population">{`Population : ${country.population}`}</p>
            </li>
          ))}
        </ul>

    </>
  );
};

export default Home;
