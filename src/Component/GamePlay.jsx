

// // import React from 'react'
// // import TotalScore from './TotalScore'
// // import NoSelector from '../NoSelector'
// // import styled from 'styled-components'
// // import RoleDice from './RoleDice'

// // const GamePlay = () => {
// //     const [selectedNumber, setSelectedNumber] = useState(null); // Initialize with null or an appropriate default value

// //   return (
// //     <MainContainer>
// //       <div className='top_section'>
// //         <TotalScore/>
// //         <NoSelector   
// //         selectedNumber={selectedNumber}
// //         setSelectedNumber={setSelectedNumber}/>
// //       </div>
// //       <RoleDice/>
// //     </MainContainer>
// //   )
// // }

// // export default GamePlay

// // const MainContainer = styled.main`
// //   .top_section {
// //     display: flex;
// //     justify-content: space-around;
// //     align-items: end;
// //     padding-top: 40px;
// //   }
// // `


// import React, { useState } from 'react';
// import TotalScore from './TotalScore';
// import NoSelector from '../NoSelector';
// import styled from 'styled-components';
// import RoleDice from './RoleDice';

// const GamePlay = () => {
//     const [score,setScore] = useState();
//   const [selectedNumber, setSelectedNumber] = useState(null);
//   const [currentDice , setCurrentDice] = useState(1);
//   // Initialize with null or an appropriate default value


//   const generate = (min,max) => {
//     console.log( Math.floor(Math.random()* (max-min)+min));
//     return Math.floor(Math.random()* (max-min)+min);
// }

// const roleDice = () =>{
//     const randomnumber = generate(1,7);

//     setCurrentDice((prev) => randomnumber);
// }

// if(selectedNumber===randomnumber){
//     setScore((prev) => randomnumber);
// } else {
//     setScore((prev)=> prev-2);
// }
// };

//   return (
//     <MainContainer>
//       <div className='top_section'>
//         <TotalScore />
//         <NoSelector
//           selectedNumber={selectedNumber}
//           setSelectedNumber={setSelectedNumber}
//         />
//       </div>
//       <RoleDice currentDice={currentDice}

//       roleDice={roleDice}/>
//     </MainContainer>
//   );
// };

// export default GamePlay;

// const MainContainer = styled.main`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;

//   .top_section {
//     display: flex;
//     justify-content: space-around;
//     align-items: center;
//     width: 100%;
//     padding-top: 40px;
//     padding-bottom: 20px;
//   }
// `;

import React, { useState } from 'react';
import TotalScore from './TotalScore';
import NoSelector from '../NoSelector';
import styled from 'styled-components';
import RoleDice from './RoleDice';
import { Button } from '../Styled/Button';
import Rules from './Rules';

const GamePlay = () => {
  const [selectedNumber, setSelectedNumber] = useState(null);
  const [currentDice, setCurrentDice] = useState(1);
  const [score, setScore] = useState(0);
  const [showRules, setShowRules] = useState(false);

  const generate = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const roleDice = () => {
    const randomNumber = generate(1, 7);
    setCurrentDice(randomNumber);
    if (!selectedNumber) return;
    if (selectedNumber === randomNumber) {
      setScore(prev => prev + randomNumber);
    } else {
      setScore(prev => prev - 2);
    }
    setSelectedNumber(null); // Reset selectedNumber to null after rolling dice
  };

  const resetScore = () => {
    setScore(0);
  };

  return (
    <MainContainer>
      <div className='top_section'>
        <TotalScore score={score} />
        <NoSelector
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>
      <RoleDice currentDice={currentDice} roleDice={roleDice} />
      <div className='Btn'>
        <Button onClick={resetScore}>Reset</Button>
        <Button onClick={() => setShowRules(prev => !prev)}>
          {showRules ? "Hide" : "Show"} Rules
        </Button>
      </div>
      {showRules && <Rules />}
    </MainContainer>
  );
};

export default GamePlay;

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .top_section {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    padding-top: 40px;
    padding-bottom: 20px;
  }

  .Btn {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
`;
