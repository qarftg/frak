import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import About from './pages/About'
import TodoBlock from './shared/TodoList/TodoBlock'

export default function AppRouters() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/todo' element={<TodoBlock />} />
    </Routes>
        

  )
}

