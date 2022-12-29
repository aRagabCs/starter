import React from "react";
import styles from "./Book.module.css";
import { book } from "./Book.interface";
import { update } from "../../BooksAPI";
import { storeBooks } from "../../interfaces/general-interfaces";
import { booksActions } from "../../store/books-slice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";


const Book: React.FC<{ book: book }> = (props) => {
  const store = useSelector((state: storeBooks) => state);
  const dispatch = useDispatch();
  const bookThumbnail ='url(' + props.book.imageLinks?.thumbnail + ')';

  const dropdownHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const shelf = event.target.options[event.target.options.selectedIndex].value;
    const bookId = event.target.attributes[0].value;
    const currentShelf = event.target.attributes[1]?.value;
    let updatedBook: book | undefined = {};
    
    if(currentShelf === 'wantToRead') {
      updatedBook = store.books.wantToRead.find(book => book.id === bookId);
    }
    else if(currentShelf ==='read') {
      updatedBook = store.books.read.find(book => book.id === bookId);
    }
    else if (currentShelf ==='currentlyReading') {
      updatedBook = store.books.currentlyReading.find(book => book.id === bookId);
    }
    else {
      updatedBook = store.books.searchUncategorizedBooks.find(book => book.id === bookId);
    }
    
    update(bookId, shelf).then((data)=> {

      dispatch(
        booksActions.removeFromShelfReducer({
          shelf,
          updatedBook
        })
      );
      
      dispatch(
        booksActions.updateShelfReducer({
          shelf,
          updatedBook
        })
      );
      
  });
   }

  return (
    <div>
      <div className={styles.book}>
        <div className={styles.book_top}>
          <div
            className={styles.book_cover}
            style={{
              width: 128,
              height: 188,
              backgroundImage: bookThumbnail,
            }}
          ></div>
          <div className={styles.book_shelf_changer}>
            <select onChange={dropdownHandler} itemID={props.book.id} itemType={props.book.shelf} >
              <option value="">Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
            </select>
          </div>
        </div>
        <div className={styles.book_title}>{props.book.title}</div>
        <div className={styles.book_authors}>{props.book.authors ? props.book.authors :  null}</div>
      </div>
    </div>
  );
};

export default Book;
