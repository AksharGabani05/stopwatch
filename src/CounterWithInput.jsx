import React, { useState, useEffect } from 'react';

function Counter() {
 
  const [count, setCount] = useState(0);
  const [Number, setNumber] = useState(1);

  
  useEffect(() => {
    setCount(0); 
  }, [Number]);

  
  const Add = () => {
    setCount(count + Number);
  };
  
  
  const Remove = () => {
    setCount(count - Number);
  };

  
  const buttonStyle = {
    backgroundColor: count > 50 ? 'black' : 'red',
  };

  return (
    <div>
      <p>Count: {count}</p>
      <input
        type="number"
        value={Number}
        onChange={(e) => setNumber(parseInt(e.target.value, 10))}
      />
      <button onClick={Add} style={buttonStyle}>Add</button>
      <button onClick={Remove} style={buttonStyle}>Remove</button>
    </div>
  );
}

export default Counter;
