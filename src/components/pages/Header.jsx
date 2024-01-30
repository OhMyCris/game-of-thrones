import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"


const Header = () => {

  const {i18n} = useTranslation();
  const {t} = useTranslation();

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang)
  }

  return (
    <header>
      <Link to='/'>
          <button>{t('home')}
          <img src="./public/images/home.png" style={{ width: '50%', height: '50%', objectFit: 'cover' }}/></button>
        </Link>

        <button>
          <img src="./public/images/spain.png" onClick={() => handleLanguageChange('es')}/>
        </button>
        <button>
          <img src="./public/images/united-kingdom.png" onClick={() => handleLanguageChange('en')}/>
        </button>
        
    </header>
  )
}

export default Header
