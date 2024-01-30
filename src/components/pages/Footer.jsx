import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"
import "./Footer.css"

const Footer = () => {

  const {t} = useTranslation();

  return (
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
  )
}

export default Footer
