import { useEffect, useState } from "react";
import { BookCreate } from "./Components/BookCreate";
import { BookList } from "./Components/BookList";
import { createBook, deleteBook, editBook, listBooks } from "./api";

function App() {
  const [books, setBooks] = useState([]);

  async function fetchBooks() {
    let allBooks = await listBooks();
    setBooks(allBooks);
  }
  useEffect(() => {
    fetchBooks();
  }, []);

  async function handleSubmit(title: string) {
    let updateBook = await createBook(title);
    //@ts-ignore

    setBooks([...books, updateBook]);
  }
  async function deleteBookById(id: number) {
    await deleteBook(id);
    let updatedBooks = books.filter((book: any) => {
      return book.id !== id;
    });

    setBooks(updatedBooks);
  }

  async function updateBookById(id: number, newTitle: string) {
    let update = await editBook(id, newTitle);

    let updateBook = books.map(async (book: any) => {
      if (book.id === id) {
        return { ...books, ...update };
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
