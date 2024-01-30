
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { GameOfContext } from './context/context';
import { useTranslation } from "react-i18next"
import "./Characters.css"

function Characters() {
  const [search, setSearch] = useState("");
  const { characters } = useContext(GameOfContext);
  const {t} = useTranslation();
  

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const filteredCharacters = characters.filter((character) => (
    character.name.toUpperCase().includes(search.toUpperCase())
  ));

  return (
    <div>
      <input type="text" value={search} placeholder='Buscar...' onChange={handleChange}/>
      <h2>{t('characters')}</h2>
      <div className="characters">
        {filteredCharacters.map((character) => (
          <div className="interior" key={character.id}>
            <h4>{character.name}</h4>
            <img className="fotosperson" src={character.image} alt={character.name}/>
            <Link to={`/character/${character.id}`}>
              <button>{t('knowmore')}</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Characters;
