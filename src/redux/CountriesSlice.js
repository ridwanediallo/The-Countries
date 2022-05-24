import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";



export const getCountriesData = createAsyncThunk('countries/getCountriesData', async () => {
    const res = await fetch('https://restcountries.com/v3.1/all');
    const countries = await res.json();
    console.log(countries)
    return countries;
})



const countriesSlice = createSlice({
  name: 'countries',
  initialState: [],
  reducers: {},

  extraReducers: {
    [getCountriesData.pending]: (state, action) => {
      console.log('fetching');
    },
    [getCountriesData.fulfilled]: (state, action) => action.payload,
  },
});

export default countriesSlice.reducer;
