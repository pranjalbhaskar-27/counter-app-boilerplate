import "./App.css";
import { useState, useEffect } from "react";

function App() {
  
  const [count,setCount]=useState(0)
  useEffect=()=>{
    console.log(count)
  }

  const add1=()=>{
    setCount(count+1)
    document.getElementById('kuchhbhi').disabled=false;
  }
  const sub1=()=>{
      if(count>0){
        setCount(count-1)
      }
      else{
        document.getElementById('kuchhbhi').disabled=true;
      }
  }
  
  
  return (
    <div className="App">
      <h2 data-testid="counter-value">{count}</h2>
      <button data-testid="counter-decrement-button" id='kuchhbhi' onClick={sub1}>Sub 1</button>
      <button data-testid="counter-increment-button" onClick={add1}>Add 1</button>
    </div>
  );
}

export default App;
