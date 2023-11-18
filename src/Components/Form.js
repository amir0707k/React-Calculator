import React,{useEffect, useState} from "react";
import { GrAdd } from "react-icons/gr";
import { FaMinus } from "react-icons/fa6";
import { FaAsterisk } from "react-icons/fa";
import { RxSlash } from "react-icons/rx";

const Form = ({ handleCalculation }) => {

  
  const [errorMessage, setErrorMessage] = useState("");
  const [success, setSuccess] = useState("");
  const [result, setResult] = useState("");

  function handleSubmit(e){
    e.preventDefault();
     if (!num1 || !num2 || isNaN(parseFloat(num1)) || isNaN(parseFloat(num2))) {
       setErrorMessage("Invalid inputs! Please enter valid numbers.");
       setSuccess(false);
     } else {
       setErrorMessage(""); // Clear any previous error message
       handleCalculation.handleCalculation(num1, num2, operation);
     }
    
  }
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operation, setOperation] = useState("");

    const handleNumberChange = (e, num) => {
      num === 1 ? setNum1(e.target.value) : setNum2(e.target.value);
    };


    useEffect(() => {
      console.log("handleCalculation.status: ", handleCalculation.status);
      if (handleCalculation.status) {
        setSuccess(true);
        setErrorMessage(""); // Clear any previous error message
      } else {
        setSuccess(false);
      }
    }, [handleCalculation.status]);
    
    const handleClick = (selectedOperation) => {
      setOperation(selectedOperation);
      handleCalculation.handleCalculation(num1, num2, operation);
      setResult(handleCalculation.result);
    };
 
  return (
    <div className="h-screen w-full flex p-10 items-center justify-center">
      {/* <div className="shadow-2xl flex items-center "> */}
      <form
        className="shadow-2xl h-fit p-14 flex flex-col items-center justify-center relative border rounded-2xl shadow-custom
        "
        onSubmit={handleSubmit}
      >
        <h1 className="text-3xl mb-2 font-bold cursor-pointer">
          React Calculator
        </h1>
        <input
          placeholder="Num 1"
          className="m-4 outline outline-1 p-2 pl-4 placeholder:text-xl placeholder:font-bold placeholder:text-black"
          value={num1}
          onChange={(e) => handleNumberChange(e, 1)}
        ></input>
        <input
          placeholder="Num 2"
          className="m-4 outline outline-1 p-2 pl-4 placeholder:text-xl placeholder:font-bold placeholder:text-black"
          value={num2}
          onChange={(e) => handleNumberChange(e, 2)}
        ></input>
        <div className="flex mt-2">
          <button
            className="p-3 text-white bg-gray-900 m-2 cursor-pointer"
            onClick={() => handleClick("Addition")}
          >
            <GrAdd />
          </button>
          <button
            className="p-3 text-white bg-gray-900 m-2 cursor-pointer"
            onClick={() => handleClick("Subtraction")}
          >
            <FaMinus />
          </button>
          <button
            className="p-3 text-white bg-gray-900 m-2 cursor-pointer"
            onClick={() => handleClick("Multiplication")}
          >
            <FaAsterisk />
          </button>
          <button
            className="p-3 text-white bg-gray-900 m-2  cursor-pointer"
            onClick={() => handleClick("Division")}
          >
            <RxSlash />
          </button>
        </div>
        {result && !errorMessage && (
          <p className="text-md font-bold text-green-700">{result}</p>
        )}
        {errorMessage && (
          <p className="text-md font-bold text-red-700">{errorMessage}</p>
        )}
        {success && !errorMessage && (
          <p className="text-md font-bold text-green-700">Success</p>
        )}
      </form>
      {/* </div> */}
    </div>
  );
};

export default Form;