'use strict';

import React, {
  Component,
  StyleSheet,
  View
} from 'react-native';

import Header from '../components/Header';
import Team from '../components/Team';

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

class Root extends Component {
  render() {
    return(
      <View style={styles.container}>
        <Header/>
        <Team people={this.props.people} />
      </View>
    );
  }
}

export default Root;