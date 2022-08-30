import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './components/About'
import Achievements from './components/Achievements'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Education from './components/Education'
import Home from './components/Home'
import Navbar from './components/Navbar'
import PageNotFound from './components/PageNotFound'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Work from './components/Work'
import Particles from "./components/Paticles";
import Home1 from './components/Home1'
import Arrow from './components/Arrow'

const App = () => {
  return (
    <div name='Portfolio'>
      <BrowserRouter>
        <Particles />
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home1 />} />
          <Route path='/about' element={<About />} />
          <Route path='/work' element={<Work />} />
          <Route path='/education' element={<Education />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/achievements' element={<Achievements />} />
          <Route path='/certifications' element={<Certifications />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
        <Arrow />
      </BrowserRouter>
    </div>
  )
}

export default App
