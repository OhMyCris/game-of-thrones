import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer>
      <Link to='/'>
          <button>Home</button>
        </Link>
        <Link to='/characters'>
          <button>Characters</button>
        </Link>
        <Link to='/casas'>
          <button>Casas</button>
        </Link>
        <Link to='/cronologia'>
          <button>Cronologia</button>
        </Link>
    </footer>
  )
}

export default Footer
