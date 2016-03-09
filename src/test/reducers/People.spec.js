import chai from 'chai'
chai.should();

import { peopleResponse } from '../support/sampleData';
const { results: ppl } = peopleResponse;
import { initialState } from '../../main/reducers/People';

import * as a from '../../main/actions/People'
import * as r from '../../main/reducers/People'

describe ('People reducers', () => {

  describe('people', () => {

    it('returns intial state by default', () => {

      r.people(undefined, {}).should.eql({
        isFetching: false,
        show: 10,
        people: []
      });
    });

    it('handles REQUEST_PEOPLE by recording fetch state', () => {

      r.people(initialState, {
        type: a.REQUEST_PEOPLE,
        payload: {}
      }).should.eql({
        isFetching: true,
        show: 10,
        people: []
      })
    });

    it('handles RECEIVE_PEOPLE by recording people and fetch state', () => {

      r.people(initialState, {
        type: a.RECEIVE_PEOPLE,
        payload: { people: ppl }
      }).should.eql({
        isFetching: false,
        show: 10,
        people: ppl
      })
    });
  });
});