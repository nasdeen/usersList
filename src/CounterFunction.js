import React, { useState } from "react";

const CounterFunction = () => {
  let answer = Number(0);
  //const [count, handler] = useState(answer);
  const [count, handler] = useState({ number: 0 });

  return (
    <div>
      {/* <h1>Counter Function: {count}</h1> */}
      <h1>Counter Function: {count.number}</h1>
      <hr></hr>
      {/* <button onClick={() => handler(count + 1)}>
        Count Increase
      </button> */}
      <button onClick={() => handler({ number: count.number + 1 })}>
        Count Increase
      </button>
      {/* <button onClick={() => handler(count - 1)}>Count -</button> */}
      <button onClick={() => handler({ number: count.number - 1 })}>
        Count -
      </button>

      <hr></hr>
    </div>
  );
};

export default CounterFunction;
