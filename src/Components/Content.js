import React, { useContext } from "react";
import MyContext from '../context/context';
import '../Styles/content.css';
import Card from "./Card";
import Filters from "./Filters";

const nextFilter = (data, filterName) => {
  if (filterName) {
    return data.filter((item) => item.name.includes(filterName));
  }
  return data;
}

const filterByRegion = (data, filters) => {
  const { filterByRegion, filterByName } = filters;
  if (filterByRegion) {
    const contentFiltered = data.filter((item) => item.region === filterByRegion);
    return nextFilter(contentFiltered, filterByName);
  } else {
    return nextFilter(data, filterByName);
  }

}

function Content() {
  const { data, filtered } = useContext(MyContext);
  const isDarkMode = localStorage.getItem('darkMode') === 'true';
  return (
    <div className={`bg-content ${ isDarkMode && 'dark-mode-bg2' }`}>
      <Filters />
      <div className="container-cards">
        { filterByRegion(data, filtered).map((item, i) => <Card country={ item } key={ i } />) }
      </div>
    </div>
  );
}

export default Content;
