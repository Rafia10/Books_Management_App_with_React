import { useContext, useState } from "react";
import { getBookByID } from "../api";
import BooksContext from "../Context/books";
import { BookEdit } from "./BookEdit";
import { ShowSingleBook } from "./ShowSingleBook";

//@ts-ignore
export const BookShow = ({ book }) => {
  const [showEdit, setShowEdit] = useState(false);
  const [showSingleBook, setShowSingleBook] = useState(false);
  const { deleteBookById } = useContext(BooksContext);
  const { updateBookById } = useContext(BooksContext);
  const { getBookById } = useContext(BooksContext);

  function handleDelete() {
    deleteBookById(book.id);
  }

  function handleEdit() {
    setShowEdit(!showEdit);
  }

  function handleSubmit(id: number, newTitle: string) {
    setShowEdit(false);
    updateBookById(id, newTitle);
  }

  function handleImage(e: any) {
    e.preventDefault();
    setShowSingleBook(true);
    getBookById(book.id);
  }

  let content = <h3>{book.title}</h3>;
  if (showEdit) {
    content = <BookEdit book={book} onSaveEdit={handleSubmit} />;
  }
  return (
    <div className="book-show">
      {showSingleBook && <ShowSingleBook book={book} />}
      <img
        src={`https://picsum.photos/seed/${book.id}/300/200`}
        alt="books"
        onClick={handleImage}
      />
      <div>{content}</div>
      <div className="actions">
        <button className="delete" onClick={handleDelete}>
          X
        </button>
        <button className="edit" onClick={handleEdit}>
          Edit
        </button>
      </div>
    </div>
  );
};
