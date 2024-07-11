// This app is using resources from openlibrary.org

import axios from "axios";
import { useState } from "react";

function Books() {
  const [books, setBooks] = useState([]);
  //   const [authors, setAuthors] = useState([]);
  async function handleLoadBooks() {
    const { data, status } = await axios.get(
      "http://openlibrary.org/subjects/love.json?published_in=1500-1600"
    );
    console.log("Data: ", data);
    console.log("Works: ", data.works);
    console.log("Status", status);

    setBooks(data.works);
    //
  }

  return (
    <>
      <h1>API Books</h1>
      <button onClick={handleLoadBooks}>Load Books</button>
      <ul>
        {books.map((book) => {
          {
            console.log("book.authors", book.authors);
          }
          return (
            <li key={book.key}>
              <h3>{book.title}</h3>
              {/* <p>Author: {book.authors.name}</p> */}
              <p>Published on: {book.first_publish_year}</p>

              {book.authors.map((author) => {
                return <p key={book.authors.key}>Autor: {author.name}</p>;
              })}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Books;
