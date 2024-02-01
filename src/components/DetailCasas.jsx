import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { unicaCasa } from "../funciones/funcion"
import "./DetailCharacters.css"
const DetailCasas = () => {
  const [house, setHouse] = useState([])

const params = useParams()

useEffect(()=>{
  unicaCasa(params.id, setHouse)
}, [])

  return (
    <div>
      <button><a href="/casas">salir</a></button>
      <img src={house.image} alt="imagen" />
      <p>{house.name}</p>

      <div className="contenedor-detalles">
       <p className="parrafo1">Region <br />{house.region}</p>
       <p>Settlement <br />{house.settlement}</p>
       <p>Alliances <br />{house.alliances}</p>
       <p>Religions <br />{house.religions}</p>
       <p>Foundation <br />{house.foundation}</p>
       
      </div>
       
    </div>
  )
}

export default DetailCasas
