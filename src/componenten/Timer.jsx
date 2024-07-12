import { useState, useEffect } from "react";

import "./Effects.css";

{
  console.log("Const API declared");
}

function Timer() {
  const [state, setState] = useState(0);
  let message = "Status is running";

  {
    console.log("function Timer declared");
  }
  useEffect(() => {
    const interval = setInterval(() => {
      if (state < 100) {
        setState(state + 10, 1000), (message = "Status is running");
      } else {
        clearInterval(interval), (message = "State is 100%");
      }
    });

    return () => {
      /* clean up stuff */ {
        console.log("Cleaning up stuff");
        clearInterval(interval);
      }
    };
  }, []);

  return (
    <>
      <h1>Timer</h1>
      <div>
        <p>the counting is {state}</p>
        <p>{message}</p>
      </div>
    </>
  );
}

export default Timer;
