import { fetchMeoFactError, fetchMeoFactPending, fetchMeoFactSuccess } from '../../_actions/actions';

export const fetchMeoFact = () => (
  dispatch => {
    dispatch(fetchMeoFactPending());
    fetch('https://meowfacts.herokuapp.com/')
      .then(response => response.json())
      .then(response => {
        if(response.error) {
          throw(response.error);
        }
        dispatch(fetchMeoFactSuccess(response.data[0]));
        return response.data;
      })
      .catch(error => {
        dispatch(fetchMeoFactError(error));
      })
  }
);