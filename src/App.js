import Card from "./components/Card";
import "./App.css"

const { useState, useEffect } = require("react");


//USE EFFECT, EFECTOS EN REACT - se usan juntos efectos y llamados a la API

// nos permite determinar que un codigo se va a ejecutar SOLO en algunas ocasiones
// useEffect tiene 2 parametros, 
// 1er parametro- FUNCION (cod que se ejecute 1,2 o 3 veces pero no todo el tiempo
// 2do parametro- ARRAY de dependencia, si el array es vacio se ejecuta 1 vez
// el array de dependencia sirve para saber cuantas veces quiero que se ejecute la funcion


const App = ()=>{

  const [personajes, setPersonajes] = useState ([]);
  const [valorDelInput, setValorDelInput] =useState("");
  const [busqueda, setBusqueda] = useState("");
  const [loading, setLoading] = useState(false);
  
  useEffect( ()=>{
    setLoading(true)
    fetch(`https://rickandmortyapi.com/api/character/?name=${busqueda}`)
    .then((res)=>res.json())
    .then((data)=>{
      setPersonajes(data.results)});
      setLoading(false)


  }, [busqueda]);
  
  const handleChange = (e)=>{
    setValorDelInput(e.target.value);
  }

  const handleClick = ()=>{
    setBusqueda(valorDelInput)
  }



  return (
    <div className="App">
      {loading && <h1>CARGANDO</h1>}

      <div>
        <h2> Personaje buscado: {valorDelInput}</h2>
        <input type="text" onChange={handleChange}></input>
        <button onClick={handleClick}>Buscar</button>
      </div>

      <div>
        {personajes.map((personaje)=>(
          <Card
          name= {personaje.name}
          img= {personaje.image}
          status={personaje.status}
          species={personaje.species}
          gender={personaje.gender}


          />
        ))}
      </div>
      

    </div>
  )
}

export default App;