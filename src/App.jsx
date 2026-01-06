// App.jsx
import React from 'react'
import Apps from './Apps'
import { Routes, Route } from 'react-router-dom'
import ShowCase from './ShowCase'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/showCase" element={<ShowCase />} />
        {/* Agar Apps ek component hai jo har page pe chahiye, to isko Route ke bahar rakh sakte ho */}
        <Route path="/" element={<Apps />} />
      </Routes>
    </>
  )
}

export default App
