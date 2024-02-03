import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "simplebar/dist/simplebar.min.css";
import SimpleBar from "simplebar-react";
import { useTranslation } from "react-i18next";
import "./Characters.css";
import axios from "axios";

function Characters() {
  const baseUrl = "https://game-of-thrones-json-server.vercel.app";

  const { t } = useTranslation();

  const handleChange = (event) => {
    console.log(event.target.value);

    getCharacters(event.target.value);
  };

  const [characters, setCharacters] = useState([]);

  const getCharacters = async (name) => {
    if (name) {
      const characterApi = await axios.get(
        `${baseUrl}/characters?name=${name}`
      );
      setCharacters(characterApi.data);
    } else {
      const characterApi = await axios.get(`${baseUrl}/characters`);
      setCharacters(characterApi.data);
      console.log(characterApi.data);
    }
  };

  useEffect(() => {
    getCharacters();
  }, []);

  const simpleBarRef = useRef(null);
  useEffect(() => {
    if (simpleBarRef.current) {
      simpleBarRef.current.recalculate();
    }
  });

  return (
    <div className="general">
      <div className="buscador">
        <input
          className="search"
          type="text"
          placeholder=" &#x1F50D; Buscar..."
          onChange={handleChange}
        />
      </div>

      <SimpleBar className="simpleBarCharacters" ref={simpleBarRef}>
        <div className="characters">
          {characters.map((character) => (
            <div  key={character.id}>
              <figure className="namehover">
              <Link to={`/characters/${character.id}`}>
                <img
                  className="fotosperson"
                  src={character.image}
                  alt={character.name}
                />
                <p className= "name" >{character.name}</p>
                </Link>
              </figure>
            </div>
          ))}
        </div>
      </SimpleBar>
    </div>
  );
}
export default Characters;
