import { useContext, useState } from "react";
import BooksContext from "../Context/books";
//@ts-ignore
export const BookEdit = ({ book, onSaveEdit }) => {
  const { updateBookById } = useContext(BooksContext);
  const [title, setUpdateTitle] = useState(book.title);
  function handleSubmit(e: any) {
    e.preventDefault();
    updateBookById(book.id, title);
    onSaveEdit();
    window.location.reload();
  }
  return (
    <div>
      <form action="" className="book-edit" onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          id=""
          className="input"
          value={title}
          onChange={(e) => {
            setUpdateTitle(e.target.value);
          }}
        />
        <button className="button is-primary">Save</button>
      </form>
    </div>
  );
};
