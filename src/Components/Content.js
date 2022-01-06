import React from "react";
import '../Styles/content.css';

function Content() {
  const isDarkMode = localStorage.getItem('darkMode') === 'true';
  
  return (
    <div className={`bg-content ${ isDarkMode && 'dark-mode-bg2' }`}>
      Teste
    </div>
  );
}

export default Content;
