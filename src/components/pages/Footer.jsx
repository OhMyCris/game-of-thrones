import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"

const Footer = () => {

  const {t} = useTranslation();

  return (
    <footer>
        <Link to='/characters'>
          <button>{t('characters')}</button>
        </Link>
        <Link to='/casas'>
          <button>{t('houses')}</button>
        </Link>
        <Link to='/cronologia'>
          <button>{t('cronology')}</button>
        </Link>
    </footer>
  )
}

export default Footer
