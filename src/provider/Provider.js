import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import MyContext from '../context/context';

function Provider({ children }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const response = async () => {
      // https://restcountries.com/v2/name/{name}
      const api = 'https://restcountries.com/v2/all';
      const { results } = await fetch(api).then((result) => result.json());
      setData(results);
    };
    response();
  }, []);

  const contextValue = { data };
  return (
    <MyContext.Provider value={ contextValue }>
      { children }
    </MyContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
