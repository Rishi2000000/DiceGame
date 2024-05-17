import styled from "styled-components";

 export const Button = styled.button`
padding: 10px 18px;
color: white;
width: 220px;
background-color: black;
border-radius : 5px;
border:none;
transition: 0.2s background ease-in;
border : 1px solid transparent;
cursor: pointer;


&:hover{
    background-color: white;
    color: black;
    box-shadow: 4px 2px  black;
    border : 1px solid black;
    transition: 0.3s background ease-in;
}

`;