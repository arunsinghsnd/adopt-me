import React, { useState, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `${count}  times this is clicked `;
  }, [count]);

  return (
    <>
      <p>The Counter Incrementing by {count}</p>
      <button onClick={() => setCount(count + 1)}> Click Me!</button>
    </>
  );
};

export default Counter;
