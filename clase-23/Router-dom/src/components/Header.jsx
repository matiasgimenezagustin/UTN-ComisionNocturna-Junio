import React from 'react'
import shield from '../assets/shield.svg'
import { useGlobalContext } from '../context/GlobalContextProvider'
const Header = () => {
  const {nombre} = useGlobalContext()
  return (
    <header>
        <img src={shield}/>
        <h1>{nombre}</h1>
    </header>
  )
}

export default Header