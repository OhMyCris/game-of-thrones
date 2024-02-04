import "./casas.css"
import 'simplebar/dist/simplebar.min.css';
import SimpleBar from 'simplebar-react'


const Casas = ({casas}) => {

  return (
    <>

    <SimpleBar className='simple-bar' >
    <section>
    {casas.map((casa, index) => (
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