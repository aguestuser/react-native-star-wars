'use strict';

import React, {
  Component,
  StyleSheet,
  View
} from 'react-native';

import Header from '../components/Header';
import Loading from '../components/Loading';
import Team from '../components/Team';
import { fetchPeople } from '../actions/People';

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

class Root extends Component {

  componentDidMount(){
    this.props.dispatch(fetchPeople())
  }

  render() {
    const { isFetching } = this.props.people;
    return(
      <View style={styles.container}>
        <Header/>
        { isFetching ? <Loading/> : <Team {...this.props} /> }
      </View>
    );
  }
}

export default Root;