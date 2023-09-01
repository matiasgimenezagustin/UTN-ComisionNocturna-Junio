import React, { useState } from 'react'
import {AiOutlineHeart, AiFillHeart} from 'react-icons/ai'
import './colorCard.css'
const ColorCard = ({likes, date, colores, id}) => {
    const [colorSelected, setColorSelected] =  useState('')

    const handleSelectColor = (color) =>{
        setColorSelected(color)
    }

    const [isLiked, setIsLiked] =  useState(false)

    const handleLikeCard = () =>{

        setIsLiked(!isLiked)
    }

  return (
    <div className='colorCard'>
        <div className='colores'>
            <ColorsList colors={colores} handleSelectColor={handleSelectColor}/>
        </div>
        <div className='colorCardControls'>
            <button onClick={handleLikeCard}>
                {isLiked ? <AiFillHeart/> : <AiOutlineHeart/>}
                {isLiked ? likes + 1 : likes}
            </button>
            <span>{date}</span>
          
        </div>
        <h2>El color seleccionado es: {colorSelected}</h2>
    </div>
  )
}

export default ColorCard


const ColorsList = ({colors, handleSelectColor}) =>{
    
    return(
        <>
            {
                colors.map((color, index) =>(
                    <div key={index} style={{backgroundColor: color}} onClick={() => handleSelectColor(color)}>
                        <span>{color}</span>
                    </div>
                ))
            }
        </>
    )
}

/* 
Vamos a tener un estado que se llame colorSelected, cuando le de click a un color de la carta de colores el estado guardara el color seleccionado y lo mostrara en HTML

*/