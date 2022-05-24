import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCountriesData } from '../redux/CountriesSlice';
import './Home.css'

const Home = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.allCountries);
  console.log(countries);

  useEffect(() => {
    dispatch(getCountriesData());
  }, [dispatch]);

  return (
    <div>
      <ul>
        {countries.map((country) => (
          <div key={country.name} className="wrapper">
            <div>
              <img
                src={country.flag}
                alt={`${country.name}'s flag`}
              />
              <p>{country.name}</p>
              <p>{country.population}</p>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Home;
