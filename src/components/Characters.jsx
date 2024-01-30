
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { GameOfContext } from './context/context';

function Characters() {
  const {characters}= useContext(GameOfContext)
    console.log(characters);
  return (
    <div >
      <h2>Personajes</h2>
<div className ="characters">
      {characters.map((character) => (
        <div className="interior"  key = {character.id}>
        <h4> {character.name}</h4> 
        <img className = "fotosperson" src = {character.image} alt={character.name}/>
       <Link to={`/character/${character.id}`}><button>Saber mas</button></Link>
          
</div>
   

     )) }
     </div>
    </div>
  )
}

export default Characters
