import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import NavBar from './components/Navbar'
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
    <main className='overflow-x-hidden relative min-h-screen w-screen'>
      <NavBar/>
      <Hero/>
      <About/>
      
      <Contact />
      <Footer />
    </main>
    </>
  )
}

export default App
