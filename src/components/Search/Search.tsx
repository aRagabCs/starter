import React, { useEffect, useState } from "react";
import styles from "./Search.module.css";
import { Link } from "react-router-dom";
import { search } from "../../BooksAPI";
import Shelf from "../Shelf/Shelf";
import {
  storeBooks,
} from "../../interfaces/general-interfaces";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { book } from "../Book/Book.interface";
import { booksActions } from "../../store/books-slice";

const SearchComponent = () => {
  const dispatch = useDispatch();
  const store = useSelector((state: storeBooks) => state);
  const [searchResults, setSearchResults] = useState<book[]>([]);
  const [currentlyReadingb, setCurrentlyReadingb] = useState<book[]>([]);
  const [wantToReadb, setWantToReadb] = useState<book[]>([]);
  const [readb, setReadb] = useState<book[]>([]);
  const [uncategorizedb, setUncategorizedb] = useState<book[]>([]);

  const uncategorized: book[] = [];
  const currentlyReading: book[] = [];
  const wantToRead: book[] = [];
  const read: book[] = [];
    

  const handleKeyPress = (event: React.ChangeEvent<HTMLInputElement>) => {
    search(event.target.value, 20).then((data: any) => {
      if (data && data.length > 0) {
      setSearchResults(data);
      } else setSearchResults([]);
    });
  };

  useEffect(() => {
    addBooks([], [], [], []);
  }, []);

  useEffect(() => {
    searchResults?.map((book: book) => {
      store.books.uncategorizedBooks.map((bookWithCategory: book) => {
        if (book.id === bookWithCategory.id) {
          book.shelf = bookWithCategory.shelf;
        }
      });
    });

    searchResults?.forEach((book: book) => {
      if (book.shelf === "currentlyReading") {
        currentlyReading?.push(book);
      } else if (book.shelf === "wantToRead") {
        wantToRead?.push(book);
      } else if (book.shelf === "read") {
        read?.push(book);
      } else {
        uncategorized.push(book)
      }
    });
    addBooks(uncategorized, currentlyReading, wantToRead, read);
  }, [searchResults]);

  useEffect(() => {
    setCurrentlyReadingb(store.books.currentlyReading);
  }, [store.books.currentlyReading]);

  useEffect(() => {
    setWantToReadb(store.books.wantToRead);
  }, [store.books.wantToRead]);

  useEffect(() => {
    setReadb(store.books.read);
  }, [store.books.read]);

  useEffect(() => {
    setUncategorizedb(store.books.searchUncategorizedBooks);
  }, [store.books.searchUncategorizedBooks]);

  
  const addBooks = (
    searchUncategorizedBooks: book[],
    currentlyReading: book[],
    wantToRead: book[],
    read: book[]
  ) => {
    dispatch(
      booksActions.setSearchReducer({
        searchUncategorizedBooks,
        currentlyReading,
        wantToRead,
        read
      })
    );
  };

  return (
    <div className={styles.search_books}>
      <div className={styles.search_books_bar}>
        <Link to="/" className={styles.close_search}>
          Close
        </Link>
        <div className={styles.search_books_input_wrapper}>
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            onChange={handleKeyPress}
          />
        </div>
      </div>
      <div className={styles.search_books_results}>
        {currentlyReadingb?.length ? (
          <Shelf
            shelfCategory="Currently Reading"
            books={currentlyReadingb}
          ></Shelf>
        ) : null}
        {wantToReadb?.length ? (
          <Shelf
            shelfCategory="Want To Read"
            books={wantToReadb}
            
          ></Shelf>
        ) : null}
        {readb?.length ? (
          <Shelf
            shelfCategory="Read"
            books={readb}
          ></Shelf>
        ) : null}
        {uncategorizedb?.length ? (
          <Shelf
            shelfCategory="uncategorized"
            books={uncategorizedb}
          ></Shelf>
        ) : null}
      </div>
    </div>
  );
};

export default SearchComponent;
