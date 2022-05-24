import { configureStore } from '@reduxjs/toolkit';
import CountriesSlice from './CountriesSlice';

export default configureStore({
  reducer: {
      allCountries: CountriesSlice
  },
});
