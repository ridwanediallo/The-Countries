import React from 'react';
import { useSelector } from 'react-redux';
import Globe from '../globe.png';

import { Modal } from 'react-bootstrap';
import './Detail.css';

const Detail = () => {
  const countries = useSelector((state) => state.allCountries);

  const filteredCountry = countries.filter(
    (country) => country.clicked === true
  );
  return (
    <section>
      {filteredCountry.map((country) => (
        <div  key={country.name}>
          <ul key={country.name} className="items">
          <header>
            <img className="globe" src={country.flag} alt="globe" />
            <h2 className="title">{country.name}</h2>
          </header>
            <li className="item py-2 px-5">
              <p className="population">Population: </p>
              <p className="population">{country.population}</p>
            </li>
            <li className="item py-2 px-5">
              <p className="population">continent: </p>
              <p className="population">{country.continent}</p>
            </li>
            <li className="item py-2 px-5">
              <p className="population">Subregion: </p>
              <p className="population">{country.subregion}</p>
            </li>
            <li className="item py-2 px-5">
              <p className="population">Timezone: </p>
              <p className="population">{country.timezone}</p>
            </li>
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Detail;
