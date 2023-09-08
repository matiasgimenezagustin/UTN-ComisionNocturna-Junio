import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Contact, Home, ProductDetail } from '../pages'

const PageRouter = () => {
  return (
    <>
        <Routes>
            <Route path='/home' element={<Home/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/detail/:id' element={<ProductDetail/>}/>
            <Route path='*' element={<h2>Error 404 page not found</h2>}/>
        </Routes>
    </>
  )
}

export default PageRouter