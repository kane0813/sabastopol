import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/Homepage.jsx'
import Rotatable from './pages/Rotatable.jsx'
import WireFrame from './pages/WireFrame.jsx'
import { Navbar } from './components/navbar.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/rotate" element={<Rotatable />} /> */}
        <Route path="/rotate" element={<WireFrame/>}/>
      </Routes>
    </StrictMode>
  </BrowserRouter>
)
