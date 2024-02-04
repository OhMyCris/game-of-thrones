import "./casas.css"
import 'simplebar/dist/simplebar.min.css';
import SimpleBar from 'simplebar-react'
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";


const Casas = ({casas}) => {


  const simpleBarRef = useRef(null);
  useEffect(() => {
    if (simpleBarRef.current) {
      simpleBarRef.current.recalculate();
    }
  });

  return (
    

    <SimpleBar className='simple-bar' >
    <div className="allHouses">
    <div className="escudosposition">
    {casas.map((casa, index) => (
  <div key={index} className='contenedor'>
    <Link to={`/casas/${casa.id}`} >
    <p>{casa.name}</p>
    <img src={casa.image} alt="imagen" className='escudos' />
    </Link>
  </div>
    ))}
    </div>
    </div>
    </SimpleBar>


    
    
  )
}

export default Casas