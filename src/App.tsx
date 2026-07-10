import { Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header.tsx'
import About from './pages/About/About.tsx'
import Home from './pages/Home/Home.tsx'
import Services from './pages/Services/Services.tsx'
import './App.css'

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  )
}

export default App
