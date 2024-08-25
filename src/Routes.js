import React from 'react'
import BasecLayout from './Layout';
import { Routes,Route } from 'react-router-dom';

const RoutesWith = () => {
  return (
    <Routes>
       <Route path='/' element={<BasecLayout></BasecLayout>} />
       <Route path='/About' element={<h1>About</h1>} />
    </Routes>
  )
}

export default RoutesWith