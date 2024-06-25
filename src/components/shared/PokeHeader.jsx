import React from 'react';
import './styles/pokeHeader.css';

const PokeHeader = () => {
  return (
    <div className='pokeheader'>
      <div className='pokeheader__red'></div>
        <figure className='pokeheader__img'>
          <img src="../../../assets/pokedex.png" alt='pokedex image' />
        </figure>
      <div className='pokeheader__black'>
         <div className='pokeheader__outcircle'>
            <div className='pokeheader__incricle'></div>
         </div>
      </div>
    </div>
  )
}

export default PokeHeader;
