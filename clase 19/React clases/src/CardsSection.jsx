import React from 'react'
import { ColorCard, Header } from './Components'
import { colorCards } from './dataColors'


const App = () => {
  
  return (
    <div className='cardColorsList'>
      
      {
        colorCards.map(({likes: meGusta, colores, id, date}) =>(
          <ColorCard likes={meGusta} colores={colores} id={id} date={date} key={id}/>
        ) )
      }
    </div>
  )
}

export default App


/* 
Generar una seccion
*/
