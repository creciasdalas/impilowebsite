import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer/Footer.tsx'
import Header from './components/Header/Header.tsx'
import About from './pages/About/About.tsx'
import Contact from './pages/Contact/Contact.tsx'
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
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
