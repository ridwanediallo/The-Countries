import React from 'react';
import { useSelector} from 'react-redux';
import { Modal} from 'react-bootstrap';
import './Detail.css'

const Detail = () => {
  const countries = useSelector((state) => state.allCountries);

  const filteredCountry = countries.filter(
    (country) => country.clicked === true
  );
  return (
    <div className="card mb-3">
      {filteredCountry.map((country) => {
        return (
          <div key={country.name}>
            <Modal.Dialog>
              <Modal.Header>
                <Modal.Title>{country.name}</Modal.Title>
              </Modal.Header>

              <Modal.Body>
                <img
                  src={country.flag}
                  className="card-img-top pb-4"
                  alt={`${country.region}'s flag`}
                />
                <h5 className="py-2">{`Population: ${country.population}`}</h5>
                <h5 className="py-2">{`Region: ${country.region}`}</h5>
                <h5 className="py-2">{`Continent: ${country.continent}`}</h5>
                <h5 className="py-2">{`Subregion: ${country.subregion}`}</h5>
              </Modal.Body>

              <Modal.Footer>
                <h5 className="py-2">{`Timezone: ${country.timezone}`}</h5>
              </Modal.Footer>
            </Modal.Dialog>
          </div>
        );
      })}
    </div>
  );
};

export default Detail;
