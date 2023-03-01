import axios from "axios";

//Create Book
export const createBook = async (title: string) => {
  const response = await axios.post("http://localhost:3001/books", {
    title,
  });
  return response.data;
};

//List Books
export const listBooks = async () => {
  const response = await axios.get("http://localhost:3001/books", {});
  return response.data;
};

//Edit Book
export const editBook = async (id: number, newTitle: string) => {
  const response = await axios.put(`http://localhost:3001/books/${id}`, {
    title: newTitle,
  });
  console.log(response.data);
  return response.data;
};

//Remove Book
export const deleteBook = async (id: number) => {
  const response = await axios.delete(`http://localhost:3001/books/${id}`, {});
  return response.data;
};

//GetSingleBook

export const getBookByID = async (id: number) => {
  const response = await axios.get(`http://localhost:3001/books/${id}`, {});
  return response.data;
};
