import React from 'react'
import styled from 'styled-components'
const TotalScore = ({score}) => {
  return (
    <ScoredContainer>
    <h1>{score}</h1>
    <p>Total Score</p>
</ScoredContainer>

  )
}

export default TotalScore

const ScoredContainer = styled.div`
max-width: 200px;
margin-top: 40px;
margin-left:40px;
h1{
    font-size: 100px;
    line-height: 100px;
    margin-left: 30px;
}
p{
    font-size: 24px;
    font-weight: 500px;
    margin-left: 10px;

}
`;