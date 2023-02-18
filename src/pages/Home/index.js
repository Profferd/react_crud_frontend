import React from 'react';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import Home from './containers/Home';
import reducer from './reducers/reducer';

const rootReducer = combineReducers({
  reducer,
});

const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware),
);

export default () => (
  <Provider store={store}>
    <Home/>
  </Provider>
);
