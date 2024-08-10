import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [count, setCount] = useState(10);

  function addFunction() {
    if (count < 20) {
      setCount(count + 1);
    } else {
      alert("You can't increase it anymore!");
    }
  } 
  
  function subtractFunction() {
    if (count > 0) {
      setCount(count - 1);
    } else {
      alert("You can't decrease it anymore!");
    }
  }

  return (
    <>
      <div id="container">
        <button id="addButton" onClick={addFunction} disabled={count > 20}>Increment</button>
        <button id="subtractButton" onClick={subtractFunction} disabled={count < 0}>Decrement</button> <br />
        <h4>Count {count}</h4>
      </div>
    </>
  );
}

export default App;
