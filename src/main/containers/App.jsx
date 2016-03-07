'use strict';

import React, {
  AppRegistry,
  Component,
  Image,
  ListView,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { getMovies, getPeople } from '../modules/api';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold',
    padding: 5

  },
  loading: {
    textAlign: 'center'
  },
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

class App extends Component {

  constructor(){
    super();
    this.recordPeople = this.recordPeople.bind(this);
    this.state = {
      people: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}),
      loaded: false
    };
  }

  componentDidMount(){
    getPeople().then(this.recordPeople).done();
  }

  recordPeople(people){
    this.setState({
      people: this.state.people.cloneWithRows(people),
      loaded: true
    });
  }

  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.header}>(Far) Away Team Lineup:</Text>
        {this.state.loaded ? this.renderPeople() : this.renderLoading()}
      </View>
    );
  }

  renderLoading(){
    return (
      <Text style={styles.loading}>
        The force is awakening...
      </Text>
    );
  }

  renderPeople() {
    return (
      <ListView
        style={styles.people}
        renderRow={this.renderPerson}
        dataSource={this.state.people}
      />
    );
  }

  renderPerson(person) {
    return (
      <Text style={styles.person}>
        <Text style={styles.name}>{person.name}</Text>
        <Text style={styles.height}>{` (${person.height} meters)`}</Text>
      </Text>
    );
  }
}

export default App;

AppRegistry.registerComponent('App', () => App);
