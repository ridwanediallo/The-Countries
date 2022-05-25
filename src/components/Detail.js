import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Detail = () => {
  const countries = useSelector((state) => state.allCountries);

  const filteredCountry = countries.filter(
    (country) => country.clicked === true
  );
   console.log(filteredCountry)
  return (
    <div className="card mb-3">
      {filteredCountry.map((country) => {
        return (
          <div key={country.name}>
            <img src={country.flag} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{country.name}</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Detail;
