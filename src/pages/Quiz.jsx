import React, { useEffect } from "react";
import { useState } from "react";
import Spinner from "../assets/Spinner";
import Categories, { levels } from "../Categories";
import { Link } from "react-router-dom";
import Home from "./Home";
import Question from "./Question";
const Quiz = ({ name, questions, setQuestions, score, setScore }) => {
  const [options, setOptions] = useState();
  const [currQuestion, setCurrQuestion] = useState(0);

  useEffect(() => {
    setOptions(
      questions &&
        handleShuffle([
          ...(questions[currQuestion]?.incorrect_answers ?? []),
          questions[currQuestion]?.correct_answer ?? [],
        ])
    );
  }, [currQuestion, questions]);

  const handleShuffle = (options) => {
    if (options.length > 0) {
      return options.sort(() => Math.random() - 0.5);
    }
    return;
  };
  // console.log(options);
  if (name) {
    return (
      <div className="quiz-box">
        <p className="username">Welcome {name}</p>
        {questions.length > 0 ? (
          <>
            <div className="box">
              <p>{questions[currQuestion].category}</p>
              <p>
                Score : <span>{score}</span>
              </p>
            </div>

            <Question
              currQuestion={currQuestion}
              setCurrQuestion={setCurrQuestion}
              questions={questions}
              options={options}
              correct={questions[currQuestion]?.correct_answer ?? " "}
              score={score}
              setScore={setScore}
              setQuestions={setQuestions}
            />
          </>
        ) : (
          <Spinner />
        )}
      </div>
    );
  } else {
    return (
      <>
        <h1>Error occurred </h1>
        <Link to="/" element={<Home />}>
          Go Home
        </Link>
      </>
    );
  }
};

export default Quiz;
