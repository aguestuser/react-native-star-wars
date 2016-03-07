'use strict';

import React, {
  AppRegistry,
  Component,
} from 'react-native';

import {App} from './src/main/containers/App';

class StarWars extends Component {
  
  render(){
    return(<App/>);
  }
}

AppRegistry.registerComponent('StarWars', () => StarWars);
