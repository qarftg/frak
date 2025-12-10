import React from 'react'
import { useState } from 'react'
import Home from './components/pages/home'
import About from './components/pages/About'
import AppRouters from './components/AppRouters'
import Header from './components/shared/Header'
import Footer from './components/shared/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <AppRouters />
      <Footer />
    </>
  )
}

export default App
