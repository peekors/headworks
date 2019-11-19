export const REGISTER_CLIENT = 'REGISTER_CLIENT';

export const registerClient = (client) => ({
  type: REGISTER_CLIENT,
  client,
});

export const FETCH_MEO_FACT_PENDING = 'FETCH_MEO_FACT_PENDING';
export const FETCH_MEO_FACT_SUCCESS = 'FETCH_MEO_FACT_SUCCESS';
export const FETCH_MEO_FACT_ERROR = 'FETCH_MEO_FACT_ERROR';

export const fetchMeoFactPending = () => ({
  type: FETCH_MEO_FACT_PENDING,
});

export const fetchMeoFactSuccess = (meoFact) => ({
  type: FETCH_MEO_FACT_SUCCESS,
  meoFact,
});

export const fetchMeoFactError = (error) => ({
  type: FETCH_MEO_FACT_ERROR,
  error,
});
