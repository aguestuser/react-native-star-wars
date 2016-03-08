import { getPeople } from '../modules/api';

export const REQUEST_PEOPLE = 'REQUEST_PEOPLE';
export const RECEIVE_PEOPLE = 'RECEIVE_PEOPLE';

export const requestPeople = () => ({
  type: REQUEST_PEOPLE,
  payload: {}
});

export const receivePeople = people => ({
  type: RECEIVE_PEOPLE,
  payload: {
    people: people
  }
});

export const fetchPeople = () => dispatch => {
  dispatch(requestPeople());
  return getPeople().then(ps => dispatch(receivePeople(ps)));
};