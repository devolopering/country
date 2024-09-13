import React from 'react';
import { useSelector } from 'react-redux';

const SelectedCountries = () => {
  const selectedCountries = useSelector(state => state.countries.selectedCountries);

  return (
    <div>
      <h2>Selected Countries</h2>
      <ul>
        {selectedCountries.map(country => (
          <li key={country.cca3}>
            {country.name.common} - {country.population}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SelectedCountries;
