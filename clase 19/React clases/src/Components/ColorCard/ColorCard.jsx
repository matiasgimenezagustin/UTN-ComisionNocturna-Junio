import React from 'react'
import {AiOutlineHeart, AiFillHeart} from 'react-icons/ai'

const ColorCard = ({likes}) => {
    
  return (
    <div className='colorCard'>
        <div className='colores'>
            <div>
                <span>#0E21A0</span>
            </div>
            <div>
                <span>#4D2DB7</span>
            </div>
            <div>
                <span>#9D44C0</span>
            </div>
            <div>
                <span>#EC53B0</span>
            </div>
        </div>
        <div className='colorCardControls'>
            <button>
                <AiOutlineHeart/>
                {likes}
            </button>
            <span>22 Hours</span>
        </div>
    </div>
  )
}

export default ColorCard