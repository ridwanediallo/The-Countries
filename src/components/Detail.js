import React from 'react';
import { useSelector } from 'react-redux';
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
        <ul key={country.name} className="items">
          <li className="item p-2">
            <p className="population">Population: </p>
            <p className="population">{country.population}</p>
          </li>
          <li className="item p-2">
            <p className="population">continent: </p>
            <p className="population">{country.continent}</p>
          </li>
          <li className="item p-2">
            <p className="population">Subregion: </p>
            <p className="population">{country.subregion}</p>
          </li>
          <li className="item p-2">
            <p className="population">Timezone: </p>
            <p className="population">{country.timezone}</p>
          </li>
        </ul>
      ))}
    </section>
  );
};

export default Detail;
