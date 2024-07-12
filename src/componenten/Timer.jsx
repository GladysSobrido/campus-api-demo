import { useState, useEffect } from "react";

import "./Effects.css";

{
  console.log("Const API declared");
}

function Timer() {
  const [state, setState] = useState(0);
  let message = "Status is running";
  //   const [author, setAuthor] = useState(undefined);
  const interval = setInterval(() => {
    setState(state + 10);
  }, 3000);
  {
    console.log("function Timer declared");
  }

  /* 
    run the callback function
    - on mounting the component
    - on updating the component
    - on unmounting the component
  */

  /* question: when does useEffect get executed? */
  useEffect(() => {
    async function loadData() {
      //   const response = await fetch(API);
      //   const data = await response.json();
      //   console.log(data);
      //   setAuthor(data);
      if (state < 100) {
        interval();
        message = "Status is running";
      } else message = "State is 100%";
    }
    {
      console.log("Jetzt ist useEffect angerufen");
    }

    loadData();
    {
      console.log("loadData");
    }

    return () => {
      /* clean up stuff */ {
        clearInterval(interval);
        console.log("Cleaning up stuff");
      }
    };
  }, []);

  return (
    <>
      <div>
        <p>the counting is {state}</p>
        <p>{message}</p>
      </div>
      <h1>Timer</h1>
    </>
  );
}

export default Timer;
