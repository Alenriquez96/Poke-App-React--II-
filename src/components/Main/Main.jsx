import React,{useContext  } from "react";
import Form from "./Form";
import "./Main.css"
import { Route, Routes } from 'react-router-dom';
import NewPoke from "./New/New";
import { v4 as uuidv4 } from 'uuid';
import ListaPokemon from "./ListaPokemon";
import {pokeContext} from "../../context/pokeContext.js";
import { themeContext } from "../../context/themeContext";

  


function Main() {
  const {theme} = useContext(themeContext)
  const darkMode = "main"+theme
  const {pokes} = useContext(pokeContext);
    return (
      <main className={darkMode}>
          <Routes>
            <Route element={<Form/>} path="/"/>
            <Route element={<NewPoke/>} path="/new"/>
            <Route element={pokes.length !== 0?pokes.map((pokemon)=><ListaPokemon key={uuidv4()} poke={pokemon}/>): ""} path="/list"/>
          </Routes>
      </main>
    )
}

export default Main;
