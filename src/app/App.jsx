import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Home } from '../components/Home'
import { Redirect } from '../components/Redirect/Redirect'


export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/go/:key' element={<Redirect />} />
      </Routes>
    </BrowserRouter>
  )
}
