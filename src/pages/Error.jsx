import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Home from "./Home";

const Error = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/");
  }, []);
  return (
    <>
      <div>Error</div>
    </>
  );
};

export default Error;
