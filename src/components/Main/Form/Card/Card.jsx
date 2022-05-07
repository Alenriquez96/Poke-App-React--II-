import React from "react";
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';


function CardPoke(props) { 
  const poke = props.poke;

    return (
      <Card sx={{ maxWidth: 345 }}>
        <CardContent>
          <Typography variant="h5">{
          (poke.name).charAt(0).toUpperCase()+(poke.name).slice(1)
          }</Typography>
          <img src={poke.sprite} alt="Default form" />
          <img src={poke.shinySprite} alt="Shiny form" />
          <Typography>Id:{poke.id}</Typography>
          <Typography>Types:</Typography>
          <Typography>{poke.type_1}</Typography>
          {poke.type_2?<Typography>{poke.type_2}</Typography>:""}
          <Typography>Weight: {poke.weight} kg</Typography>
          <Typography>Height: {(poke.height*30.48).toFixed(2)} cmts</Typography>
        </CardContent>
      </Card>
    )
}

export default CardPoke;
