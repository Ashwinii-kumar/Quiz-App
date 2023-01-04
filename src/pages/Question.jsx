import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ErrorMessage from "../ErrorMessage";
const Question = ({
  currQuestion,
  setCurrQuestion,
  questions,
  options,
  correct,
  score,
  setScore,
  setQuestions,
}) => {
  const [error, setError] = useState(false);
  const [selected, setSelected] = useState();
  const navigate = useNavigate();
  const handleSelect = (item) => {
    if (selected === item && selected === correct) return "select";
    else if (selected === item && selected !== correct) return "wrong";
    else if (item === correct) return "select";
  };

  const handleCheck = (item) => {
    setSelected(item);
    if (item === correct) setScore(score + 1);
    setError(false);
  };

  const handleNext = (e) => {
    if (currQuestion > 8) {
      navigate("/final");
    } else if (selected) {
      setCurrQuestion(currQuestion + 1);
      setSelected();
    } else {
      setError("Please select an option first");
    }
  };

  const handleQuit = () => {
    setCurrQuestion(0);
    setQuestions([]);
    setScore(0);

    navigate("/");
  };

  return (
    <div className="question-box">
      <p className="question-no">Question {currQuestion + 1} </p>

      <div className="question">
        <h3
          dangerouslySetInnerHTML={{ __html: questions[currQuestion].question }}
        ></h3>
          {error && <ErrorMessage error={error}>{error}</ErrorMessage>}
        <div className="options">
        
          {options &&
            options.map((item) => (
              <button
                className={`single_option ${selected && handleSelect(item)}`}
                key={item}
                onClick={() => handleCheck(item)}
                disabled={selected}
              >
                {item}
              </button>
            ))}
        </div>
        <div className="controls">
          <button className="but1" onClick={handleQuit}>Quit</button>
          <button  className="but2"
          onClick={handleNext}>
            {currQuestion > 8 ? "Submit" : "Next Question"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Question;
