import React, { useEffect, useState,useContext } from 'react';
import "./Form.css"
import axios from "axios";
import CardPoke from "./Card";
import { v4 as uuidv4 } from 'uuid';
import TextField from '@mui/material/TextField';
import { useDebounce } from "use-debounce";
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import {pokeContext} from "../../../context/pokeContext.js"



function Form() {

  const {set, pokes} = useContext(pokeContext);
  const [lastPokemon, setLastPoke] = useState([]);
  const [input, setInput] = useState("");
  const [debouncedInput] = useDebounce(input, 1500);
  const [notFound, setNotFound]=useState(false);



  useEffect(
    () => {
      const getPokemons = async () => {
        try {
          if (debouncedInput.length > 0 && pokes.every(poke=>poke.name !== debouncedInput)) {
            const resp = await axios.get(`https://pokeapi.co/api/v2/pokemon/${debouncedInput.toLowerCase()}`);
            const data = await resp.data; 
            set([...pokes, data]);  
            setLastPoke(data);
            setNotFound(false)
          }
        } catch (error) {
          console.log(error);
          if(error.code==='ERR_BAD_REQUEST'){
            setTimeout(function(){setNotFound(true)},500);
          }
        }
      };
      getPokemons();
    },
    // eslint-disable-next-line
    [debouncedInput] 
  );

  const handleChange = (e) => { 
    e.preventDefault();
    setInput(e.target.value);
    console.log(input);
  };


    return (
      <section className='card'>
        <h1>Find your Pokemon!</h1>
        <TextField id="outlined-basic" label="Pokemon" variant="outlined" name="name" onChange={handleChange} />
        {notFound?  <Stack sx={{ width: '100%' }} spacing={2}><Alert severity="error">Sorry! The Pokemon was not found!</Alert></Stack>:""}
        {lastPokemon.length !== 0?<h3>This is your current pokemon</h3>:""}
        {lastPokemon.length !== 0?<CardPoke key={uuidv4()} poke={lastPokemon}/>:""} 
      </section>
    )
}

export default Form;
