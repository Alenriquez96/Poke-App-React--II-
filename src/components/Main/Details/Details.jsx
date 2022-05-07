import React, { useState, useEffect } from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import "./Details.css";
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';


const Details = () => {
  const [pokeDetailed, setFetch] = useState({});
  const { id } = useParams();

  useEffect(() => {
    async function pokeDetails() {
      const resp = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const data = await resp.data;
      const type_1 = data.types[0].type.name || "";
      const type_2 = data.types[1] ? data.types[1].type.name : "";  
      const pokeParsed = {
        name: data.name,
        id: data.id,
        mainImg: data.sprites.other["official-artwork"].front_default,
        sprite: data.sprites.versions['generation-v']['black-white'].animated.front_default || data.sprites.front_default,
        shinySprite: data.sprites.versions['generation-v']['black-white'].animated.front_shiny || data.sprites.front_shiny,
        type_1: type_1,
        type_2: type_2,
        height: data.weight,
        weight: data.height,
        // statsBase:{one:data.stats[0].base_stat,two:data.stats[1].base_stat,three:data.stats[2].base_stat,four:data.stats[3].base_stat,five:data.stats[4].base_stat,six:data.stats[5].base_stat}
      } 
      setFetch(()=>pokeParsed);
      console.log(pokeDetailed);
    }
    pokeDetails()
  }
  // eslint-disable-next-line
    , [id]
  )

  // function createData(name, Hp, Attack, Defense, Special_attack,Special_defense,Speed){
  //   return { name, Hp, Attack, Defense, Special_attack,Special_defense,Speed };
  // }

  // const rows = [
  //   createData('Base stats', pokeDetailed.statsBase.one, pokeDetailed.statsBase.two, pokeDetailed.statsBase.three, pokeDetailed.statsBase.four,pokeDetailed.statsBase.five,pokeDetailed.statsBase.six)
  // ];

  return (
    <Card sx={{ maxWidth: 345 }}>
    <CardContent>
      <Typography variant="h3">{
      (pokeDetailed.name)
      }</Typography>
      <img id="mainImg" src={pokeDetailed.mainImg} alt="Main img" />
      <Typography>Videogame sprites:</Typography>
      <div className="gameSprites">
        <img src={pokeDetailed.sprite} alt="Default form" />
        <img src={pokeDetailed.shinySprite} alt="Shiny form" />
      </div>
      <Typography>Id:#{pokeDetailed.id}</Typography>
      <Typography>Types:</Typography>
      <Typography>{pokeDetailed.type_1}</Typography>
      {pokeDetailed.type_2?<Typography>{pokeDetailed.type_2}</Typography>:""}
      <Typography>Weight: {pokeDetailed.weight} kg</Typography>
      <Typography>Height: {(pokeDetailed.height*30.48).toFixed(2)} cmts</Typography>
      <Typography variant="h5">Pokemon Stats:</Typography>
      {/* <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
          <TableCell>Stat type</TableCell>
            <TableCell align="right">Hp</TableCell>
            <TableCell align="right">Attack</TableCell>
            <TableCell align="right">Defense</TableCell>
            <TableCell align="right">Special attack</TableCell>
            <TableCell align="right">Special defense</TableCell>
            <TableCell align="right">Speed</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.Hp}</TableCell>
              <TableCell align="right">{row.Attack}</TableCell>
              <TableCell align="right">{row.Defense}</TableCell>
              <TableCell align="right">{row.Special_attack}</TableCell>
              <TableCell align="right">{row.Special_defense}</TableCell>
              <TableCell align="right">{row.Speed}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer> */}

    </CardContent>
  </Card>
    )
}

export default Details;
