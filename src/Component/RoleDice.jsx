import React, { useState } from 'react'
import styled from 'styled-components'

const RoleDice = ({roleDice, currentDice}) => {


   
  return (
    <DiceContainer>
     <div className="dice" 
     onClick={roleDice}>
        <img src={`/image/dice_${currentDice}.png`} alt='dice1'/>
     </div>
     <p>Click on Dice</p>
    </DiceContainer>
  )
}

export default RoleDice

const DiceContainer = styled.div`
margin-top :0px;
display: flex;
flex-direction : column;
align-items: center;
margin-bottom:0px;
.dice{
    cursor: pointer;
}
p{
    font-size: 24px;
    margin-top :0px;

}


    
`;