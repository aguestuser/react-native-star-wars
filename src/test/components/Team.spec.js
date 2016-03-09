import React, { View, PropTypes } from "react";
import { shallow, render } from "enzyme";
import { peopleResponse } from '../support/sampleData';
const { results: ppl } = peopleResponse;

import Team from '../../main/components/Team';

describe('Team component', () => {

  it.only('renders a list of people', () => {
    const team = render(<Team people={{isFetching: false, show: 10, people: ppl}}/>);

    team.find("View").at(0).should.exist;
    team.find("View").at(0).find("Text").at(0).should.exist;
    // todo: why does static propTypes assignment break babel in tests but not runtime?
    // todo: how to assert on contents of child nodes?
    team.find("View").at(0).find("Text").at(0).node.find("Text").at(0).children().node
      .should.contain(ppl[0].name);

  });
});