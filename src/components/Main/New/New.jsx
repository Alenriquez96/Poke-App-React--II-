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
import { useForm } from "react-hook-form";


function New() {
  const {createNew} = useContext(pokeContext);
  const [notFull, setNotFull]= useState(undefined);
  const [allFilled, setAllFilled]=useState(false);
  const [redirect, setRedirect]=useState(false);
  const { register, handleSubmit } = useForm();

  const onSubmit = (pokeObject) =>{
    console.log(pokeObject);

    const objLength = Object.keys(pokeObject);
    console.log(objLength);
    if (objLength.every(e=>e!=="")) { 
      createNew(pokeObject);
      setNotFull(false);
      setAllFilled(true);
      setRedirect(true);
    } else{
      setNotFull(true)
    }
  }

  if (redirect) {
    setTimeout(function(){
      return <Navigate to="/list"/>;
    },2000);
  }

    return (
      <Box id="box" sx={{ display: 'flex', flexWrap: 'wrap' }} >
        <form className="formNew" onSubmit={handleSubmit(onSubmit)}>
          <TextField {...register("name")} type="text" label="Name" name="name" required minLenght="3"/>
          <TextField {...register("id")} label="Id" type="number" name="id" required/>
          <TextField {...register("sprite")} label="Sprite" type="text" name="sprite" required/>
          <TextField {...register("shinySprite")} label="Shiny Sprite" type="text" name="shinySprite"/>
          <label>Types:</label>
          <Select {...register("type_1")} label="First type" name="t1" required>
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
          <Select {...register("type_2")} label="Second type" name="t2">
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
          <TextField {...register("weight")} label="Weight" type="number" name="weight"/>
          <TextField {...register("height")} label="Height" type="number" name="height"/>
          <Button type="submit" variant="outlined">Submit</Button>
          {notFull?<Stack sx={{ width: '100%' }} spacing={2}><Alert severity="error">Sorry! You must complete all the fields!</Alert></Stack>:""}
          {allFilled===true?<Stack sx={{ width: '100%' }} spacing={2}>
          <Alert onClose={() => {}}>Pokemon created! Go to the list to check it out...</Alert></Stack>:""}
        </form>
      </Box>
    )
}

export default New;
