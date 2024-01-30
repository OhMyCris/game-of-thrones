import { Link } from "react-router-dom"


const Header = () => {
  return (
    <header>
      <Link to='/'>
          <button>Home</button>
        </Link>
    </header>
  )
}

export default Header
