import React from 'react';
import CountriesTable from './components/CountriesTable';
import SelectedCountries from './components/SelectedCountries';

function App() {
  return (
    <div>
      <h1>Countries Table</h1>
      <CountriesTable />
      <SelectedCountries />
    </div>
  );
}

export default App;
