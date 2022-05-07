import React from "react";
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';


function CardPoke(props) { 
  const poke = props.poke;

    return (
      <Card sx={{ maxWidth: 345 }}>
        <CardContent>
          <Typography>{
          (poke.name).charAt(0).toUpperCase()+(poke.name).slice(1)
          }</Typography>
          <img src={poke.sprites.front_default} alt="Default form" />
          <img src={poke.sprites.front_shiny} alt="Shiny form" />
          <Typography>Id:{poke.id}</Typography>
          <div> Types:  
            {
            poke.types.map(type=>{return <p>{type.type.name}</p>}) 
            }
          </div>
          <Typography>Weight: {poke.weight} kg</Typography>
          <Typography>Height: {(poke.height*30.48).toFixed(2)} cmts</Typography>
        </CardContent>
      </Card>
    )
}

export default CardPoke;
