import { useState } from "react";
//@ts-ignore
export const BookCreate = ({ onSubmitBook }) => {
  const [title, setTitle] = useState("");

  function handleSubmit(e: any) {
    e.preventDefault();
    onSubmitBook(title);
    setTitle("");
  }
  return (
    <div className="book-create">
      <h3>Add A Book</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Title:</label>
        <input
          className="input"
          type="text"
          name="title"
          id=""
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
        />
        <button className="button">Add Book</button>
      </form>
    </div>
  );
};
