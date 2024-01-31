import React, {useEffect, useState} from 'react'
import { todosPersonajes } from '../funciones/funcion'




const Casas = () => {
  const [casas, setCasas] = useState([])
  console.log(casas);

useEffect(()=> {
    todosPersonajes(setCasas)
}, [])

  return (
    <>
    {casas.map((casa, index) => (
      <div key={index}>
        <a href={`/casas/${casa.id}`}>{casa.name}</a>
        <img src={casa.image} alt="imagen" />
      </div>
    ))}
    </>
  )
}

export default Casas