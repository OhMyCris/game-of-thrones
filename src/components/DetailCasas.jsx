import axios from "axios"
import { useParams } from "react-router-dom"
import "./DetailsCasas.css"
import { useEffect, useState } from "react"
const DetailCasas = () => {
  // const [house, setHouse] = useState({
  //   alliances: [],
  //   religions: []
  // })

  const [house, setHouse] = useState({
    alliances: [],
    religions: []
  })
const {id} = useParams()

useEffect(()=>{
  const getDetalleHouse = async () => {
    const detalleHouseApi = await axios.get(
      `https://game-of-thrones-json-server.vercel.app/houses/${id}`
    );
    setHouse(detalleHouseApi.data);
  };
  getDetalleHouse();
}, [])

  return (

    
    <section>

      <div>
      <img src={house.image} alt="imagen" className="imagen-dettale-casa"/>
        <h4>{house.name}</h4>
      </div>
      
      <div className="detalles-casas">

<div>
  <h2>SEDE</h2>
  <h4>{house.settlement}</h4>
</div>

<div>
  <h2>REGION</h2>
  <h4>{house.region}</h4>
</div>

<div>
  <h2>ALIANZAS</h2>
  {house.alliances.map((item, index) =>(
    <div key={index}>
      <h4>{item}</h4>
    </div>
  ))}
</div>

<div>
  <h2>RELIGIONES</h2>
  {house.religions.map((religion, index)=>(
    <div key={index}>
      <h4>{religion}</h4>
    </div>
  ))}
</div>

<div>
  <h2>FUNDACION</h2>
  <h4>{house.foundation}</h4>
</div>

      </div>
    </section>
    
       
    
  )
}

export default DetailCasas
