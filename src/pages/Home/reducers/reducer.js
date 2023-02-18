import {
  ERROR_RECEIVE_BOOKS,
  RECEIVE_BOOKS,
  REQUEST_BOOKS,
  ERROR_DELETE_BOOK,
  REQUEST_DELETE_BOOK,
} from '../constants/actionTypes';

const initialState = {
  id: null,
  list: [],
  isFailedFetchBooks: false,
  isFetchingBooks: false,
  isFailedFetchDeleteBooks: false,
  isFetchingDeleteBook: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ERROR_RECEIVE_BOOKS: {
      return {
        ...state,
        isFailedFetchBooks: true,
        isFetchingBooks: false,
      };
    }

    case RECEIVE_BOOKS: {
      const list = action.payload;

      return {
        ...state,
        list: list || initialState.list,
        isFailedFetchBooks: false,
        isFetchingBooks: false,
      };
    }

    case REQUEST_BOOKS: {
      return {
        ...state,
        isFailedFetchBooks: false,
        isFetchingBooks: true,
      };
    }

    case ERROR_DELETE_BOOK: {
      return {
        ...state,
        isFailedFetchDeleteBooks: true,
        isFetchingDeleteBook: false,
      };
    }

    case REQUEST_DELETE_BOOK: {
      return {
        ...state,
        isFailedFetchDeleteBook: false,
        isFetchingDeleteBook: true,
      };
    }

    default:
      return state;
  }
}
