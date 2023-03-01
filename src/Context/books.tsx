import { createContext, useState } from "react";
import {
  createBook,
  deleteBook,
  editBook,
  getBookByID,
  listBooks,
} from "../api";
const BooksContext = createContext(null);

export function Provider({ children }) {
  const [books, setBooks] = useState([]);

  async function fetchBooks() {
    console.log("!!!!!!!!!!!!!");
    let allBooks = await listBooks();
    console.log(allBooks);
    setBooks(allBooks);
  }

  async function createBookT(title: string) {
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
  async function getBookById(id: number) {
    let bookId = await getBookByID(id);

    let getBook = books.filter(async (book: any) => {
      if (book.id === id) {
        return bookId;
      }
      return book;
    });

    //@ts-ignore
    setBooks(getBook);
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
  const valueToShare = {
    books,
    deleteBookById,
    updateBookById,
    getBookById,
    fetchBooks,
    createBookT,
  };
  return (
    <BooksContext.Provider value={valueToShare}>
      {children}
    </BooksContext.Provider>
  );
}

export default BooksContext;
