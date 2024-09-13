import { createSlice } from '@reduxjs/toolkit';

const countriesSlice = createSlice({
  name: 'countries',
  initialState: {
    allCountries: [],
    selectedCountries: []
  },
  reducers: {
    setCountries: (state, action) => {
      state.allCountries = action.payload;
    },
    toggleSelectCountry: (state, action) => {
      const country = action.payload;
      const index = state.selectedCountries.findIndex(c => c.cca3 === country.cca3);
      if (index === -1) {
        state.selectedCountries.push(country);
      } else {
        state.selectedCountries.splice(index, 1);
      }
    }
  }
});

export const { setCountries, toggleSelectCountry } = countriesSlice.actions;
export default countriesSlice.reducer;
