import React,{useContext  } from "react";
import Form from "./Form";
import Details from "./Details"
import "./Main.css"
import { Route, Routes, Link } from 'react-router-dom';
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
            <Route element={pokes.length !== 0?pokes.map((pokemon)=><Link to={`pokemon/${pokemon.id}`}><ListaPokemon key={uuidv4()} poke={pokemon}/></Link>): ""} path="/list"/>
            <Route path="/list/pokemon/:id" element={<Details />}/>
            <Route path="/pokemon/:id" element={<Details />}/>
          </Routes>
      </main>
    )
}

export default Main;
