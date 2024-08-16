import styled from "styled-components";

export const Button = styled.button`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 10px 18px;
gap: 10px;

width: 220px;
height: 44px;

background-color: black;
color: white;
border-radius: 5px;
min-width: 220px;
border:none ;
font-size: 16px;
border: 1px solid transparent;
transition: 0ms.4s background ease-in;
cursor: pointer;
&:hover{
  background-color:white;
  border: 1px solid black;
  color: black;
  transition: 0ms.3s background ease-in;
}
`;

export const OutlineButton = styled(Button)`
background-color: white;
border: 1px solid black;
color: black;

&:hover{
  background-color:black;
  border: 1px solid transparent;
  color: white;
  
}
`;