import { BookShow } from "./BookShow";
import { useContext } from "react";
import BooksContext from "../Context/books";
//@ts-ignore
export const BookList = () => {
  console.log("jjhjjjjjjjjjjjjj");
  const { books } = useContext(BooksContext);
  console.log(books);
  return (
    <div className="book-list">
      {books.map((book: any) => (
        <BookShow key={book.id} book={book} />
      ))}
    </div>
  );
};
