import { useTranslation } from "react-i18next"

const Home = () => {

    const {t} = useTranslation();

  return (
    
    <div className="salaTrono" style={{ position: 'relative', width: '1200px', height: '667px' }}>
      <img src="./public/images/portada.jpg"
        style={{ width: '100%', height: '100%'}}
      />
      <div
      style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: 'white',
          textShadow: '5px 5px 10px rgba(0, 0, 0, 0.3)',
          fontSize: '100px',
          fontWeight: 'bold',
          textAlign: 'center',
          padding: '10px',
        }}>
            {t('gameofthrones')}
      </div>
    </div>
    
  )
}

export default Home
