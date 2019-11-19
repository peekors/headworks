import { applyMiddleware, createStore } from 'redux';
import reducer from './_reducers/reducers';
import thunk from 'redux-thunk';

const initialState = {
  clientsReducer: [],
  meoFactReducer: {
    pending: false,
    fact: '',
    error: null,
  }
};

const middlewares = [thunk];

const store = createStore(reducer, initialState, applyMiddleware(...middlewares));

export default store;