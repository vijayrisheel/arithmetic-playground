import { useState } from 'react'
import './App.css'

function App() {
  const [input, setInput] = useState(0);
  const [formula, setFormula] = useState([]);
  const [result, setResult] = useState(0);

  function calculateAndSetResult() {
    let inputVal = input;
    formula.forEach(function(operation) {
      switch (operation) {
        case 'Double' :
          inputVal *= 2;
          break;
        case 'Halve' :
          inputVal /= 2;
          break;
        case 'Increment' :
          inputVal++;
          break;
        case 'Decrement' :
          inputVal--;
          break;
        default:
          break;
      }
    });

    setResult(inputVal);
  }

  function resetAllStates() {
    setInput(0);
    setFormula([]);
    setResult(0);
  }

  return (
    <>
      <span>
        <button onClick={() => setFormula(function(state) {return [...state, 'Double']})}>Double</button>
        <button onClick={() => setFormula((state) => [...state, 'Halve'])}>Halve</button> {/*No curly brases for return*/}
        <button onClick={() => setFormula((state) => [...state, 'Increment'])}>++</button>
        <button onClick={() => setFormula((state) => [...state, 'Decrement'])}>--</button>
      </span> 
      <div>
        current formula: <br />
        {formula.map(function(operation, index) {return <li key={index}>{operation}</li>})}
      </div>
      <input value={input} onChange={(event) => {setInput(event.target.value)}}></input>
      <button onClick={calculateAndSetResult}>Calculate</button>
      <button onClick={resetAllStates}>Reset</button>
      <div>{input + "->" + result }</div>
    </>
  )
}

export default App
