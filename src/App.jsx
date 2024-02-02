
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
// import Search from './components/Search'

function App() {

  

  return (
    <>
      <BrowserRouter>
        <Header/>
          <main>
            <Routes>
              
                  <Route path='/' element={<Home/>} />
                  <Route path='/characters' element={<Characters/>} />
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
