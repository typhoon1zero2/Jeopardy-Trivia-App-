import { useState, useEffect } from "react";


import React from "react";

function HomePage() {
  return (
    <>
      <div>
        <h1>Jeopardy Trivia App</h1>
        <h2>Score</h2>
        <div>
          <button>Increase</button>
          <button>Decrease</button>
          <button>Reset</button>
        </div>
        <h2>Let's Play!</h2>
        <button>Get Question</button>
        <h2>Category:</h2>
        <h2>Points:</h2>
        <h2>Answer:</h2>
        <button>Click to Reveal Question</button>
      </div>
    </>
  );
}

export default HomePage;
