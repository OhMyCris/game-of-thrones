import {  useEffect, useRef} from "react";
import { Link } from "react-router-dom";
import 'simplebar/dist/simplebar.min.css';
import SimpleBar from 'simplebar-react'

import "./Characters.css";


function Characters({characters}) {
 


  const simpleBarRef = useRef(null);
  useEffect (()=>{
    if(simpleBarRef.current){
      simpleBarRef.current.recalculate()
    }
  })


  

  return (
    <div className="general" >
      
     
      <SimpleBar className="simpleBarCharacters" ref={simpleBarRef}>
      <div className="characters">
        {characters.map((character) => (
          <div className="interior" key={character.id}>
           

            <Link to={`/characters/${character.id}`}>
              <img
                className="fotosperson"
                src={character.image}
                alt={character.name}
              />
            </Link>
          </div>
        ))}
      </div>
      </SimpleBar>
    </div>
  );
}
export default Characters;
