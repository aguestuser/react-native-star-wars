'use strict';

import React, { AppRegistry, Component, } from 'react-native';
import App from './src/main/containers/App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './src/main/reducers/index';

class StarWars extends Component {
  render(){
    return(
      <Provider store={createStore(reducers)}>
        <App />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('StarWars', () => StarWars);