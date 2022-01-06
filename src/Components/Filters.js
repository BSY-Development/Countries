import React, { useContext } from 'react';
import MyContext from '../context/context';
import '../Styles/filters.css';

function Filters() {
  const { darkMode } = useContext(MyContext);
  return (
    <div className='filter-div'>
      <input className={ `input-style ${ darkMode && 'dark-filter' }` } type="text" placeholder='Search for a country...' />
      <select className={ `option-style ${ darkMode && 'dark-filter' }` } id="region">
        <option value="" disabled selected hidden>Filter by Region</option>
        <option value="africa">Africa</option>
        <option value="america">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
}

export default Filters;
