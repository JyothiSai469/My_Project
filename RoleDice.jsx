import React from 'react'
import styled from 'styled-components'

const RollDice = ({currentDice, roleDice}) => {


  
  return (
   
    <DiceContainer>
         <div className='dice' onClick={roleDice}>

            <img src={`/src/Components/Project03/IMGs/dice_${currentDice}.png `} alt="Dice Images " />

         </div>
         <p>Click on Dice to Roll</p>
    </DiceContainer>
  )
}

export default RollDice

const DiceContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 48px;
p{
  font-size:24px
}
.dice{
  cursor: pointer;
}
`;