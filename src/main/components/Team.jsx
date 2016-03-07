'use strict';

import React, {
  Component,
  ListView,
  PropTypes,
  StyleSheet,
  Text,
  View
} from 'react-native';

const { string, arrayOf, shape } = PropTypes;

const styles = StyleSheet.create({
  people: {
    paddingTop: 10,
    backgroundColor: '#F5FCFF'
  },
  person: {
    padding: 5,
    textAlign: 'center',
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
  name:{
    flex: 1,
    color: 'black',
    fontWeight: 'bold'
  },
  height: {
    flex: 1,
    color: 'grey',
    fontStyle: 'italic'
  }
});

class Team extends Component {

  static propTypes = {
    people: arrayOf(
      shape({
        name: string.isRequired,
        height: string.isRequired
      })
    )
  };

  constructor(){
    super();
    this.renderPerson = this.renderPerson.bind(this);
  }

  render() {
    return (
      <View style={styles.people}>
        { this.props.people.map((p, i) => this.renderPerson(p, i)) }
      </View>
    );
  }

  renderPerson(person, index) {
    return (
      <Text style={styles.person} key={index}>
        <Text style={styles.name}>{person.name}</Text>
        <Text style={styles.height}>{` (${person.height} meters)`}</Text>
      </Text>
    );
  }
}

export default Team;