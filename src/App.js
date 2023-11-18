import Form from "./Components/Form";
import { useState } from "react";

function App() {
  const [result, setResult] = useState(0);
  const [status, setStatus] = useState(null);

  const handleCalculation = (num1, num2, operation) => {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    if(operation === "Addition"){
       setResult(num1 + num2);
       setStatus(true);
    }else if(operation === "Subtraction"){
      setResult(num2 - num1);
      setStatus(true);
    }else if(operation === "Multiplication"){
      setResult(num1 * num2);
      setStatus(true);
    }else if (operation === "Division"){
      setResult(num1 / num2);
      setStatus(true);
    }
  };
  console.log(result);

  return (
    <div>
      <Form handleCalculation={{ handleCalculation, status, result }} />
    </div>
  );

}

export default App;
