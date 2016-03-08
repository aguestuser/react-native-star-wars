import { combineReducers } from 'redux';

import { peopleResponse } from '../../test/support/sampleData';
const { results: fakePeople } = peopleResponse;

export const people = (state = fakePeople, action) => fakePeople;

export default combineReducers({people});
