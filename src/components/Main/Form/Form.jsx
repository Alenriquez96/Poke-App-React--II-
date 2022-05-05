import React, { useEffect, useState } from 'react';
import "./Form.css"
import axios from "axios";
import CardPoke from "./Card";
import { v4 as uuidv4 } from 'uuid';
import TextField from '@mui/material/TextField';
import ListaPokemon from "./ListaPokemon";
// import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import { useDebounce } from "use-debounce";



function Form() {

  const [pokemons, setPokemons] = useState([]); 
  const [onePokemon, setOnePoke] = useState([]);
  const [input, setInput] = useState("");
  const [debouncedInput] = useDebounce(input, 1500);



  useEffect(
    () => {
      const getPokemons = async () => {
        try {
          if (debouncedInput.length > 0) {
            const resp = await axios.get(`https://pokeapi.co/api/v2/pokemon/${debouncedInput.toLowerCase()}`);
            const data = await resp.data; 
            setPokemons([...pokemons,data]);
            setOnePoke(data);
            console.log(onePokemon);
          }
        } catch (error) {
          console.log(error);
          if(error.code==='ERR_BAD_REQUEST'){
            setTimeout(function()
            {
                alert('Pokemon not found!');
            }, 
            1000);
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

  function handleSubmit(event){
    event.preventDefault();
  }


    return (
      <section>
        <form className='formPoke' onSubmit={handleSubmit}>
          <TextField id="outlined-basic" label="Pokemon" variant="outlined" name="name" onChange={handleChange}/>
        </form>
        <Routes>
          <Route element={onePokemon.length !== 0?<CardPoke key={uuidv4()} poke={onePokemon}/>:""} path="/"/>
          <Route element={pokemons.length !== 0?pokemons.map((pokemon)=><ListaPokemon key={uuidv4()} poke={pokemon}/>): ""} path="/list"/>
        </Routes>
      </section>
    )
  
}

export default Form;
