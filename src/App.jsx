import React, { useState } from "react";
import StartGame from "./Component/StartGame";
import GamePlay from "./Component/GamePlay";
import SuprSendInbox from "@suprsend/react-inbox";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);

  const toggleGamePlay = () => {
    setIsGameStarted((prev) => !prev);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          paddingRight: "1rem",
        }}
      >
        <SuprSendInbox
          workspaceKey="iouKDoDLrfiieRpuzUeW"
          subscriberId="7f250bb3-7e49-46fb-b7c6-1e13991c1388"
          distinctId="rishi-test"
        />
      </div>
      {isGameStarted ? <GamePlay /> : <StartGame toggle={toggleGamePlay} />}
    </>
  );
}

export default App;
