import {
  FETCH_MEO_FACT_ERROR,
  FETCH_MEO_FACT_PENDING,
  FETCH_MEO_FACT_SUCCESS,
  REGISTER_CLIENT
} from '../_actions/actions';
import { combineReducers } from 'redux';

const clientsReducer = (state = null, action) => {
  switch (action.type) {
    case REGISTER_CLIENT:
      return [...state, action.client];
    default: 
      return state;
  }
};

const meoFactReducer = (state = null, action) => {
  switch (action.type) {
    case FETCH_MEO_FACT_PENDING:
      return {
        ...state,
        pending: true,
      };
    case FETCH_MEO_FACT_SUCCESS:
      return {
        ...state,
        pending: false,
        fact: action.meoFact,
      };
    case FETCH_MEO_FACT_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    default:
      return state;
  }
};

//Selectors
export const getClients = state => state.clientsReducer;

export const getMeoFact = state => state.meoFactReducer.fact;
export const getMeoFactPending = state => state.meoFactReducer.pending;
export const getMeoFactError = state => state.meoFactReducer.error;

export default combineReducers({
  clientsReducer,
  meoFactReducer
})
