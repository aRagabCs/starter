import React, { useEffect } from "react";
import styles from "./Shelf.module.css";
import Book from "../Book/Book";
import { book } from "../Book/Book.interface";

const Shelf: React.FC<{
  shelfCategory: string;
  books: book[];
}> = (props) => {
  useEffect(() => {}, [props]);

  return (
    <div className={styles.bookshelf}>
      <h2 className={styles.bookshelf_title}>{props.shelfCategory}</h2>
      <div className={styles.bookshelf_books}>
        <ol className={styles.books_grid}>
          {props.books && props.books.length > 0
            ? props.books.map((book, index) => (
                <li key={"book" + index}>
                  <Book book={book}></Book>
                </li>
              ))
            : null}
        </ol>
      </div>
    </div>
  );
};

export default Shelf;
