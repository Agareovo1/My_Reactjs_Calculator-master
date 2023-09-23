import React, { useState } from 'react';
import './App.css';

const Calculator = () => {
  const [result, setResult] = useState('');

  const handleButtonClick = (e) => {
    setResult(result.concat(e.target.name));
  };

  const clearResult = () => {
    setResult('');
  };

  const removeLastCharacter = () => {
    setResult(result.slice(0, -1));
  };

  const performCalculation = () => {
    try {
      const sanitizedInput = result.replace(/[^-()\d/*+.]/g, '');
      // eslint-disable-next-line no-eval
      const calculatedResult = eval(sanitizedInput);

      setResult(calculatedResult.toString());
    } catch (err) {
      setResult('Error');
    }
  };

  return (
    <>
      <div className="calculator-container">
        <form>
          <input type="text" value={result} />
        </form>
        <div className="calculator-keypad">
          <button className="calculator-highlight" onClick={clearResult} id="clearButton">
            Clear
          </button>
          <button className="calculator-highlight" onClick={removeLastCharacter} id="backspaceButton">
            C
          </button>
          <button className="calculator-highlight" name="/" onClick={handleButtonClick}>
            &divide;
          </button>
          <button name="7" onClick={handleButtonClick}>
            7
          </button>
          <button name="8" onClick={handleButtonClick}>
            8
          </button>
          <button name="9" onClick={handleButtonClick}>
            9
          </button>
          <button className="calculator-highlight" name="*" onClick={handleButtonClick}>
            &times;
          </button>
          <button name="4" onClick={handleButtonClick}>
            4
          </button>
          <button name="5" onClick={handleButtonClick}>
            5
          </button>
          <button name="6" onClick={handleButtonClick}>
            6
          </button>
          <button className="calculator-highlight" name="-" onClick={handleButtonClick}>
            &ndash;
          </button>
          <button name="1" onClick={handleButtonClick}>
            1
          </button>
          <button name="2" onClick={handleButtonClick}>
            2
          </button>
          <button name="3" onClick={handleButtonClick}>
            3
          </button>
          <button className="calculator-highlight" name="+" onClick={handleButtonClick}>
            +
          </button>
          <button name="0" onClick={handleButtonClick}>
            0
          </button>
          <button name="." onClick={handleButtonClick}>
            .
          </button>
          <button className="calculator-highlight" onClick={performCalculation} id="resultButton">
            =
          </button>
        </div>
      </div>
    </>
  );
};

export default Calculator;
