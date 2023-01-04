import React from "react";
import { Link } from "react-router-dom";
import Home from "./Home";

const Result = ({ name, setName, score, setScore,questions }) => {
  const clickHandler = () => {
    setName("");
    setScore(0);
    return;
  };
  if(name)
  {
    return (
      <div className="result">
        <div className="final">
        <h1>Hii {name}</h1>
        <h2> Final Score : {score}/{questions.length}</h2>
        <button onClick={clickHandler}>
          <Link to="/" element={<Home />}>
          Go Home
          </Link>
        </button>
        </div>
        
      </div>
    );
  }
  else{
    return(
      <div className="final">
         <Link to="/" element={<Home />}>
      Go Home
      </Link>
      </div>
    
    )
  }

};

export default Result;
