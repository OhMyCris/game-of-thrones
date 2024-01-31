import React, {useEffect, useState} from 'react'
import { todosPersonajes } from '../funciones/funcion'
import "./casas.css"




const Casas = () => {
  const [casas, setCasas] = useState([])
  console.log(casas);

useEffect(()=> {
    todosPersonajes(setCasas)
}, [])

  return (
    <section>
    {casas.map((casa, index) => (
      <div key={index} className='contenedor'>
        <a href={`/casas/${casa.id}`}>{casa.name}</a>
        <img src={casa.image} alt="imagen" className='escudos' />
      </div>
    ))}
    </section>
  )
}

export default Casas