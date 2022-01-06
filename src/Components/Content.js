import React, { useContext } from "react";
import MyContext from '../context/context';
import '../Styles/content.css';
import Card from "./Card";
import Filters from "./Filters";

function Content() {
  const { data } = useContext(MyContext);
  const isDarkMode = localStorage.getItem('darkMode') === 'true';
  return (
    <div className={`bg-content ${ isDarkMode && 'dark-mode-bg2' }`}>
      <Filters />
      <div className="container-cards">
        { data.map((item) => <Card country={ item } />) }
      </div>
    </div>
  );
}

export default Content;
