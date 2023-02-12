import React from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const onClickButton = () => {
  alert();
};

const App = () => {
    return(
  <>
  <h1 style={{ color: `red`}}>Hello World !</h1>
      <ColorfulMessage color = "blue">
        お元気ですか？
      </ColorfulMessage>
      <ColorfulMessage color = "pink">
      元気です
      </ColorfulMessage>
  <button onClick={onClickButton}>button</button>
  </>
    );
};

export default App;