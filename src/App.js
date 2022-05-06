import './App.css';
import Main from "./components/Main";
import Header from "./components/Header"
import { BrowserRouter } from 'react-router-dom';
import { pokeContext } from './context/pokeContext';
import React, {useState} from "react";
  
function App() {
  const [pokes, setPokes] = useState([]);
  const [newPokemon, setNewPokemon] = useState([]);


  const createNew = (newPoke) =>{
    setNewPokemon([...newPokemon,newPoke]);
  }

  const set = (pokemon) =>{
    if (newPokemon.length ===0) { 
      setPokes(pokemon)
    }else{
      setPokes([...pokemon, ...newPokemon])  
    }
  }


  
  const pokeObj = {
    set,
    pokes,
    createNew,
    newPokemon
  }

  return (
    <BrowserRouter>
      <Header/>
      {/* Para pasar por props en el context se debe llamar value */}
        <pokeContext.Provider value={pokeObj}>
          <Main/>
        </pokeContext.Provider>
    </BrowserRouter>
  ) 
}

export default App;
