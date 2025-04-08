import React, { useState, useCallback } from 'react';

const Child = React.memo(({ onClick }) => {
  console.log('🔄 Child rendered');
  return <button onClick={onClick}>Click Me</button>;
});

function MemoCallbackExample() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    alert('Button clicked!');
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">🔁 React.memo & useCallback</h2>
      <p>Counter: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <Child onClick={handleClick} />
    </div>
  );
}

export default MemoCallbackExample;
