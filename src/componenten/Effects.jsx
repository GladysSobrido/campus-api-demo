import { useState, useEffect } from "react";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import "./Effects.css";

const API = "https://openlibrary.org/search/authors.json?q=suzanne%20collins";
{
  console.log("Const API declared");
}

function Effects() {
  const [author, setAuthor] = useState(undefined);
  {
    console.log("function Effects declared");
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
      const response = await fetch(API);
      const data = await response.json();
      console.log(data);
      setAuthor(data);
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
        console.log("Cleaning up stuff");
      }
    };
  }, []);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
          {console.log("vite logo")}
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
          {console.log("react logo")}
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <p>
          {/* .? optional operator/chaining */}
          Gefunden: {author?.numFound}
          {console.log("text -Gefunden: -")}
        </p>
        <ul>
          {author?.docs.map((work) => (
            <li key={work.key}>{work.top_work}</li>
          ))}
          {console.log("Authors Liste")}
        </ul>
      </div>
      <p className="read-the-docs">
        {console.log("Text -Clink on Vite..._")}
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default Effects;
