import React from 'react'
import Hero from './components/Hero'
import About from './components/About'

const App = () => {
  return (
    <>
    <main className='overflow-x-hidden relative min-h-screen w-screen'>
      <Hero/>
      <About/>
    </main>
    </>
  )
}

export default App
