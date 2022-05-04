import React, { useEffect, useState } from 'react';
import "./Form.css"
import axios from "axios";
import CardPoke from "./Card";
import { v4 as uuidv4 } from 'uuid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

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
    e.target.name.value=""
    
  };
    return (
      <section>
        <form className='formPoke' onSubmit={handleSubmit}>
          <TextField id="outlined-basic" label="Pokemon" variant="outlined" name="name"/>
          <Button type="submit" variant="contained">Search</Button>
          {pokemons.length !== 0?
              pokemons.map((pokemon,i)=><CardPoke  poke={pokemon}/>): ""}
        </form>
      </section>
    )
  
}

export default Form;
