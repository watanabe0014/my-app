import React, { useEffect, useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  const [num, setNum] = useState(0);
  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const [faceShowFlag, setFaceShowFlag] = useState(false);

  const onClickShow = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  useEffect(() =>{
    if(num > 0){
      if(num % 3 === 0) {
        faceShowFlag || setFaceShowFlag(true);
      }else{
        faceShowFlag && setFaceShowFlag(false);
      }};
  },[num]
  );

    return(
  <>
  <h1 style={{ color: `red`}}>Hello World !</h1>
      <ColorfulMessage color = "blue">
        お元気ですか？
      </ColorfulMessage>
      <ColorfulMessage color = "pink">
      元気です
      </ColorfulMessage>
  <button onClick={onClickCountUp}>count up</button>
  <button onClick={onClickShow}>on/off</button>
  <p>{ num }</p>
  {faceShowFlag &&   <p>
(´･ω･`)･ω･`)　ｷｬｰ<br/>
/　　つ⊂　　＼　　ｺﾜｰｲ
</p>}

  </>
    );
};

export default App;