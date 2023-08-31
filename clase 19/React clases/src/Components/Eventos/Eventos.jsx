import React, { useState } from 'react'

const Eventos = () => {
    const [contador, setContador] =  useState(0)

    
    const handleClickBtn = () =>{
        setContador(contador + 1)
        
      /*   console.log('Tu contador vale: ' + ++contador) */
    }
    
  return (
    <div>
        <h1>El contador vale {contador}</h1>
        <button onClick={handleClickBtn}>Click</button>

        <button>
            -
        </button>
        <span>0</span>
        <button>
            +
        </button>
    </div>
  )
}

export default Eventos

