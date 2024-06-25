import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import './styles/pokeInfo.css'

const PokeInfo = () => {

  const [pokemon, getpokemon] = useFetch();

  const params = useParams();

  useEffect(() => {
    const url = `https://pokeapi.co/api/v2/pokemon/${params.id}`;
    getpokemon(url);
  }, [])
  
  console.log(pokemon);

  return (
    <section className='pokeinfo'>
       <figure className='pokeinfo__img'>
        <img src={pokemon?.sprites.other['official-artwork'].front_default} alt='pokemon image'/>
      </figure>
      <fieldset>
        <legend >Habilidades</legend>
        <ul className='pokeinfo__stats'>
          {
            pokemon?.stats.map(stat => (
              <li className='pokeinfo__stats-item' ke={stat.stat.url}>
                <span>{stat.stat.name}</span><span>{stat.base_stat}/250</span>
                <div  className='outbar'>
                  <div className='inbar' style={{width: `${stat.base_stat/2.5}%`}}></div>
                </div>
              </li>
            ))
          }
        </ul>
      </fieldset>
    </section>
  )
}

export default PokeInfo
