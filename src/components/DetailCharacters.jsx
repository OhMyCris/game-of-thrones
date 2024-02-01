import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import "simplebar/dist/simplebar.min.css";
import SimpleBar from "simplebar-react";
import "./DetailsCharcters.css";
import { useTranslation } from "react-i18next";


const DetailCharacters = () => {
  const [detalleCharacters, setDetalleCharacters] = useState({
    alliances: [],
    episodes: [],
    parents: [],
    siblings: [],
    titles: [],
  });

  const {t} = useTranslation();


const [detailsHouses, setDetailsHouses] = useState([]);

  

  const { id } = useParams();

  useEffect(() => {
    const getDetalleCharacters = async () => {
      const detalleCharacterApi = await axios.get(
        `https://game-of-thrones-json-server.vercel.app/characters/${id}`
      );
      setDetalleCharacters(detalleCharacterApi.data);
    };
    getDetalleCharacters();
  }, []);

  
  useEffect(() => {
    const getDetallehouses = async () => {
      const detalleHousesApi = await axios.get(`https://game-of-thrones-json-server.vercel.app/houses`);
      setDetailsHouses(detalleHousesApi.data);
    };
    getDetallehouses();
  }, []);

  console.log(detalleCharacters);
  console.log(detailsHouses);
  const simpleBarRef = useRef(null);
  useEffect(() => {
    if (simpleBarRef.current) {
      simpleBarRef.current.recalculate();
    }
  });

  return (
    <div>
      <Link to={`/characters`}>
        <img
          className="fotosperson"
          src={detalleCharacters.image}
          alt={detalleCharacters.name}
        />
      </Link>

      <h4 className="nombre">{detalleCharacters.name}</h4>

      <div className="detalles">
      <div className="datos">
        <h4 className="titulos">{t('house')}</h4>
        <div className="datosvarios">
          {detailsHouses.map((house, index) => (
            <div className="interior" key={index}>
            {house.name === detalleCharacters.house &&  <img src ={house.image}  alt={detalleCharacters.house}  /> }
             
            </div>
          ))}
          
        </div>
       
</div>
<div className="datos">
        <h4 className="titulos">{t('alliances')}</h4>
        <div className="datosvarios">
          {detalleCharacters.alliances.map((alliance, index) => (
            <div className="interior" key={index}>
              <h4>{alliance}</h4>
            </div>
          ))}
          
        </div>
        </div>
        <div className="datos">
        
          <h4 className="titulos" >{t('chapters')}</h4>
          <SimpleBar className="simpleBarDetails" ref={simpleBarRef}>
          <div className="datosvarios">
            {detalleCharacters.episodes.map((episode, index) => (
              <div className="interior" key={index}>
                <h4>{episode}</h4>
              </div>
            ))}
            
          </div>
        </SimpleBar>
</div>
<div className="datos">
        <h4 className="titulos">{t('parents')}</h4>
        <div className="datosvarios">
          {detalleCharacters.parents.map((parents, index) => (
            <div className="interior" key={index}>
              <h4>{parents}</h4>
            </div>
          ))}
          
        </div>
</div>
<div className="datos">
        <h4 className="titulos">{t('family')}</h4>
        <div className="datosvarios">
          {detalleCharacters.siblings.map((siblings, index) => (
            <div className="interior" key={index}>
              <h4>{siblings}</h4>
            </div>
          ))}
          
        </div>
        </div>

        <div className="datos">
       
          <h4 className="titulos">{t('titles')}</h4>
          <SimpleBar className="simpleBarDetails" ref={simpleBarRef}>
          <div className="datosvarios">
            {detalleCharacters.titles.map((titles, index) => (
              <div className="interior" key={index}>
                <h4>{titles}</h4>
              </div>
            ))}
            
          </div>
        </SimpleBar>
        </div>
      </div>
    </div>
  )
}

export default DetailCharacters;
