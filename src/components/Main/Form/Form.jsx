import React, { useEffect, useState } from 'react';
import axios from "axios";
import Card from "./Card";
import { v4 as uuidv4 } from 'uuid';

function Form() {

  const [pokemons, setPokemons] = useState([]); 
  const [input, setInput] = useState("")

  useEffect(
    () => {
      const getPokemons = async () => {
        try {
          if (input !== '') {
            const resp = await axios.get(`https://pokeapi.co/api/v2/pokemon/${input}`);
            const data = await resp.data;
            setPokemons([data]);
          }
        } catch (error) {
          console.log(error);
          if(error.code==='ERR_BAD_REQUEST'){
            alert("Not found")
          }
        }
      };
      getPokemons();
    },
    [input] 
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    setInput(e.target.name.value.toLowerCase());
  };
    return (
      <section>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Pokemon</label>
          <input type="text" name="name"/>
          <button type="submit">Search</button>
          {pokemons.length !== 0?
              pokemons.map(pokemon=>{
                return <Card key={pokemon.name} poke={pokemon}/>
              }): ""}
        </form>
      </section>
    )
  
}

export default Form;
