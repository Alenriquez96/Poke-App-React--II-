import React, { useEffect, useState,useContext } from 'react';
import "./Form.css"
import axios from "axios";
import CardPoke from "./Card";
import { v4 as uuidv4 } from 'uuid';
import TextField from '@mui/material/TextField';
import ListaPokemon from "./ListaPokemon";

import { useDebounce } from "use-debounce";
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import {pokeContext} from "../../../context/pokeContext.js"



function Form() {

  const {set, pokes} = useContext(pokeContext);
  console.log(pokes);


  const [pokemons, setPokemons] = useState([]);
  const [lastPokemon, setOnePoke] = useState([]);
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
            setPokemons([...pokemons,data]);
            setOnePoke(data);
            setNotFound(false)
            set([...pokemons, data]);  
          }
        } catch (error) {
          console.log(error);
          if(error.code==='ERR_BAD_REQUEST'){
            setTimeout(function(){setNotFound(true)},1000);
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

  // function handleSubmit(event){
  //   event.preventDefault();
  // }


    return (
      <section>
        {/* <form className='formPoke' onSubmit={handleSubmit}> */}
          <TextField id="outlined-basic" label="Pokemon" variant="outlined" name="name" onChange={handleChange}/>
        {/* </form> */}
        {notFound?  <Stack sx={{ width: '100%' }} spacing={2}><Alert severity="error">Sorry! The Pokemon was not found!</Alert></Stack>:""}
        {lastPokemon.length !== 0?<CardPoke key={uuidv4()} poke={lastPokemon}/>:""} 
          {/* <Route element={pokes.length !== 0?pokes.map((pokemon)=><ListaPokemon key={uuidv4()} poke={pokemon}/>): ""} path="/list"/> */}
          {/* <Route element={<New/>} path="/new"/> */}
      </section>
    )
  
}

export default Form;
