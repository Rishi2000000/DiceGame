
// import styled from "styled-components";
// import StartGame from "./Component/StartGame";
// import { useState } from "react";



// function App() {
  
//   const [isGamesStarted,setIsGameStarted] = useState(flase);
//    const toggleGamePlay = ()=>{
//     setIsGameStarted((prev) => !prev);
//    }

//   return (
// <> 
// <StartGame/>
// </>    
//   )
// }

// export default App

import React, { useState } from "react";
import styled from "styled-components";
import StartGame from "./Component/StartGame";
import GamePlay from "./Component/GamePlay";

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false); // Corrected typo in 'false'

  const toggleGamePlay = () => {
    setIsGameStarted((prev) => !prev);
  };

  return (
    <>
     {
      isGameStarted ? <GamePlay/> : <StartGame toggle = {toggleGamePlay}  />
     }
      
      
    </>
  );
}

export default App;

