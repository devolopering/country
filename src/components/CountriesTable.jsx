import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCountries, toggleSelectCountry } from '../redux/countriesSlice';
import { Table } from 'flowbite-react';

const CountriesTable = () => {
  const dispatch = useDispatch();
  const allCountries = useSelector(state => state.countries.allCountries);
  const selectedCountries = useSelector(state => state.countries.selectedCountries); // Tanlangan davlatlar

  useEffect(() => {
    const fetchCountries = async () => {
      const response = await fetch('https://restcountries.com/v3.1/all');
      const data = await response.json();
      dispatch(setCountries(data));
    };
    fetchCountries();
  }, [dispatch]);

  const handleLikeClick = (country) => {
    dispatch(toggleSelectCountry(country));
  };

  const isSelected = (country) => {
    return selectedCountries.some(c => c.cca3 === country.cca3);
  };

  return (
    <Table>
      <Table.Head>
        <Table.HeadCell>Country</Table.HeadCell>
        <Table.HeadCell>Population</Table.HeadCell>
        <Table.HeadCell>Flag</Table.HeadCell>
        <Table.HeadCell>Actions</Table.HeadCell>
      </Table.Head>
      <Table.Body>
        {allCountries.map(country => (
          <Table.Row key={country.cca3}>
            <Table.Cell>{country.name.common}</Table.Cell>
            <Table.Cell>{country.population}</Table.Cell>
            <Table.Cell>
              <img src={country.flags.png} alt={country.name.common} width={50} />
            </Table.Cell>
            <Table.Cell>
              <button className='bg-transparent border-none text-blue-500' onClick={() => handleLikeClick(country)}>
                {isSelected(country) ? 'Unlike' : 'Like'}
              </button>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};

export default CountriesTable;
