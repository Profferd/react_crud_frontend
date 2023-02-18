import {
  getJson,
  postJson,
} from 'requests';

import config from 'config';

import {
  ERROR_RECEIVE_BOOK,
  RECEIVE_BOOK,
  REQUEST_BOOK,
  REQUEST_SAVE_BOOK,
  RECEIVE_RESULT_SAVE_BOOK,
  ERROR_RECEIVE_RESULT_SAVE_BOOK,
} from '../constants/actionTypes';

const errorReceiveBook = () => ({
  type: ERROR_RECEIVE_BOOK,
});

const getBook = ({
                   id,
                 }) => {
  const {
    BASE_URL,
    BOOKS_SERVICE,
  } = config;

  return getJson({
    url: `${BASE_URL}${BOOKS_SERVICE}/${id}`,
  })
};

const receiveBook = (book) => ({
  type: RECEIVE_BOOK,
  payload: book,
});

const requestBook = () => ({
  type: REQUEST_BOOK,
});

export const fetchBook = ({
                            id,
                          }) => (dispatch) => {
  dispatch(requestBook());
  return getBook({
    id,
  }).then(book => dispatch(receiveBook(book)))
    .catch(() => dispatch(errorReceiveBook()));
};

const errorReceiveResultSaveBook = () => ({
  type: ERROR_RECEIVE_RESULT_SAVE_BOOK,
});

const saveBook = ({
                    id, name, author, genre, price,
                  }) => {
  const {
    BASE_URL,
    BOOKS_SERVICE,
  } = config;

  return postJson({
    body: {
      id, name, author, genre, price,
    },
    url: `${BASE_URL}${BOOKS_SERVICE}/save`,
  })
};

const receiveResultSaveBook = (book) => ({
  type: RECEIVE_RESULT_SAVE_BOOK,
  payload: book,
});

const requestSaveBook = () => ({
  type: REQUEST_SAVE_BOOK,
});

export const fetchSaveBook = ({
                                id, name, author, genre, price,
                              }) => (dispatch) => {
  dispatch(requestSaveBook());
  return saveBook({
    id, name, author, genre, price,
  }).then(book => dispatch(receiveResultSaveBook(book)))
    .catch(() => dispatch(errorReceiveResultSaveBook()));
};

export default {
  fetchBook,
  fetchSaveBook,
};
