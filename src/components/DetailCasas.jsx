
import { useParams } from "react-router-dom"
import { unicaCasa } from "../funciones/funcion"
import "./DetailsCasas.css"
import { useEffect, useState } from "react"
const DetailCasas = () => {
  const [house, setHouse] = useState([])

const params = useParams()

useEffect(()=>{
  unicaCasa(params.id, setHouse)
}, [])

  return (
    <section>
      

        <div className="container-imagen">
      <img src={house.image} alt="imagen" className="imagenDetalle"/>
      <p>{house.name}</p>
      </div>
      <div className="contenedor-detalles">
       <p className="parrafo1">Region <br /> <br />{house.region}</p>
       <p>SEDE <br /> <br />{house.settlement}</p>
       <p>ALLIANCES <br /> <br />{house.alliances}</p>
       <p>RELIGIONS <br /> <br />{house.religions}</p>
       <p>FOUNDATION <br /> <br />{house.foundation}</p>
       
      </div>
    </section>
    
       
    
  )
}

export default DetailCasas
