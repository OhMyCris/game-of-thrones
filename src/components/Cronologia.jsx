import { useContext, useEffect, useRef, useState } from 'react';
import './Cronologia.css'
import 'simplebar/dist/simplebar.min.css';
import SimpleBar from 'simplebar-react'
import { GameOfContext } from './context/context';

const Cronologia = () => {
  const { characters } = useContext(GameOfContext);
  const [character, setCharacter] = useState([]);
  const [ascendingOrder, setAscendingOrder] = useState(true);
  // const {t} = useTranslation();

  useEffect(() => {
    const sorted = characters.sort((a, b) => {
      return ascendingOrder ? a.age - b.age : b.age - a.age});
    
      const newSorted = sorted.map((obj, index) => ({...obj, id: index + 1}))

    setCharacter(newSorted);
    console.log(newSorted);
  }, [ascendingOrder, characters])

  const cambio = () => {
    setAscendingOrder((prevOrder) => !prevOrder)
  }

  const simpleBarRef = useRef(null);
  useEffect(() => {
    // Actualiza la barra de desplazamiento después de que el componente se monta
    if (simpleBarRef.current) {
      simpleBarRef.current.recalculate();
    }
  }, []);

  return (
    <div>
      <div onClick={cambio} className='cursor'>
        {ascendingOrder ? '\u2191' : '\u2193'}
      </div>
      {/* <SimpleBar style={{ maxHeight: '720px', maxWidth:'width: 800px'}} ref={simpleBarRef}> */}
        <div className='orden'>
          {character.map((chara) =>(
            <div key={chara.id} className={chara.id % 2 === 0 ? 'clear' : 'caja'}>
              <p>{chara.age ? chara.age : '??'}</p>
              <p>{chara.name}</p>
              <img src={chara.image} alt={chara.name} className='circulos'/>
            </div>
          ))}
        </div>
      {/* </SimpleBar> */}
    </div>
  )
}

export default Cronologia
