/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import './Global';
import { StyleSheet, View } from 'react-native';
import AppRouter from './router';
import NavigationModule from './modules/NavigationModule';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <AppRouter
          ref={ref => NavigationModule.setNavigatorRef(ref)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
