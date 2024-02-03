
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css'
import Header from './components/pages/Header'
import Footer from './components/pages/Footer'
import Home from './components/Home'
import Characters from './components/Characters'
import DetailCharacters from './components/DetailCharacters'
import Casas from './components/Casas'
import DetailCasas from './components/DetailCasas'
import Cronologia from './components/Cronologia'
import axios from 'axios'
import { useEffect, useState } from 'react'
// import Search from './components/Search'

function App() {

  const baseUrl = "https://game-of-thrones-json-server.vercel.app";
  const [characters, setCharacters] = useState([]);

  const getCharacters = async (name) => {
    if (name) {
      const characterApi = await axios.get(`${baseUrl}/characters?name=${name}`);
      setCharacters(characterApi.data);
    }
    else{
    const characterApi = await axios.get(`${baseUrl}/characters`);
    setCharacters(characterApi.data);
    // console.log(characterApi.data);
    }
  };

  useEffect(() => {
    getCharacters();
  }, []);

  

  return (
    <>
      <BrowserRouter>
        <Header getCharacters={getCharacters}/>
          <main>
            <Routes>
              
                  <Route path='/' element={<Home/>} />
                  <Route path='/characters' element={<Characters characters={characters}/>} />
                  {/* <Route path=`/characters?name${characters.name}` element={<Search/>} /> */}
                  <Route path='/characters/:id' element={<DetailCharacters/>} />
                  <Route path='/casas' element={<Casas/>} />
                  <Route path='/casas/:id' element={<DetailCasas/>} />
                  <Route path='/cronologia' element={<Cronologia/>} />
                
              
            </Routes>
            </main>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
