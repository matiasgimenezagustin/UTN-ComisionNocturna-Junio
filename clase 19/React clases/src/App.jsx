import React from 'react'
import { ColorCard, Header } from './Components'


const App = () => {
  const carta1 ={
    likes: 120, 
    date: 'yesterday',
    colores: [
      '#0E21A0',
      '#4D2DB7',
      '#9D44C0',
      '#EC53B0'
    ],
    id: 1
  }
  return (
    <div>
      <ColorCard likes={120}/>
      <ColorCard likes={40}/>
      <ColorCard likes={50}/>
    </div>
  )
}

export default App
