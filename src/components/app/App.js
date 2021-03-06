import { registerRootComponent } from 'expo';
import React, { Component } from 'react';
import styles from './App.scss';
import { Provider } from 'react-redux';
import {createStore} from 'redux';
import reducer from './../../store/reducer';
import { Text, View } from 'react-native';
import Header from './../header/Header';

class App extends Component {
  render() {
    const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
    return (
      <Provider store={store}>
        <View className={styles.App}>
          <Text className={styles.text}>My first React Native app YAY!</Text>
          <Header/>
        </View>
      </Provider>
    );
   }
}

export default App;
registerRootComponent(App);
