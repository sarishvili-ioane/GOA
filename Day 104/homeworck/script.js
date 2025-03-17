import React, { useState } from 'react';

function Counter() {
  // useState-ის გამოყენებით ვქმნით `count` მდგომარეობას და მის ფუნქციას `setCount`
  const [count, setCount] = useState(0);

  // ფუნქცია მნიშვნელობის გაზრდისთვის
  const increment = () => {
    setCount(count + 1);
  };

  // ფუნქცია მნიშვნელობის შემცირებისთვის
  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Counter: {count}</h1>
      <button onClick={increment} style={{ margin: '5px', padding: '10px 20px' }}>+</button>
      <button onClick={decrement} style={{ margin: '5px', padding: '10px 20px' }}>-</button>
    </div>
  );
}

export default Counter;
