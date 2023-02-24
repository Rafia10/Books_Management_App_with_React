import { useState } from "react";
//@ts-ignore
export const BookEdit = ({ book, onSaveEdit }) => {
  const [title, setUpdateTitle] = useState(book.title);
  function handleSubmit(e: any) {
    e.preventDefault();
    onSaveEdit(book.id, title);
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
