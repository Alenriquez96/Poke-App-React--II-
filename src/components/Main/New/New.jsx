import React, { useContext,useState } from "react";
import {pokeContext} from "../../../context/pokeContext"
import "./New.css";
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

function New() {
  const {createNew} = useContext(pokeContext)
  const [notFull, setNotFull]= useState(false)

  const handleSubmit = (e) =>{
    e.preventDefault();
    const name = e.target.name.value;
    const sprite = e.target.sprite.value;
    const shinySprite = e.target.shinySprite.value;
    const sprites = {
      front_default: sprite,
      front_shiny:shinySprite
    }
    const t1 = e.target.t1.value;
    const t2 = e.target.t2.value;
    const types = [{type:{name:t1}},{type:{name:t2}}]
    const weight = e.target.weight.value;
    const height = e.target.height.value;

    const pokeObj = {name,sprites,types,weight,height};

    const objLength = Object.values(pokeObj)
    console.log(objLength);

    if (objLength.every(e=>e!=="")) {
      console.log("Entra en el if");
      createNew(pokeObj)
      setNotFull(false)
    } else{
      console.log("No entra en el if");
      setNotFull(true)
    }
  }

    return (
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="text" name="id" required minLenght="3"/>
        <label>Id</label>
        <input type="number" name="name" required/>
        <label>Sprites</label>
        <input type="text" name="sprite" required/>
        <label>Shiny Sprite</label>
        <input type="text" name="shinySprite"/>
        <label>Type one</label>
        <select name="t1" required>
          <option value="bug">Bug</option>
          <option value="dark">Dark</option>
          <option value="dragon">Dragon</option>
          <option value="electric">Electric</option>
          <option value="fairy">Fairy</option>
          <option value="fighting">Fighting</option>
          <option value="fire">Fire</option>
          <option value="flying">Flying</option>
          <option value="ghost">Ghost</option>
          <option value="grass">Grass</option>
          <option value="ground">Ground</option>
          <option value="ice">Ice</option>
          <option value="normal">Normal</option>
          <option value="poison">Poison</option>
          <option value="psychic">Psychic</option>
          <option value="rock">Rock</option>
          <option value="steel">Steel</option>
          <option value="water">Water</option>
        </select>
        <label>Type two</label>
        <select name="t2">
          <option value="bug">Bug</option>
          <option value="dark">Dark</option>
          <option value="dragon">Dragon</option>
          <option value="electric">Electric</option>
          <option value="fairy">Fairy</option>
          <option value="fighting">Fighting</option>
          <option value="fire">Fire</option>
          <option value="flying">Flying</option>
          <option value="ghost">Ghost</option>
          <option value="grass">Grass</option>
          <option value="ground">Ground</option>
          <option value="ice">Ice</option>
          <option value="normal">Normal</option>
          <option value="poison">Poison</option>
          <option value="psychic">Psychic</option>
          <option value="rock">Rock</option>
          <option value="steel">Steel</option>
          <option value="water">Water</option>
        </select>
        <label>Weight</label>
        <input type="number" name="weight"/>
        <label>Height</label>
        <input type="number" name="height"/>
        <button type="submit">Submit</button>
        {notFull?<Stack sx={{ width: '100%' }} spacing={2}><Alert severity="error">Sorry! You must complete all the fields!</Alert></Stack>:""}
      </form>
    )
}

export default New;
