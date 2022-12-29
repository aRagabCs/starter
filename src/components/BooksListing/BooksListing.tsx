import React, { useState, useEffect } from "react";
import { getAll } from "../../BooksAPI";
import {
  storeBooks,
  categorizedBooks,
} from "../../interfaces/general-interfaces";
import { book } from "../Book/Book.interface";
import { useDispatch } from "react-redux";
import { booksActions } from "../../store/books-slice";
import { useSelector } from "react-redux";
import Shelf from "../Shelf/Shelf";

interface Props {
  children?: React.ReactNode;
}

const BooksListing: React.FC<Props> = ({ children }) => {
  const dispatch = useDispatch();
  const store = useSelector((state: storeBooks) => state);
  const [currentlyReading, setCurrentlyReading] = useState<book[]>([]);
  const [wantToRead, setwantToRead] = useState<book[]>([]);
  const [read, setRead] = useState<book[]>([]);

  useEffect(() => {
    setCurrentlyReading(store.books.currentlyReading);
  }, [store.books.currentlyReading]);

  useEffect(() => {
    setwantToRead(store.books.wantToRead);
  }, [store.books.wantToRead]);

  useEffect(() => {
    setRead(store.books.read);
  }, [store.books.read]);

  const addBooks = (
    uncategorizedBooks: book[],
    currentlyReading: book[],
    wantToRead: book[],
    read: book[]
  ) => {
    dispatch(
      booksActions.setMainLibraryReducer({
        uncategorizedBooks,
        currentlyReading,
        wantToRead,
        read,
      })
    );
  };

  const getAllBooks = () => {
    getAll().then((books: book[]) => {
      const uncategorizedBooks = books;
      const categorizedBooks: categorizedBooks = {
        currentlyReading: [],
        wantToRead: [],
        read: [],
      };

      books.forEach((book: book) => {
        if (book.shelf === "currentlyReading") {
          categorizedBooks.currentlyReading?.push(book);
        } else if (book.shelf === "wantToRead") {
          categorizedBooks.wantToRead?.push(book);
        } else if (book.shelf === "read") {
          categorizedBooks.read?.push(book);
        }
      });

      addBooks(
        uncategorizedBooks,
        categorizedBooks.currentlyReading,
        categorizedBooks.wantToRead,
        categorizedBooks.read
      );
    });
  };

  useEffect(() => {
    getAllBooks();
  }, []);

  return (
    <div data-testid="child">
      <Shelf shelfCategory="Currently Reading" books={currentlyReading}></Shelf>
      <Shelf shelfCategory="Want To Read" books={wantToRead}></Shelf>
      <Shelf shelfCategory="Read" books={read}></Shelf>
    </div>
  );
};

export default BooksListing;
