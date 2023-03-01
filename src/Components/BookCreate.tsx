import { useState } from "react";
import { useContext } from "react";
import BooksContext from "../Context/books";
//@ts-ignore
export const BookCreate = () => {
  const [title, setTitle] = useState("");
  const { createBookT } = useContext(BooksContext);
  function handleSubmit(e: any) {
    e.preventDefault();
    createBookT(title);
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
