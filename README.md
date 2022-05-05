Para esta fase, en lugar de pulsar un botón para hacer la búsqueda vamos a dejar que las búsquedas se hagan solas en función de lo que escriba el usuario.

Eliminamos el botón.

Cuando escribamos, la petición deberá realizarse según escribimos.

Una vez que consigamos que esas peticiones se hagan con cada pulsación. Cuando obtengamos el pokemon deseado, éste deberá concatenarse a la lista como en la fase anterior.

Como anteriormente, utiliza el componente ListaPokemon, que deberá dibujar una lista con todas las Card de datos e imagen del Pokemon.

Debounce:

Lógicamente una petición por pulsación es demasiado. Es probable que con ese nivel de peticiones alcancemos el máximo de peticiones permitidos por la Api en poco tiempo. Lo siguiente que haremos será evitar que con cada pulsación se haga una petición. La lógica para hacer esto será que si entre pulsaciones pasa más de un segundo y medio (o el tiempo que queráis) se haga la petición a la Api de lo que haya almacenado en el estado del input en ese momento.

Investiga qué es y cómo es la lógica de un Debounce para implementarla y conseguir el paso anterior. Esta función es la que nos permitirá conseguir que solo tras la última pulsación de más de un tiempo determinado se haga la petición.

OJO: Cuando consigas implementar la función debounce para no colapsar la api a peticiones implementa lo siguiente: si el input está vacío no se hará ninguna petición.

Cuando escribamos un pokemon en el input que ya exista en nuestra lista de pokemons tampoco tenemos que hacer esa petición.

NOTA: El ejercicio se debe hacer con React funcional y como mínimo con los Hooks useState() y useEffect()

Para practicar, puedes investigar y hacer uso de cualquier otro Hook (tanto propio como de terceros) que tenga sentido para este ejercicio

EJERCICIO: PokeApp. Reforzar enrutado, Context y formularios con React
En esta etapa del ejercicio añadiremos un navbar que permita movernos entre rutas usando <Link />.

Routing:
/. La página principal, donde veamos el listado de pokemons.

/new La página de creación de nuevo pokemon con un formulario para ingresar sus datos.

/pokemon/:id La página de visualización de un perfil de pokemon (información extendida). Necesitarás el componente Details.

/search Página de búsqueda de un pokemon en la PokeApp. (Ya la tenemos hecha de ejercicios anteriores).

Formulario:
Dentro de lo que ya tenemos hecho, vamos a añadir un formulario para crear nuevos pokemons que nos inventemos.

Estos deben introducirse al array de pokemon donde estamos guardando el listado. El formato que debe cumplir será:

{
  id: '',
  name: '',
  image: '',
  typeOne: '',
  typeTwo: ''
}
Para crear y trabajar con el formulario usaremos el paquete npm react-hook-form

Los inputs deberán ser del siguiente tipo:

id => number

name => text

image => text

typeOne => select

typeTwo => select

Las condiciones de error y validación serán las siguientes:

id => required
name => required minlenght = 3
image => required
typeOne => select required
typeTwo => select
Comunicación:
El estado con el listado de Pokemon debe vivir en App y pasarse a cada sección que lo necesite consumiendolo a través de Context

El componente ListaPokemon, recibirá de Context la lista de Pokemons y mapeará dicha lista cargando los componentes Card correspondientes y pasándole a través de props la información de cada registro.

Los nombres mostrados por los componentes Card de cada Pokemon serán Links clickables que llevarán a la ruta /pokemon/:id, que mostrará la vista detallada de ese Pokemon. En dicho Link se pasará en la query String los datos del Pokemon para poder ser leídos en la pantalla de vista detalle(puedes usar un hook para ello si quieres).

Ejemplo ruta:

/pokemon/22?name=bulbasur&image=url_imagen&typeOne=plant

HINT: query-parameters

EXTRA

Como los pokemon no pueden tener el mismo tipo repetido DOS veces, en la función de submit validaremos que no se han repetido y mostraremos un mensaje de error al usuario en caso de que sea necesario.

💗 Dadle amor a la maqueta 💗

ÁNIMO! 🚀 🌠
