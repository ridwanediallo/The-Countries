import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCountriesData } from '../redux/CountriesSlice';

const Home = () => {
    const dispatch = useDispatch();
    const countries = useSelector(state => state.allCountries)
    console.log(countries)

    useEffect(() => {
      dispatch(getCountriesData())
  },[dispatch])



  return (
    <div>Home</div>
  )
}

export default Home
