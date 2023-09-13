import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Contact, Home, ProductDetail } from '../pages'
import { Error404 } from '../components'

const PageRouter = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/detail/:id' element={<ProductDetail/>}/>
            <Route path='*' element={<Error404 mensaje={'La ruta buscada no existe'} />}/>
        </Routes>
    </>
  )
}

export default PageRouter

