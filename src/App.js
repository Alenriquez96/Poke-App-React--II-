import './App.css';
import Main from "./components/Main";
import Header from "./components/Header";
import Footer from "./components/Footer"
import { BrowserRouter } from 'react-router-dom';
import { pokeContext } from './context/pokeContext';
import {themeContext} from './context/themeContext';
import React, {useState} from "react";
  
function App() {
  const [pokes, setPokes] = useState([]);
  const [theme, setTheme] = useState("");


  const createNew = (newPoke) =>{
    setPokes([...pokes,newPoke])
  }

  const set = (pokemon) =>{
      setPokes(pokemon)
  }


  const toggleTheme = () => theme===""?setTheme("-dark"):setTheme("");
  
  const pokeObj = {
    set,
    pokes,
    createNew,
  }

  const themeData = {
    theme,
    toggleTheme
  }

  return (
    <themeContext.Provider value={themeData}>
      <BrowserRouter>
        <Header />
        {/* Para pasar por props en el context se debe llamar value */}
        <pokeContext.Provider value={pokeObj}>
          <Main />
        </pokeContext.Provider>
        <Footer />
      </BrowserRouter>
    </themeContext.Provider>
  ) 
}

export default App;
