import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {Button, Container} from 'react-bootstrap'

const Personajes = () => {  
  const [id, setId] = useState("");
  const [pokemon, setPokemon]= useState([]);
  const navigate = useNavigate();

  async function obtenerPokemon(){
    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0');
    const data = await res.json();
    console.log(data)
  setPokemon(data.results)
  }  
  
  useEffect(()=>{
    obtenerPokemon();
  },[]);

  

const irAPersonajes = () => {
navigate(`/pokemons/${id}`);
};


  return (
    <div className="pokemon mt-5 " >
     <Container>
<h1 style={{color: 'black'}}>Busca tu Personaje Favorito</h1>
<select
className="me-2" name="id" id="id" onChange={(e) => setId(e.target.value)}>
<option value="">Pokemón</option>
  {
    pokemon.map((p)=><option key={p.id} value={p.id}>{p.name}</option>)
  }
</select>
<Button onClick={()=> irAPersonajes() }>Detalle</Button>
</Container>
</div>
  )
}

export default Personajes