import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";



export const getCountriesData = createAsyncThunk('countries/getCountriesData', async () => {
    const res = await fetch('https://restcountries.com/v3.1/all');
    const data = await res.json();
    const countries = data.map((country) => ({
      id: country.name.common,
      name: country.name.common,
      population: country.population,
      flag: country.flags.png,
      capital: country.capital,
      region: country.region,
      continent: country.continents,
      map: country.maps.googleMaps,
      timezone: country.timezones,
      subregion: country.subregion,
      coatOfArms: country.coarseOfArms,
      clicked: false,
    }));

    // console.log(countries);


    return countries;
})


const countriesSlice = createSlice({
  name: 'countries',
  initialState: [],
  reducers: {
    countryDetails: (state, action) =>
      state.map((country) => {
        if (country.id === action.payload) {
          return { ...country, clicked: !country.clicked };
        }
        return country;
      }),
  },

  extraReducers: {
    [getCountriesData.pending]: (state, action) => {
      console.log('fetching');
    },
    [getCountriesData.fulfilled]: (state, action) => {
      console.log('success');
      return action.payload;
    },
  },
});

export const {countryDetails} = countriesSlice.actions;

export default countriesSlice.reducer;
