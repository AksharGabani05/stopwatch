import React, { useState, useEffect } from 'react';

function CounterWithInput() {
  // Initialize state variables for the count and user-defined number
  const [count, setCount] = useState(0);
  const [userNumber, setUserNumber] = useState(1);

  // Use useEffect to update the count whenever the userNumber changes
  useEffect(() => {
    setCount(0); // Reset the count when userNumber changes
  }, [userNumber]);

  // Function to increment the count
  const increment = () => {
    setCount(count + userNumber);
  };
  const dicriment = () => {
    setCount(count - userNumber);
  };

  return (
    <div>
      <h1>Counter with User-Defined Number</h1>
      <p>Count: {count}</p>
      <input
        type="number"
        value={userNumber}
        onChange={(e) => setUserNumber(parseInt(e.target.value, 10))}
      />
      <button onClick={increment}>Increment</button>
      <button onClick={dicriment}>dicriment</button>
    </div>
  );
}

export default CounterWithInput;
