import { useState, useEffect } from "react";

import React from "react";

function HomePage() {
  const [question, setQuestion] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch("https://jservice.io/api/random");
      const data = await response.json();
      setQuestion(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); //if effect doesn't need props or state

  const [hide, setHide] = useState(true);
  const [score, setScore] = useState(0);

  const increaseScore = (data) => {
    setScore(score + parseInt(data));
  };
  const decreaseScore = (data) => {
    setScore((score = parseInt(data)));
  };
  const toggleQuestion = (data) => {
    setHide(data);
  };
  const resetScore = () => {
    setScore(0);
  };

  return (
    <>
    {question.map((item, idx)=>{
        return (
            <>
              <div>
                <h1>Welcome to Jeopardy</h1>
                <h2>Score:
                    <span style={score >= 0 ? { color: "white" } : { color: "red"}}> {score} </span>
                </h2>
                <div className="btnContainer">
                  <button className="decreaseBtn"  onClick={() => { decreaseScore(item.value) }}>Decrease</button>
                  <button className="increaseBtn"  onClick={() => { increaseScore(item.value) }}>Increase</button>
                  <button className="resetBtn"     onClick={() => { resetScore(item.value)      }}>Reset</button>
                </div>
                <h2>Let's Play!</h2>
                <button>Get Question</button>
                <h2>Category:</h2>
                <h2>Points:</h2>
                <h2>Answer:</h2>
                <button>Click to Reveal Question</button>
              </div>
            </>

        )
    })}
    </>
  );
}

export default HomePage;
