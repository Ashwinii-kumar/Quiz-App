import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Categories, { levels } from "../Categories";
import { toast } from "react-toastify";
import ErrorMessage from "../ErrorMessage";


const Home = ({ name, setName, getData }) => {
  const [value, setValue] = useState("default");
  const [valuee, setValuee] = useState("default");

  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [error, setError] = useState(false);
  const [a, setA] = useState("");
  const navigate = useNavigate();
  const nameHandler = (e) => {
    setA(e.target.value);
    setName(e.target.value);
  };

  const categoryHandler = (e) => {
    setCategory(e.target.value);
    setValue(e.target.value);
  };

  const difficultyHandler = (e) => {
    setDifficulty(e.target.value);
    setValuee(e.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (!category || !difficulty || !a) {
      setError(true);

      return;
    } else {
      setError(false);
      setA("");
      setValue("default");
      setValuee("default");
      getData(category, difficulty);
      navigate(`/quiz/${name}`);
    }
  };
  return (
    <>
      <h1 className="quiz-title"> Quiz Settings</h1>

      <div className="settings">
        <div className="quiz-form">
          <form onSubmit={formSubmitHandler}>
            {error && (
              <ErrorMessage error={error}>
                Please Fill all the fields
              </ErrorMessage>
            )}

            <input
              type="text"
              name="name"
              placeholder="Enter Name"
              value={a}
              onChange={nameHandler}
            />

            <select defaultValue={value} onChange={categoryHandler}>
              <option value="default" disabled hidden>
                Select Category
              </option>
              {Categories.map((option, i) => {
                return (
                  <option key={i} value={option.value}>
                    {option.category}
                  </option>
                );
              })}
            </select>

            <select defaultValue={valuee} onChange={difficultyHandler}>
              <option value="default" disabled hidden>
                Select difficulty
              </option>
              {levels.map((option, i) => {
                return (
                  <option value={option.category} key={i}>
                    {option.category}
                  </option>
                );
              })}
            </select>

            <button>Start Quiz</button>
          </form>
        </div>
        <img className="image" src="src/pages/img.jpg" alt="...."/>

        {/* <Link to="/">Home</Link> */}
      </div>
    </>
  );
};

export default Home;
