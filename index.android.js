/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
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

const reqUrl = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';

class MovieProject extends Component {

  state = {
    dataSource: new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    }),
    loaded: false
  };

  componentDidMount(){
    this.fetchData();
  }

  render() {
    return this.state.loaded ?
      this.renderMovies() :
      this.renderLoading();
  }

renderMovie(m) {
    return (
      <View style={styles.container}>
        <Image
          source={{uri: m.posters.thumbnail}}
          style={styles.thumbnail}
        />
        <View style={styles.rightContainer}>
          <Text style={styles.title}>{m.title}</Text>
          <Text style={styles.year}>{m.year}</Text>
        </View>
      </View>
    );
  }

  renderMovies() {
    return (
      <ListView
        style={styles.listView}
        renderRow={this.renderMovie}
        dataSource={this.state.dataSource}
      />
    );
  }

  renderLoading(){
    return (
      <View style={styles.container}>
        <Text>
          Loading movies...
        </Text>
      </View>
    );
  }

  fetchData(){
    fetch(reqUrl)
      .then(res => res.json())
      .then(data => this.setState({
        dataSource: this.state.dataSource.cloneWithRows(data.movies),
        loaded: true
      }))
      .done();
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  thumbnail: {
    width: 53,
    height: 81
  },
  rightContainer: {
    flex: 1
  },
  title: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'center'
  },
  year: {
    textAlign: 'center'
  },
  listView: {
    paddingTop: 20,
    backgroundColor: '#F5FCFF'
  }
});

AppRegistry.registerComponent('MovieProject', () => MovieProject);
