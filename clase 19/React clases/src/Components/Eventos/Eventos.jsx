import React, { useState } from 'react'

const Eventos = () => {
    const [contador, setContador] =  useState(1)
    const [error, setError] = useState('')
    

    const handleClickBtn = (op) =>{
        if(op == '+'){
            setError('')
            setContador(contador + 1)
        }
        else if( op == '-' ){
            if(contador == 1){
                setError('No se puede contar menos de 1')
            } 
            else{
                setContador(contador - 1)
            }
            
        }
    }

    /*  */
    
  return (
    <div>
        <h1>El contador vale {contador}</h1>


        <button onClick={() => handleClickBtn('-')} disabled={error}>
            -
        </button>

        <span>{contador}</span>
        <button onClick={() => handleClickBtn('+')}>
            +
        </button>
        {error && <h2 style={{color: 'red'}}>{error}</h2>}
    </div>
  )
}

export default Eventos


