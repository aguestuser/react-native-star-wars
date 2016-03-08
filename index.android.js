'use strict';

import React, { AppRegistry, Component, } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunks from 'redux-thunk'

import RootContainer from './src/main/containers/RootContainer';
import reducers from './src/main/reducers/index';
import { fetchPeople } from './src/main/actions/People';

const store = createStore(reducers, applyMiddleware(thunks));

class StarWars extends Component {

  render(){
    return(
      <Provider store={store}>
        <RootContainer />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('StarWars', () => StarWars);