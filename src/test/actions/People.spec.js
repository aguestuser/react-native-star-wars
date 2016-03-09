import chai from 'chai'
chai.should();

import nock from 'nock'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
const mockStore = configureMockStore(middlewares);
const middlewares = [ thunk ];

import { peopleResponse } from '../support/sampleData';
const { results: ppl } = peopleResponse;
import { initialState } from '../../main/reducers/People';

import * as actions from '../../main/actions/People'

describe('People actions', () => {

  describe('requestPeople', () => {

    it("notifies that an API call has been made", () => {
      actions.requestPeople().should.eql({
        type: actions.REQUEST_PEOPLE,
        payload: {}
      });
    });
  });

  describe('receivePeople', () => {

    it('creates an action to overwrite the people store', () => {
      actions.receivePeople(ppl).should.eql({
        type: actions.RECEIVE_PEOPLE,
        payload: { people: ppl }
      });
    });
  });

  describe('fetchPeople', () => {

    afterEach(() => nock.cleanAll());

    it('should make API call, dispatch start and finish of call with payload', done => {

      nock('http://swapi.co/api')
        .get('/people')
        .reply(200, peopleResponse );

      const expectedActions = [
        { type: actions.REQUEST_PEOPLE, payload: {} },
        { type: actions.RECEIVE_PEOPLE, payload: { people: ppl } }
      ];

      const store = mockStore(initialState, expectedActions, done);
      store.dispatch(actions.fetchPeople());
    });
  })
});