import { useEffect, useState } from "react";

const ErrorMessage = ({ children, error }) => {
  const [flag, setFlag] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setFlag(false);
    }, 1000);
  }, [error]);

  // const handleClick=()=>{
  //    setFlag(false);
  // }

  if (!flag) return null;
  return (
    <div id="abc">
      {children}
      {/* <button onClick={handleClick}>X</button> */}
    </div>
  );
};

export default ErrorMessage;
