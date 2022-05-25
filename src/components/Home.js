import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { countryDetails, getCountriesData } from '../redux/CountriesSlice';
import './Home.css';

const Home = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.allCountries);
  console.log(countries);

  useEffect(() => {
    dispatch(getCountriesData());
  }, [dispatch]);

  const countryDetailsHandler = ({ target }) => {
    const { id } = target;
    dispatch(countryDetails(id));
  };

  return (
    <div>
      <div className="wrap">
        {countries.map((country) => (
          <div key={country.name} className="country-card">
            <Link to='/detail'>
              <img
                id={country.name}
                src={country.flag}
                alt={`${country.name}'s flag`}
                onClick={countryDetailsHandler}
              />
            </Link>
            <p>{country.name}</p>
            <p>{country.population}</p>

            {/* <div className="card">
                    <img
                      src={country.flag}
                      className="card-img-top"
                      alt={`${country.name}'s flag`}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{country.name}</h5>
                      <p className="card-text">{`Population: ${country.population}`}</p>
                    </div>
                  </div>
                */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
