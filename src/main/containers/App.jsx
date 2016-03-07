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
import Loading from '../components/Loading';
import Team from '../components/Team';
import Header from '../components/Header';

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

class App extends Component {

  constructor(){
    super();
    this.state = {
      people: [],
      loaded: false
    };
  }

  componentDidMount(){
    getPeople().then(this.recordPeople.bind(this)).done();
  }

  recordPeople(people){
    this.setState({ people: people, loaded: true });
  }

  render() {
    return(
      <View style={styles.container}>
        <Header/>
        {
          !this.state.loaded ?
            <Loading/>:
            <Team people={this.state.people} />
        }
      </View>
    );
  }
}

export default App;

AppRegistry.registerComponent('App', () => App);
