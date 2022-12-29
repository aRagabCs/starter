import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import Search from "./Search.tsx";

describe("Search component", () => {
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
  

  test("select values", () => {

    store = mockStore(initialState);
    
    // const addBooksSpy = jest.spyOn(search, 'addBooks');
      

    render(
      <Provider store={store}>
        {/* <Search /> */}
      </Provider>
    );

    // expect(addBooksSpy).toHaveBeenCalled();
  });
});
