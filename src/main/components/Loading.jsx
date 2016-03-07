'use strict';

import React, {
  Component,
  StyleSheet,
  Text,
} from 'react-native';

const styles = StyleSheet.create({
  loading: {
    textAlign: 'center'
  }
});

class Loading extends Component {
  render(){
    return(
      <Text style={styles.loading}>
        The force is awakening...
      </Text>
    );
  }
}

export default Loading;