import React from 'react'
import './Header.css'

const Header = (propiedades) => {
    console.log(propiedades)
  return (
    <header style={{backgroundColor: propiedades.colorDeFondo}}>
        Soy el {propiedades.title}
    </header>
  )
}

export default Header

