import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { countryDetails, getCountriesData } from '../redux/CountriesSlice';
import './Home.css';
import Search from './Search';

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
      <Search query={query} queryChangeHandler={queryHandler} />
      <div>
        <div className="wrap">
          {filteredData.map((country) => (
            <div key={country.name} className="country-card rounded p-2">
              <Link to="/detail">
                <img
                  id={country.name}
                  src={country.flag}
                  alt={`${country.name}'s flag`}
                  onClick={countryDetailsHandler}
                />
              </Link>
              <div className="name d-flex align-items-center justify-content-between">
                <Link to="/detail" className="name">
                  <h5
                    className="name py-2"
                    id={country.name}
                    onClick={countryDetailsHandler}
                  >
                    {country.name}
                  </h5>
                </Link>
              </div>
              <p className="population">{`Population : ${country.population}`}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
