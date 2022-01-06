import React, { useContext } from 'react';
import MyContext from '../context/context';
import '../Styles/filters.css';

function Filters() {
  const { darkMode, filtered, setFiltered } = useContext(MyContext);

  const filterOnChange = ({ target: { value } }) => {
    setFiltered({ ...filtered, filterByName: value });
  }

  const regionFilter = ({ target: { value } }) => {
    setFiltered({ ...filtered, filterByRegion: value })
  }

  return (
    <div className='filter-div'>
      <input className={ `input-style ${ darkMode && 'dark-filter' }` } onChange={ filterOnChange } type="text" placeholder='Search for a country...' />
      <select className={ `option-style ${ darkMode && 'dark-filter' }` } onChange={ regionFilter } id="region">
        <option value="" disabled selected hidden>Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
}

export default Filters;
