import React, { useContext,useState } from "react";
import {pokeContext} from "../../../context/pokeContext"
import "./New.css";
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Navigate  } from 'react-router-dom';


function New() {
  const {createNew} = useContext(pokeContext);
  const [notFull, setNotFull]= useState(undefined);
  const [allFilled, setAllFilled]=useState(false);
  const [redirect, setRedirect]=useState(false);

  const handleSubmit = (e) =>{
    e.preventDefault();
    const name = e.target.name.value;
    const sprite = e.target.sprite.value;
    const id = e.target.id.value;
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

    const pokeObj = {name,id,sprites,types,weight,height};

    const objLength = Object.values(pokeObj)
    console.log(objLength);

    if (objLength.every(e=>e!=="")) {
      createNew(pokeObj);
      setNotFull(false);
      setAllFilled(true);
      setRedirect(true);
    } else{
      setNotFull(true)
    }
  }

  if (redirect) {
    setTimeout(function(){
      console.log("Entra en el redirect y el setTimeOut");
      return <Navigate to="/list"/>;
    },2000);
  }

    return (
      <Box id="box" sx={{ display: 'flex', flexWrap: 'wrap' }} >
        <form className="formNew" onSubmit={handleSubmit}>
          <TextField type="text" label="Name" name="name" required minLenght="3"/>
          <TextField label="Id" type="number" name="id" required/>
          <TextField label="Sprite" type="text" name="sprite" required/>
          <TextField label="Shiny Sprite" type="text" name="shinySprite"/>
          <label>Types:</label>
          <Select label="First type" name="t1" required>
            <MenuItem value="bug">Bug</MenuItem>
            <MenuItem value="dark">Dark</MenuItem>
            <MenuItem value="dragon">Dragon</MenuItem>
            <MenuItem value="electric">Electric</MenuItem>
            <MenuItem value="fairy">Fairy</MenuItem>
            <MenuItem value="fighting">Fighting</MenuItem>
            <MenuItem value="fire">Fire</MenuItem>
            <MenuItem value="flying">Flying</MenuItem>
            <MenuItem value="ghost">Ghost</MenuItem>
            <MenuItem value="grass">Grass</MenuItem>
            <MenuItem value="ground">Ground</MenuItem>
            <MenuItem value="ice">Ice</MenuItem>
            <MenuItem value="normal">Normal</MenuItem>
            <MenuItem value="poison">Poison</MenuItem>
            <MenuItem value="psychic">Psychic</MenuItem>
            <MenuItem value="rock">Rock</MenuItem>
            <MenuItem value="steel">Steel</MenuItem>
            <MenuItem value="water">Water</MenuItem>
          </Select>
          <Select label="Second type" name="t2">
            <MenuItem value="bug">Bug</MenuItem>
            <MenuItem value="dark">Dark</MenuItem>
            <MenuItem value="dragon">Dragon</MenuItem>
            <MenuItem value="electric">Electric</MenuItem>
            <MenuItem value="fairy">Fairy</MenuItem>
            <MenuItem value="fighting">Fighting</MenuItem>
            <MenuItem value="fire">Fire</MenuItem>
            <MenuItem value="flying">Flying</MenuItem>
            <MenuItem value="ghost">Ghost</MenuItem>
            <MenuItem value="grass">Grass</MenuItem>
            <MenuItem value="ground">Ground</MenuItem>
            <MenuItem value="ice">Ice</MenuItem>
            <MenuItem value="normal">Normal</MenuItem>
            <MenuItem value="poison">Poison</MenuItem>
            <MenuItem value="psychic">Psychic</MenuItem>
            <MenuItem value="rock">Rock</MenuItem>
            <MenuItem value="steel">Steel</MenuItem>
            <MenuItem value="water">Water</MenuItem>
          </Select>
          <TextField label="Weight" type="number" name="weight"/>
          <TextField label="Height" type="number" name="height"/>
          <Button type="submit" variant="outlined">Submit</Button>
          {notFull?<Stack sx={{ width: '100%' }} spacing={2}><Alert severity="error">Sorry! You must complete all the fields!</Alert></Stack>:""}
          {allFilled===true?<Stack sx={{ width: '100%' }} spacing={2}>
          <Alert onClose={() => {}}>Pokemon created! Redirecting to the list...</Alert></Stack>:""}
        </form>
      </Box>
    )
}

export default New;
