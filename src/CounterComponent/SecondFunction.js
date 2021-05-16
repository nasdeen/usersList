import React, { useState } from "react";

const SecondFunction = () => {
  const [add, handler] = useState({ number: 0 });

  return (
    <div>
      <div style={{ background: "grey" }}>
        <h1>Counter:{add.number}</h1>
      </div>
      <button onClick={() => handler({ number: add.number + 1 })}>
        Increase
      </button>
      <button onClick={() => handler({ number: add.number - 1 })}>
        Decrease
      </button>
    </div>
  );
};

export default SecondFunction;
