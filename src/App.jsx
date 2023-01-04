import React from "react";
import { useState } from "react";

import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import Error from "./pages/Error";
import Header from "./Header";
import Footer from "./Footer";
function App() {
  const [questions, setQuestions] = useState([]);
  const [name, setName] = useState("");
  const [score, setScore] = useState(0);

  const getData = async (cat = "", diff = "") => {
    let response = await fetch(
      `https://opentdb.com/api.php?amount=10&category=${cat}&difficulty=${diff}&type=multiple`
    );
    let data = await response.json();

    setQuestions(data.results);
  };

  return (
    <>
      <BrowserRouter>
        <div className="app">
          <Header />

          <Routes>
            <Route
              path="/"
              index
              element={<Home name={name} setName={setName} getData={getData} />}
            />
            <Route path="/about" element={<About />} />
            <Route
              path="/quiz/:name"
              element={
                <Quiz
                  name={name}
                  questions={questions}
                  setQuestions={setQuestions}
                  score={score}
                  setScore={setScore}
                />
              }
            />

            <Route
              path="/final"
              element={
                <Result
                  name={name}
                  setName={setName}
                  score={score}
                  setScore={setScore}
                  questions={questions}
                />
              }
            />
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

// const cat=(parseInt(info.category));

// const diff=info.difficulty;
