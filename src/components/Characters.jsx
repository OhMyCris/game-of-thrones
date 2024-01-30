
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { GameOfContext } from './context/context';

function Characters() {
  const {characters}= useContext(GameOfContext)
    console.log(characters);
  return (
    <div>
      <h2>Personajes</h2>

      {characters.map((character) => (
        <div key = {character.id}>
        <h4> {character.name}</h4> 
        <img src = {character.image} alt={character.name}/>
       <Link to={`/character/${character.id}`}>Saber Más</Link>
          
</div>
    

     )) }
    </div>
  )
}

export default Characters
