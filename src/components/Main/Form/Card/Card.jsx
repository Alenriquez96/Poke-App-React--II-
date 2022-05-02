import React from "react";

function Card(props) { 
  const poke = props.poke
  console.log(poke);

  // const paintTypes = 
  //   poke.types.map(type=> {
  //     console.log(type.type.name);
  //       <p>{type.type.name}</p>
  //   })

    return (
      <div>
        <h3>{(poke.name).charAt(0).toUpperCase()+(poke.name).slice(1)}</h3>
        <img src={poke.sprites.front_default} alt="Default form" />
        <img src={poke.sprites.front_shiny} alt="Shiny form" />
        <div> Types:
          {
           poke.types.map(type=>{return <p>{type.type.name}</p>}) 
          }
        </div>
        <p>Weight: {poke.weight} kg</p>
        <p>Height: {(poke.height*30.48).toFixed(2)} cmts</p>
      </div>
    )
}

export default Card;
