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
    setScore((score - parseInt(data)));
  };
  const revealQuestion = (data) => {
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
                  <button className="resetBtn"     onClick={() => { resetScore()      }}>Reset</button>
                </div>
                <h2>Let's Play!</h2>
                <button className="questionBtn"    onClick={() => { return fetchData(), setHide(true)}}>Get Question</button>
                <h2>Category: { }
                    <span>{item.category.title}</span>
                </h2>
                <h2 className="point">Points: { }
                    <span>{item.value}</span>
                </h2>
                <h2 className="answer">Answer: { } 
                <span>{item.question}</span>
                </h2>
                <button className="revealBtn" onClick={()=> { setHide(!hide )}}>Click to Reveal Question</button>
                {!hide ? 
                    <h3>Answer: { }
                        <span>{item.answer}</span> 
                    </h3>
                    :
                    " "
                }
              </div>
            </>

        )
    })}
    </>
  );
}

export default HomePage;
