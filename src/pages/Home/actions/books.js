import {
	getJson,
	postJson,
	deleteJson,
} from 'requests';

import config from 'config';

import {
	ERROR_RECEIVE_BOOKS,
	RECEIVE_BOOKS,
	REQUEST_BOOKS,
	ERROR_DELETE_BOOK,
	REQUEST_DELETE_BOOK,
} from '../constants/actionTypes';

const errorReceiveBooks = () => ({
	type: ERROR_RECEIVE_BOOKS,
});

const getBooks = () => {
	const {
		BASE_URL,
		BOOKS_SERVICE,
	} = config;

	return getJson({
		url: `${BASE_URL}${BOOKS_SERVICE}/getAll`,
	})
};

const receiveBooks = (books) => ({
	type: RECEIVE_BOOKS,
	payload: books,
});

const requestBooks = () => ({
	type: REQUEST_BOOKS,
});

export const fetchBooks = () => (dispatch) => {
	dispatch(requestBooks());
	return getBooks({
		dispatch,
	}).then(books => dispatch(receiveBooks(books)))
		.catch(() => dispatch(errorReceiveBooks()));
};

const errorDeleteBook = () => ({
	type: ERROR_DELETE_BOOK,
});

const deleteBook = ({
										id,
									}) => {
	const {
		BASE_URL,
		BOOKS_SERVICE,
	} = config;

	return deleteJson({
		params: {
			id,
		},
		url: `${BASE_URL}${BOOKS_SERVICE}/delete`,
	})
};

const requestDeleteBook = () => ({
	type: REQUEST_DELETE_BOOK,
});

export const fetchDeleteBook = ({
																id,
															}) => (dispatch) => {
	dispatch(requestDeleteBook());
	return deleteBook({
		id,
	}).then(() => fetchBooks())
		.catch(() => dispatch(errorDeleteBook()));
};

export default {
	fetchBooks,
	fetchDeleteBook,
};
