import { useState } from 'react';
import { evaluate } from 'mathjs';
import './App.css';

const App = () => {

  const buttons = ["7", "8", "9", "c", "4", "5", "6", "*", "1", "2", "3", "/", "+", "0", "-", "="];

  const [display, setDisplay] = useState('');

  const handler = (button) => {
    console.log(button);
    
    if(button === "=") {
      setDisplay(evaluate(display));
      console.log(display)
    } else if(button === "c") {
      setDisplay('');
    } else {
      setDisplay(display + button);
    }
  }

  return (
    <div>
      <h1>React Calc</h1>
      <h2>{display}</h2>
      {buttons.map((button, index) => {
        // pass the value of the clicked button to the handler function 
        return <Button key={index} button={button} handler={handler} />
      })}
    </div>

  )
}


const Button = ({ button, handler }) => {
  return (
    <button onClick={() => handler(button)}>{button}</button>
  )
}

export default App;
 