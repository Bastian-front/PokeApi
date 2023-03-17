import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const Detalle = () => {
  const [pokemon, setPokemon]= useState({});
  const { id } = useParams();
  const [cargando, setCargando] = useState(true);
 

async function obtenerPokemon(){
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
  const data = await res.json()
  console.log(data)
setPokemon(data)
setCargando(false)
}  

useEffect(()=>{
  obtenerPokemon();
});

  return (
    
    cargando ? <h1 style={{color: 'black'}}>Cargando datos...</h1> :
    <Container>
    <div className='card'>
        
        <img src={pokemon.sprites.other.dream_world.front_default} alt="img-pokemon" width={"40%"}></img>
        <div className='datos'>
        <h1 style={{color: 'black'}}>{pokemon.name}</h1>
        <ul>
          <li>ID:{pokemon.id}</li>
          <li>Peso: {pokemon.weight}kg</li>
          <li>Tipo: {pokemon.types[0].type.name}</li>
          <li>Poderes: {pokemon.abilities[0].ability.name}</li>
        </ul>
        
          </div>
    </div>
    </Container>
  )
}

export default Detalle