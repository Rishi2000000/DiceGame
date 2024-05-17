// import React, { useState } from 'react'
// import styled from 'styled-components';
// const arrNumber = [ 1,2,3,4,5,6];
// const [selectedNumber,setSelectedNumber]=useState();

// console.log(selectedNumber);



// const NoSelector = () => {
//   return (
//     <div>
//     {arrNumber.map((value,i) =>(
//         <Box key={i} onClick={()=>setSelectedNumber(value)}>{value}</Box>
//     ))}
    
//     </div>
//   )
// }

// export default NoSelector

// const Box = styled.div`
// height : 72px;
// width : 72px;
// border : 2px solid black;
// display : grid;
// place-items: center;
// font-size : 24px;
// font-weight : 700;

    
// `;

import React, { useState } from 'react';
import styled from 'styled-components';


const NoSelector = ({selectedNumber, setSelectedNumber}) => {
    const arrNumber = [1, 2, 3, 4, 5, 6];

  // Move the useState call inside the functional component

  console.log(selectedNumber);

  return (
    <NumberSelectorContainer>
    <div className="flex">
      {arrNumber.map((value, i) => (
        <Box 
        isSelected = {value ===selectedNumber}    key={i} onClick={() => setSelectedNumber(value)}>
          {value}
        </Box>
      ))}
    </div>
    <p>Select Number</p>
    </NumberSelectorContainer>

  );
};

export default NoSelector;
 
const NumberSelectorContainer= styled.div`
.flex{
    display: flex;
    gap : 24px;
}
p{
    font-size: 24px;
    font-weight : 700px;
    margin-bottom:0px;

}`


const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 2px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  background-color :${(props)=>(props.isSelected ? "black " : "white")};
  color :${(props)=>(props.isSelected ? "white " : "black")};
  
`;
