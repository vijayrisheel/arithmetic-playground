import { useState } from "react";
import "./App.css";

const functions = {
  half: (input) => input / 2,
  double: (input) => input * 2,
  increment: (input) => input + 1,
  decrement: (input) => input - 1,
  square: (input) => input * input,
  root: (input) => Math.sqrt(input),
};

function EfficientApp() {
  const [myFunction, setMyFunction] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [resultValue, setResultValue] = useState(0);

  const addFunction = (funcName) => () => {
    setMyFunction((prev) => [...prev, funcName]);
  };

  const reset = () => {
    setResultValue(0);
    setInputValue("");
    setMyFunction([]);
  };

  const calculateMyFunction = () => {
    setResultValue(
      myFunction.reduce((result, f) => {
        return functions[f](result);
      }, Number(inputValue))
    );
  };

  return (
    <>
      <div>
        {Object.keys(functions).map((f) => (
          <button key={f}  onClick={addFunction(f)}>
            {f}
          </button>
        ))}
      </div>
      <p>My Function:</p>
      <div>
        {myFunction.map((f) => (
          <div key={f}>{f}</div>
        ))}
      </div>
      <br />
      <br />
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={calculateMyFunction}>Calculate</button>
      <button onClick={reset}>Reset</button>
      <br />
      <br />
      <br />
      <div>
        <span>{inputValue || "?"}</span>
        <span>{"->myFunction->"}</span>
        <span>{resultValue || "?"}</span>
      </div>
    </>
  );
}

export default EfficientApp;