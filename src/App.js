import React, { useState } from 'react';
import './App.css';

function App() {
  function ButtonEscape(){
    const [position,setPosition]=useState("left");
        return (
            <div className="buttonPad" >
                <button className ="btn btn-secondary" style={{float:`${position}`,marginBottom:"10px"}} 
                onMouseOver={jump}>Click Me</button>
            </div>
        );
        function jump(){
            if(position=="left")setPosition("right");
            else setPosition("left");
        }
  }
  return (
    <div className="App">
      <header className="App-header">
        <div className="buttonPad">
          <ButtonEscape/>
        </div>
      </header>
    </div>
  );
}

export default App;
