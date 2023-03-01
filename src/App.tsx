import { useContext, useEffect, useState } from "react";
import { BookCreate } from "./Components/BookCreate";
import { BookList } from "./Components/BookList";

import BooksContext from "./Context/books";

function App() {
  const { fetchBooks } = useContext(BooksContext);
  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="app">
      <BookCreate />
      <h1>Reading List</h1>
      <BookList />
    </div>
  );
}

export default App;
