'use strict';

import React, {
  Component,
  ListView,
  PropTypes,
  StyleSheet,
  Text,
  View
} from 'react-native';

const { arrayOf, bool, number, shape, string } = PropTypes;

class Team extends Component {

  static propTypes = {
    people: shape({
      isFetching: bool,
      show: number,
      items: arrayOf(
        shape({
          name: string.isRequired,
          height: string.isRequired
        })
      )
    })
  };

  render() {
    const { people: { people } } = this.props;

    return (
      <View style={styles.people}>
        { people.map((p, i) => this.renderPerson.bind(this)(p, i)) }
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

export default Team;