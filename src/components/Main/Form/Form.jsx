import React, { useEffect, useState,useContext } from 'react';
import "./Form.css"
import axios from "axios";
import CardPoke from "./Card";
import { v4 as uuidv4 } from 'uuid';
import TextField from '@mui/material/TextField';
import { useDebounce } from "use-debounce";
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import {pokeContext} from "../../../context/pokeContext.js";
import {Link} from "react-router-dom";



function Form() {

  const {set, pokes} = useContext(pokeContext);
  const [lastPokemon, setLastPoke] = useState([]);
  const [input, setInput] = useState("");
  const [debouncedInput] = useDebounce(input, 1500);
  const [notFound, setNotFound]=useState(false);
  const [isRepeated, setRepeated]=useState(false);



  useEffect(
    () => {
      const getPokemons = async () => {
        try {
          if (debouncedInput.length > 0 && pokes.every(poke=>poke.name !== debouncedInput.toLowerCase())) {
            const resp = await axios.get(`https://pokeapi.co/api/v2/pokemon/${debouncedInput.toLowerCase()}`);
            const data = await resp.data; 
            const type_1 = data.types[0].type.name || "";
            const type_2 = data.types[1] ? data.types[1].type.name : "";  
            const pokeParsed = {
              name: data.name,
              id: data.id,
              sprite: data.sprites.versions['generation-v']['black-white'].animated.front_default || data.sprites.front_default,
              shinySprite: data.sprites.versions['generation-v']['black-white'].animated.front_shiny || data.sprites.front_shiny,
              type_1: type_1,
              type_2: type_2,
              height: data.weight,
              weight: data.height
            }
            set([...pokes, pokeParsed]);  
            setLastPoke(pokeParsed);
            setNotFound(false)
            setRepeated(false)
          } 
          // else{
          //   setRepeated(true)
          // }
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
        {isRepeated===true?<Alert variant="outlined" severity="warning">
        You already searched this Pokemon, try a new one!
        </Alert>:""}
        {notFound?  <Stack sx={{ width: '100%' }} spacing={2}><Alert severity="error">Sorry! The Pokemon was not found!</Alert></Stack>:""}
        {lastPokemon.length !== 0?<h3>This is your current Pokemon</h3>:""}
        {lastPokemon.length !== 0?<Link to={`pokemon/${lastPokemon.id}`}><CardPoke key={uuidv4()} poke={lastPokemon}/></Link>:""} 
        {lastPokemon.length !== 0?<h3>It was added to the PokeDex list! Go to the list section to check it out!</h3>:""}
      </section>
    )
}

export default Form;
