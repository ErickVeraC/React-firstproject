import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App name='Erick' lastName='Vera' />
    <App name='Lucio' lastName='Vera' />
    <App name='Alexis' lastName='Jorda' />
  </StrictMode>,
)
