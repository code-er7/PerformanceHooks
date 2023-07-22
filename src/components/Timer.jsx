import React, { useEffect, useState } from "react";
import Children from "./Children";

const Timer = () => {
  const [count, setCount] = useState({});
  useEffect(() => {
    console.log("This is the main useEffect ");
   setCount({
      name: "chetan rao",
      age: 15,
    })
  }, []);
  // console.log(count);
  return (
    <>
      <h2>This Is timer</h2>
      <br />
      <p>
        <Children obj = {count} />
      </p>
    </>
  );
};

export default Timer;
