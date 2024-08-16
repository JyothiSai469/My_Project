import React,{useState} from 'react'
import TotalScore from './TotalScore'
import NumberSelector from'./NumberSelector'
import styled from 'styled-components'
import RoleDice from './RoleDice'
import { Button, OutlineButton } from './Button'
import Rules from './Rules'


const GamePlay = () => {
    const[selectedNumber, setSelectedNumber]=useState();
    const [currentDice, setCurrentDice]= useState(1);
    const [score, setscore] = useState(0);
    const [error, setError] = useState("");
    const[showRules, setshowRules] = useState(false);
    const generateRandomNumber = (min, max) => {
        // console.log(Math.floor(Math.random() * (max - min) + min));
        return Math.floor(Math.random() * (max - min) + min);
      }
    
      const roleDice =() =>{
        if(!selectedNumber)
            {
                setError("You Have  Not Selected Any Number")
                return;
            }
        const randomNumber = generateRandomNumber(1, 7);
    
            setCurrentDice((prev)=> randomNumber)

           

            if(selectedNumber === randomNumber)
                {
                    setscore((prev)=> prev+randomNumber);
                }
                else
                {
                    setscore((prev=> prev-2));
                }
                setSelectedNumber(undefined);
      };

      const resetScore=()=>{
        setscore(0)
      }


  return (
    <MainComtainer>
       <div className='top_section'>
       <TotalScore score={score}
       />

       <NumberSelector 
       error={error}
       setError={setError}
       selectedNumber={selectedNumber}
       setSelectedNumber ={setSelectedNumber}
       
       />

       </div>

       <RoleDice
       currentDice = {currentDice}
       roleDice = {roleDice}
    //    setCurrentDice ={setCurrentDice}
       />
       <div className="btns">
        <OutlineButton onClick={resetScore}>Reset</OutlineButton>
        <Button onClick={()=>setshowRules((prev)=>!prev)}>{ showRules ? "Hide" : "Show Rules"}Rules</Button>
       </div>
        {showRules && <Rules />}
    </MainComtainer >
  )
}

export default GamePlay

const MainComtainer = styled.div`
.top_section{
    display: flex;
    justify-content:space-between;
    align-items: end;
}
.btns{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    margin-top: 40px;
  
}
`;