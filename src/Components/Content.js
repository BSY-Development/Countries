import React, { useContext } from "react";
import MyContext from '../context/context';
import '../Styles/content.css';

function Content() {
  const { data } = useContext(MyContext);
  const isDarkMode = localStorage.getItem('darkMode') === 'true';
  console.log(1, data);
  return (
    <div className={`bg-content ${ isDarkMode && 'dark-mode-bg2' }`}>
      Teste
    </div>
  );
}

export default Content;
