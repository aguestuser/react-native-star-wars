import { combineReducers } from 'redux';
import { assign } from 'lodash';

import { REQUEST_PEOPLE, RECEIVE_PEOPLE } from '../actions/People';

export const initialState = {
  isFetching: false,
  show: 10,
  people: []
};

export const people = (state = initialState, action) => {
  switch (action.type){
    case REQUEST_PEOPLE:
      return {
        ...state,
        isFetching: true
      };
    case RECEIVE_PEOPLE:
      return {
        ...state,
        isFetching: false,
        people: action.payload.people
      };
    default:
      return initialState;
  }
};

export default combineReducers({people});
