import axios from "axios"
import { useParams } from "react-router-dom"
import "./DetailsCasas.css"
import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"


const DetailCasas = () => {


  const [house, setHouse] = useState({
    alliances: [],
    religions: []
  });

  const {t} = useTranslation();

const {id} = useParams();

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
        <h4 className="houseName">{house.name}</h4>
      </div>
      
      <div className="detalles-casas">

<div>
  <h2 className="houseDetailsName">{t('settlement')}</h2>
  <h4 className="elementName">{house.settlement}</h4>
</div>

<div>
  <h2 className="houseDetailsName">{t('region')}</h2>
  <h4 className="elementName">{house.region}</h4>
</div>

<div>
  <h2 className="houseDetailsName">{t('alliances')}</h2>
  {house.alliances.map((item, index) =>(
    <div key={index}>
      <h4 className="elementName">{item}</h4>
    </div>
  ))}
</div>

<div>
  <h2 className="houseDetailsName">{t('religions')}</h2>
  {house.religions.map((religion, index)=>(
    <div key={index}>
      <h4 className="elementName">{religion}</h4>
    </div>
  ))}
</div>

<div>
  <h2 className="houseDetailsName">{t('foundations')}</h2>
  <h4 className="elementName">{house.foundation}</h4>
</div>

      </div>
    </section>
    
       
    
  )
}

export default DetailCasas
