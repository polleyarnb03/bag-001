import React, { useState } from 'react';

const Child = ({ onClick }) => {
  console.log('❌ Child re-rendered');
  return <button onClick={onClick}>Click Me</button>;
};

function WithoutMemo() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">❌ Without React.memo</h2>
      <p>Counter: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <Child onClick={handleClick} />
    </div>
  );
}

export default WithoutMemo;
