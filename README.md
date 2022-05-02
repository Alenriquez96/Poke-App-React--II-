#EJERCICIO: PokeApp con React Funcional (I)

pokeapi
En este ejercicio trabajaremos con React funcional y haremos uso de los Hooks useState() y useEffect()

En este ejercicio tendréis que jugar con la Pokeapi. Se dividirá en los siguientes pasos:

Crea un input de texto.
Crea un botón.
Crea un componente Card en el que dibujaremos los datos del personaje obtenido
Crea, con useState, dos estados: uno para input ('') y otro para un pokemon ({}).
Cada vez que escribamos en el input, su contenido se deberá guardar en el estado del input.
Cuando pulsemos el botón que hemos creado antes, se deberá hacer una petición a la PokeApi con el nombre o el número del pokemon correspondiente registrado en el estado del input.
Si va bien, la PokeApi devolverá un objeto con el pokemon elegido. El estado del pokemon que hemos creado antes debe actualizarse con el nuevo pokemon.
Se debe dibujar en Card los datos e imágen del Pokemon.
Al actualizarse la información del componente Card, la búsqueda del input de texto debe borrarse/resetear su valor a ('')

#EJERCICIO: PokeApp con React Funcional (II)


Vamos a cambiar el estado que habíamos creado antes para almacenar un solo pokemon. Vamos a poner en su lugar una lista ([]).

Ahora, cada vez que pulsemos el botón para buscar un pokemon, el pokemon encontrado deberá concatenarse a la lista que tenemos almacenada en el estado en lugar de almacenar uno solo.

Crea el Componente ListaPokemon, que deberá dibujar una lista con todas las Card de datos e imagen del Pokemon.

NOTA: El ejercicio se debe hacer con React funcional y como mínimo con los Hooks useState() y useEffect().
