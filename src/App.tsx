import { useState } from "react";
import { BookCreate } from "./Components/BookCreate";
import { BookList } from "./Components/BookList";

function App() {
  const [books, setBooks] = useState([]);
  function handleSubmit(title: string) {
    //@ts-ignore
    setBooks([...books, { title, id: Math.round(Math.random() * 9999) }]);
  }
  function deleteBookById(id: number) {
    let updatedBooks = books.filter((book: any) => {
      return book.id !== id;
    });
    setBooks(updatedBooks);
  }

  function updateBookById(id: number, newTitle: string) {
    let updateBook = books.map((book: any) => {
      if (book.id === id) {
        return { ...books, title: newTitle };
      }
      return book;
    });
    //@ts-ignore
    setBooks(updateBook);
  }
  return (
    <div className="app">
      <BookCreate onSubmitBook={handleSubmit} />
      <h1>Reading List</h1>
      <BookList
        bookList={books}
        onBookDelete={deleteBookById}
        onBookEdit={updateBookById}
      />
    </div>
  );
}

export default App;
