import React from 'react'
import {AiOutlineHeart, AiFillHeart} from 'react-icons/ai'
import './colorCard.css'
const ColorCard = ({likes, date, colores, id}) => {
    



  return (
    <div className='colorCard'>
        <div className='colores'>
            <ColorsList colors={colores}/>
        </div>
        <div className='colorCardControls'>
            <button>
                <AiOutlineHeart/>
                {likes}
            </button>
            <span>{date}</span>
          
        </div>
    </div>
  )
}

export default ColorCard


const ColorsList = ({colors}) =>{
    return(
        <>
            {
                colors.map((color, index) =>(
                    <div key={index} style={{backgroundColor: color}}>
                        <span>{color}</span>
                    </div>
                ))
            }
        </>
    )
}