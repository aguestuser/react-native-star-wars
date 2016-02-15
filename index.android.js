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

const mockMovies = [
  {
    title: 'Title',
    year: '2015',
    posters: {
      thumbnail: 'http://i.imgur.com/UePbdph.jpg'
    }
  }
];

const reqUrl = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';

class MovieProject extends Component {

  state = { movies: null };

  componentDidMount(){
    this.fetchData();
  }

  render() {
    //const m = mockMovies[0];

    return this.state.movies ?
      this.renderMovie(this.state.movies[0]) :
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
      .then(data => this.setState({movies: data.movies}))
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
  }
});

AppRegistry.registerComponent('MovieProject', () => MovieProject);
