import { useState } from "react";
import { BookEdit } from "./BookEdit";

//@ts-ignore
export const BookShow = ({ book, onBookRemove, onEdit }) => {
  const [showEdit, setShowEdit] = useState(false);

  function handleDelete() {
    onBookRemove(book.id);
  }
  function handleEdit() {
    setShowEdit(!showEdit);
  }
  function handleSubmit(id: number, newTitle: string) {
    setShowEdit(false);
    onEdit(id, newTitle);
  }

  let content = <h3>{book.title}</h3>;
  if (showEdit) {
    content = <BookEdit book={book} onSaveEdit={handleSubmit} />;
  }
  return (
    <div className="book-show">
      <img src={`https://picsum.photos/seed/${book.id}/300/200`} alt="books" />
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
