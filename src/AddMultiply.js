import React, { useState } from "react";

const AddMultiply = () => {
  const [multiply, setHandler] = useState({ number: 1 });

  return (
    <div>
      <h1>Counter Score: {multiply.number}</h1>
      <hr></hr>
      <button
        onClick={() => {
          setHandler({ number: multiply.number * 2 });
        }}
      >
        multiply
      </button>
      <button
        onClick={() => {
          setHandler({ number: multiply.number + 1 });
        }}
      >
        Increase
      </button>
    </div>
  );
};

export default AddMultiply;
