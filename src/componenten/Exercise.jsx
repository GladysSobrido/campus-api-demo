import { useState, useEffect } from "react";
import "./Exercise.css";

function Exercise() {
  const API = "https://campus-api-movies.onrender.com/movies/";
  const [info, setInfo] = useState([]);
  useEffect(() => {
    async function loadData() {
      const response = await fetch(API);
      const data = await response.json();
      console.log("data.result =", data.result);
      setInfo(data.result);
    }
    loadData();
  }, []);

  return (
    <>
      <h2>Datamovies</h2>
      <p>Welcome to DataMovies.</p>
      <p>
        This is the website that gets rendered, before the API loads the list of
        movies.
      </p>
      <div className={"info"}>
        <h3>
          <u>Gefunden: {info.length} Filme</u>
          <br />
        </h3>
        {info.map((item) => (
          <ul key={item.id}>
            <li>
              {item.title} produced in {item.year} by director: {item.director}
            </li>
          </ul>
        ))}
      </div>
    </>
  );
}
export default Exercise;
