import { BookShow } from "./BookShow";

//@ts-ignore
export const BookList = ({ bookList, onBookDelete, onBookEdit, onBookGet }) => {
  console.log("book list");
  return (
    <div className="book-list">
      {bookList.map((book: any) => (
        <BookShow
          key={book.id}
          book={book}
          onBookRemove={onBookDelete}
          onEdit={onBookEdit}
          onFetch={onBookGet}
        />
      ))}
    </div>
  );
};
