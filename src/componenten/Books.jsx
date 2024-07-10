// This app is using resources from openlibrary.org

import axios from "axios";
import { useState } from "react";

function Books() {
  const [books, setBooks] = useState([]);
  async function handleLoadBooks() {
    const { data, status } = await axios.get(
      "http://openlibrary.org/subjects/love.json?published_in=1500-1600"
    );
    console.log("Data: ", data);
    console.log("Works: ", data.works);
    console.log("Status", status);
    setBooks(data.works);
  }

  return (
    <>
      <h1>API Books</h1>
      <button onClick={handleLoadBooks}>Load Books</button>
      {books.map((book) => {
        return (
          <>
            <ul key={book.key}>{book.title}</ul>
          </>
        );
      })}
    </>
  );
}

export default Books;
