import { BookShow } from "./BookShow";

//@ts-ignore
export const BookList = ({ bookList, onBookDelete, onBookEdit }) => {
  return (
    <div className="book-list">
      {bookList.map((book: any) => (
        <BookShow
          key={book.id}
          book={book}
          onBookRemove={onBookDelete}
          onEdit={onBookEdit}
        />
      ))}
    </div>
  );
};
