import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import MyContext from '../context/context';
import '../Styles/card.css';

function Card({ country }) {
  const { darkMode } = useContext(MyContext);
  const { name, population, region, capital, flag } = country;
  return (
    <Link className={ `card-border link-css ${ darkMode && 'black-card' }` } to={ `/${ name }` }>
      <div>
        <img className='img-card' src={ flag } alt={ name } />
      </div>
      <div className='card-info'>
        <h3>{ name }</h3>
        <div>
          <p className='small'><strong>Population:</strong> <em>{ population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") }</em></p>
          <p className='small'><strong>Region:</strong> <em>{ region }</em></p>
          <p className='small'><strong>Capital:</strong> <em>{ capital }</em> </p>
        </div>
      </div>
    </Link>
  );
}

export default Card;
