import React,{useContext  } from "react";
import Form from "./Form";
import { Route, Routes } from 'react-router-dom';
import NewPoke from "./New/New";
import { v4 as uuidv4 } from 'uuid';
import ListaPokemon from "./Form/ListaPokemon";
import {pokeContext} from "../../context/pokeContext.js"

  


function Main() {
  const {pokes} = useContext(pokeContext);
    return (
      <main>
        <h1>Find your Pokemon!</h1>
          <Routes>
            <Route element={<Form/>} path="/"/>
            <Route element={<NewPoke/>} path="/new"/>
            <Route element={pokes.length !== 0?pokes.map((pokemon)=><ListaPokemon key={uuidv4()} poke={pokemon}/>): ""} path="/list"/>
          </Routes>
      </main>
    )
}

export default Main;
