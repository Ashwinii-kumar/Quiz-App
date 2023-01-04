import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Home from "./Home";

const Error = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(()=>{
    navigate("/");
     
    },350);
  }, []);
  return (
    <>
      <div className="errorrr">Error Occurred!!!!!</div>
    </>
  );
};

export default Error;
