import * as React from 'react';
import { Component } from 'react';
import { View } from 'react-native';
import NavigationBar from "../../components/NavigationBar";

export default class MessagePage extends Component{
  render() {
    return (
      <View style={{flex:1}}>
        <NavigationBar
          title={'收件箱'}
        />
      </View>
    );
  }
}
