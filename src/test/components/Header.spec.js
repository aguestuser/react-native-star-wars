import React, { View } from "react-native";
import { shallow } from "enzyme";
import Header from '../../main/components/Header';

describe('Header component', () => {

  it('renders header text', () => {
    const header = shallow(<Header/>);
    header.find("Text").at(0).children().node.should.equal('(Far) Away Team Lineup:');
  });
});