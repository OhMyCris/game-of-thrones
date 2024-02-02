import { useTranslation } from "react-i18next"
import { Link, useLocation } from "react-router-dom"
import "./Header.css"
import { useEffect, useState } from "react";


const Header = () => {

  const {i18n} = useTranslation();

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang)
  }
  const { pathname } = useLocation()
  // const rutaDinamica = useRouteMatch("/characters/:id");
  const [mostrarHome, setMostrarHome] = useState(false)
  const [mostrarVolver, setMostrarVolver] = useState(false)
  const [mostrarVolverDos, setMostrarVolverDos] = useState(false)
  

  const rutasFijas = ['/characters', '/casas', '/cronologia']
  // const rutasDinamicas = ['/characters/:id', '/casas/:id']

  useEffect(() => {
    const rutaFija = rutasFijas.includes(location.pathname);
    // const rutaDinamica = rutasDinamicas.includes(location.pathname);
    setMostrarHome(rutaFija || pathname.startsWith("/characters/") || pathname.startsWith("/casas/"))
  }, [pathname])

  useEffect(() => {
    setMostrarVolver(pathname.startsWith("/characters/"))
  }, [pathname])

  useEffect(() => {
    setMostrarVolverDos(pathname.startsWith("/casas/"))
  }, [pathname])

  return (
    <header>
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
        <p>hola</p>
    </header>
  )
}

export default Header
