import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import * as Book from "./Book";
import { update } from "../../BooksAPI";


describe("Book component", () => {
  const initialState = {
    books: {
      uncategorizedBooks: [],
      currentlyReading: [],
      wantToRead: [],
      read: [],
      searchUncategorizedBooks: [],
    },
  };

  const mockStore = configureStore();
  let store;
  const book = {
    imageLinks: {
      thumbnail: '',
    },
  };

  test("select values", () => {

    store = mockStore(initialState);
    // const updateSpy = jest.spyOn(Book, 'update');
    
    
      

    render(
      <Provider store={store}>
        <Book book={book} />
      </Provider>
    );

    fireEvent.click(screen.getByText('Read'));     
    // expect(updateSpy).toHaveBeenCalled();




  });
});
