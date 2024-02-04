import { useTranslation } from "react-i18next"
import { Link, useLocation, useNavigate } from "react-router-dom"
import "./Header.css"
import { useEffect, useState } from "react";

// import axios from "axios";


const Header = ({getCharacters, getCasas}) => {
 
  const {i18n} = useTranslation();

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang)
  }
  const { pathname } = useLocation()
  // const rutaDinamica = useRouteMatch("/characters/:id");
  const [mostrarHome, setMostrarHome] = useState(false)
  const [mostrarVolver, setMostrarVolver] = useState(false)
  const [mostrarVolverDos, setMostrarVolverDos] = useState(false)
  const [mostrarSearch, setMostrarSearch] = useState(false)
  const [mostrarSearchDos, setMostrarSearchDos] = useState(false)
  

  const rutasFijas = ['/characters', '/casas', '/cronologia']
  // const rutasDinamicas = ['/characters/:id', '/casas/:id']

  useEffect(() => {
    const rutaFija = rutasFijas.includes(location.pathname);
    // const rutaDinamica = rutasDinamicas.includes(location.pathname);
    setMostrarHome(rutaFija || pathname.startsWith("/characters/") || pathname.startsWith("/casas/"))
  }, [pathname])

  useEffect(() => {
    setMostrarVolver(pathname.startsWith("/characters/"))
    setMostrarVolverDos(pathname.startsWith("/casas/"))
    setMostrarSearch(pathname === "/characters")
    setMostrarSearchDos(pathname === "/casas")
  }, [pathname])

  ///buscador///

  // const baseUrl = "https://game-of-thrones-json-server.vercel.app";

  // const handleChange = (event) => {
  //   console.log("event.target.value");
   
  //   getCharacters(event.target.value)
  // };

  // const [characters, setCharacters] = useState([]);
 

  // const getCharacters = async (name) => {
  //   if (name) {
  //     const characterApi = await axios.get(`${baseUrl}/characters?name=${name}`);
  //     setCharacters(characterApi.data);
  //   }
  //   else{
  //   const characterApi = await axios.get(`${baseUrl}/characters`);
  //   setCharacters(characterApi.data);
  //   console.log(characterApi.data);
  //   }
  // };

  // useEffect(() => {
  //   getCharacters();
  // }, []);

  ///endbuscador///

  const [buscar, setBuscar] = useState('')
  const [buscarDos, setBuscarDos] = useState('')
  const navigate = useNavigate()

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleChange();
      getCharacters(e.target.value)
    }
  }

  const handleChange = () => {
    navigate(`/characters?name=${buscar}`)
    console.log(buscar);
  }

  const handleKeyDownDos = (e) => {
    if (e.key === 'Enter') {
      handleChangeDos();
      getCasas(e.target.value)
    }
  }

  const handleChangeDos = () => {
    navigate(`/casas?name=${buscarDos}`)
    console.log(buscarDos);
  }
  

  return (
    <header>

   
   <div className="reprocador">
    
    <div className="reproductor">
    <audio loop className="audio" src="videoplayback.m4a" controls> este es un elemento de audio no soportado por tu navegador, prueba con otro </audio>
    </div>



    {mostrarSearch && (
      <div className="buscador">
          <input
            className="search"
            type="text"
            placeholder=" &#x1F50D; Buscar..."
            onChange={(e) => setBuscar(e.target.value)}
            onKeyDown={handleKeyDown}
          />
      </div>
    )}

    {mostrarSearchDos && (
      <div className="buscador">
          <input
            className="search"
            type="text"
            placeholder=" &#x1F50D; Buscar..."
            onChange={(e) => setBuscarDos(e.target.value)}
            onKeyDown={handleKeyDownDos}
          />
      </div>
      )}
    </div>
   
      {mostrarVolver ? (
        <Link to='/characters'>
          <div className="volver">
            <p>←  Volver</p>
          </div>
        </Link>
      ) : mostrarVolverDos ? (
        <Link to='/casas'>
          <div className="volver">
            <p>←  Volver</p>
          </div>
        </Link>
      ) : ''}
      {mostrarHome && (
        <Link to='/'>
          <img src="./public/images/home.png"/>
        </Link>
      )}
        <img className="espacio" src="./public/images/spain.png" onClick={() => handleLanguageChange('es')}/>
        <img className="espacio" src="./public/images/united-kingdom.png" onClick={() => handleLanguageChange('en')}/>
      
    </header>
  )
}

export default Header
