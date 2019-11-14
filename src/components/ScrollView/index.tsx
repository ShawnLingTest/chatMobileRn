import * as React from 'react';
import { Component } from 'react';
import { View, ScrollView as ScrollViewNative, ScrollViewProps as ScrollViewNativeProps } from 'react-native';


export interface ScrollViewProps extends ScrollViewNativeProps{

}

export default class ScrollView extends Component<ScrollViewProps>{
  render() {
    const { ...options } = this.props;
    return (
      <ScrollViewNative
        {...options}
      >
        {this.props.children}
      </ScrollViewNative>
    );
  }
}
