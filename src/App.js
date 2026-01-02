import { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState("");
  const [storedValue, setStoredValue] = useState(null);
  const [operator, setOperator] = useState(null);

  const handleNumber = (num) => {
    setValue(value + num);
  };


  const handleOperator = (op) => {
    setStoredValue(Number(value));
    setOperator(op);
    setValue("");
  };

  const calculate = () => {
    if (storedValue === null || operator === null || value === "") return;

    const currentNumber = Number(value);
    let result = 0;

    if (operator === "+") {
      result = storedValue + currentNumber;
    }

    if (operator === "-") {
      result = storedValue - currentNumber;
    }

    if (operator === "*") {
      result = storedValue * currentNumber;
    }

    if (operator === "/") {
      if (currentNumber === 0) return;
      result = storedValue / currentNumber;
    }

    setValue(result.toString());
    setStoredValue(null);
    setOperator(null);
  };

  const clear = () => {
    setValue("");
    setStoredValue(null);
    setOperator(null);
  };

  return (
    <div className="calculator">
      <h2>Calculator</h2>

      <input type="text" value={value} readOnly />

      <div className="buttons">
        <button onClick={() => handleNumber("1")}>1</button>
        <button onClick={() => handleNumber("2")}>2</button>
        <button onClick={() => handleNumber("3")}>3</button>
        <button onClick={() => handleOperator("+")}>+</button>

        <button onClick={() => handleNumber("4")}>4</button>
        <button onClick={() => handleNumber("5")}>5</button>
        <button onClick={() => handleNumber("6")}>6</button>
        <button onClick={() => handleOperator("-")}>-</button>

        <button onClick={() => handleNumber("7")}>7</button>
        <button onClick={() => handleNumber("8")}>8</button>
        <button onClick={() => handleNumber("9")}>9</button>
        <button onClick={() => handleOperator("*")}>×</button>

        <button onClick={() => handleNumber("0")}>0</button>
        <button onClick={calculate}>=</button>
        <button onClick={clear}>C</button>
        <button onClick={() => handleOperator("/")}>÷</button>
      </div>
    </div>
  );
}

export default App;
