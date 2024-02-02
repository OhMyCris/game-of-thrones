import { useTranslation } from "react-i18next"
import { Link, useLocation } from "react-router-dom"
import "./Footer.css"
import { useEffect, useState } from "react";

const Footer = () => {

  const {t} = useTranslation();

  const { pathname } = useLocation()
  const [mostrarFooter, setMostrarFooter] = useState(false)

  const rutasFijas = ['/characters', '/casas', '/cronologia']

  useEffect(() => {
    const rutaFija = rutasFijas.includes(location.pathname);
    // const rutaDinamica = rutasDinamicas.includes(location.pathname);
    setMostrarFooter(rutaFija || pathname === "/")
  }, [pathname])

  return (
    <div>
    {mostrarFooter && (
       <footer>
         <Link to='/characters'>
          <span>{t('characters')}</span>
         </Link>
         <Link to='/casas'>
           <span>{t('houses')}</span>
         </Link>
         <Link to='/cronologia'>
           <span>{t('cronology')}</span>
        </Link>
     </footer>
    )}
    </div>
    
  )
}

export default Footer
