'use strict';

import React, {
  Component,
  StyleSheet,
  Text,
} from 'react-native';

const styles = StyleSheet.create({
  header: {
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold',
    padding: 5
  }
});

export default class Header extends Component {
  render(){
    return(
      <Text style={styles.header}>(Far) Away Team Lineup:</Text>
    );
  }
}
