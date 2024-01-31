import React, { useContext, useState } from 'react'
import { GameOfContext } from './context/context';
import { Link } from 'react-router-dom';

function Search() {

  const [search, setSearch] = useState("");
  const { characters } = useContext(GameOfContext);

    const filteredCharacters = characters.filter((character) => (
        character.name.toUpperCase().includes(search.toUpperCase())
        ));


        const handleChange = (event) => {
            setSearch(event.target.value);
          };
  return (
    <div>
      <div className= "buscador">
      <input className="search" type="text" value={search} placeholder=' &#x1F50D; Buscar...' onChange={handleChange}/>
      </div>
      <h2>{('characters')}</h2>
      <div className="characters">
        {filteredCharacters.map((character) => (
          <div className="interior" key={character.id}>
            <h4>{character.name}</h4>

            <Link to={`/character/${character.id}`}>
            <img className="fotosperson" src={character.image} alt={character.name}/>           
            </Link>
            
          </div>
        ))}
      </div>

    </div>
  )
}

export default Search
