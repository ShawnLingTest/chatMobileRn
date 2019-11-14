import * as React from 'react';
import { Component } from 'react';
import { View } from 'react-native';
import NavigationBar from "../../components/NavigationBar";

export default class FeedPage extends Component{
  render() {
    return (
      <View style={{flex:1}}>
        <NavigationBar
          title={'Inbox'}
        />


      </View>
    );
  }
}
