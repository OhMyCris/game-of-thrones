import { useTranslation } from "react-i18next"
import { Link, useLocation } from "react-router-dom"
import "./Header.css"
import { useEffect, useState } from "react";


const Header = () => {

  const {i18n} = useTranslation();

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang)
  }

  const [mostrarHome, setMostrarHome] = useState(false)
  const [mostrarVolver, setMostrarVolver] = useState(false)
  const location = useLocation()

  const rutasFijas = ['/characters', '/casas', '/cronologia']
  const rutasDinamicas = ['/characters/:id', '/casas/:id']

  useEffect(() => {
    const rutaFija = rutasFijas.includes(location.pathname);
    const rutaDinamica = rutasDinamicas.includes(location.pathname);

    setMostrarHome(rutaFija || rutaDinamica)
  }, [location.pathname])

  useEffect(() => {
    const rutaDinamica = rutasDinamicas.includes(location.pathname);

    setMostrarVolver(rutaDinamica)
  }, [location.pathname])

  return (
    <header>
      {/* {mostrarVolver && ( */}
        <Link to='/characters'>
          <div className="volver">
            <p>←  Volver</p>
          </div>
        </Link>
      {/* )} */}
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
