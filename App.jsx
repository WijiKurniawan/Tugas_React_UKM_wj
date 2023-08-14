import React, { useState } from 'react';
import './App.css'; // Pastikan Anda mengganti 'App.css' dengan path yang sesuai

function SimpleCalculator() {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [result, setResult] = useState('');
  const [animate, setAnimate] = useState(false);

  const handleNumber1Change = (event) => {
    setNumber1(event.target.value);
  };

  const handleNumber2Change = (event) => {
    setNumber2(event.target.value);
  };

  const handleAdd = () => {
    calculateResult();
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      calculateResult();
    }
  };

  const calculateResult = () => {
    const sum = parseFloat(number1) + parseFloat(number2);
    setResult(sum);
    setAnimate(true);
    setTimeout(() => {
      setAnimate(false);
    }, 1000);
  };

  return (
    <div className="calculator-container">
      <h2>Simple Calculator</h2>
      <div className="input-container">
        <label>
          Number 1:
          <input type="number" value={number1} onChange={handleNumber1Change} />
        </label>
      </div>
      <div className="input-container">
        <label>
          Number 2:
          <input
            type="number"
            value={number2}
            onChange={handleNumber2Change}
            onKeyPress={handleKeyPress}
          />
        </label>
      </div>
      <button onClick={handleAdd}>Add</button>
      <div className={`result-container ${animate ? 'animate' : ''}`}>
        <strong>Result: {result}</strong>
      </div>
    </div>
  );
}

export default SimpleCalculator;
