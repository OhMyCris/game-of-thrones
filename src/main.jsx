import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { GameOfContextProvider } from './components/context/context.jsx'

import './i18n';
import { Suspense } from 'react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <GameOfContextProvider>
    <Suspense fallback="loading">
      <App />
    </Suspense>
  </GameOfContextProvider>
    
  
)
