import React, { useState } from "react";

const FunctionScore = () => {
  const [score, handleScore] = useState(0);
  return (
    <div>
      <h1>Scores: {score}</h1>
      <button onClick={() => handleScore(score + 1 + 2)}> Score </button>
    </div>
  );
};
export default FunctionScore;
