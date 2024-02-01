import React, {useEffect, useState} from 'react'
import { todosPersonajes } from '../funciones/funcion'
import "./casas.css"
import 'simplebar/dist/simplebar.min.css';
import SimpleBar from 'simplebar-react'




const Casas = () => {
  const [casas, setCasas] = useState([])
  const [search, setSearch] = useState("")
  
  //console.log(casas);

  const searcher = (e) => {
    setSearch(e.target.value)
    console.log(e.target.value);
  }

  let result = []
  if(!search){
    result = casas
  }else{
     result = casas.filter((dato) =>
    dato.name.toLowerCase().includes(search.toLowerCase())
    )
  }

useEffect(()=> {
    todosPersonajes(setCasas)
}, [])

  return (
    <>
    <input value={search} onChange={searcher} type='text' placeholder='search' className='buscador-casas'></input>

    <SimpleBar className='simple-bar' >
    <section>
    {result.map((casa, index) => (
  <div key={index} className='contenedor'>
    <a href={`/casas/${casa.id}`}>{casa.name}</a>
    <img src={casa.image} alt="imagen" className='escudos' />
  </div>
    ))}
    </section>
    </SimpleBar>


    </>
    
  )
}

export default Casas