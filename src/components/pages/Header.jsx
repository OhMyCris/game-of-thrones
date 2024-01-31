import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"
import "./Header.css"


const Header = () => {

  const {i18n} = useTranslation();

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang)
  }

  return (
    <header>
      <Link to='/'>
          <img src="./public/images/home.png"/>
        </Link>
        <img className="espacio" src="./public/images/spain.png" onClick={() => handleLanguageChange('es')}/>
        <img className="espacio" src="./public/images/united-kingdom.png" onClick={() => handleLanguageChange('en')}/>
    </header>
  )
}

export default Header
