import { registerRootComponent } from 'expo';
import React, { Component } from 'react';
import './App.scss';
import { Provider } from 'react-redux';
import {createStore} from 'redux';
import reducer from './../../store/reducer';
import { StyleSheet, Text, View } from 'react-native';

class App extends Component {
  render() {
    const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
    return (
      <Provider store={store}>
        <View className="App">
          <Text>Open up App.js to start working on your app!</Text>
        </View>
      </Provider>
    );
   }
}

export default App;
registerRootComponent(App);
