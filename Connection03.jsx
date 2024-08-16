import React, { useState } from 'react'
import StartGame from './StartGame'
import GamePlay from './GamePlay'

const Connection03 = () => {

    const[isGameStarted, setIsGameStarted]=useState(true)

    const toggleGamePlay =()=>{
        setIsGameStarted((prev)=>!prev)
    }

  return (
    <div>
        {
            isGameStarted ? <GamePlay/> :<StartGame toggle={toggleGamePlay} />
        };
        
    </div>
  )
}

export default Connection03