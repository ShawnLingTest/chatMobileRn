import * as React from 'react';
import { Component } from 'react';
import {View, TextProps, TextStyle, StyleProp} from 'react-native';
import { Text } from "react-native-animatable";

export interface LabelProps extends TextProps{
  text?:string |  number,

  type?: 'default' | 'detail'
  /**
   * xl 18
   * lg 16
   * md 14
   * sm 12
   * xs 10
   */
  size?: 'md' | 'lg' | 'sm' | 'xl' | 'xs' | number,
  color?:string,
  style?:TextStyle
}

export default class Label extends Component<LabelProps>{

  static defaultProps = {
    size:"md",
    type:"default"
  };

  buildStyle = ():StyleProp<TextStyle> => {
    const { style, size, type, color:colorProp } = this.props;
    let fontSize , color;
    switch (size) {
      case "xl":fontSize = 18;break;
      case "lg":fontSize = 16;break;
      case "md":fontSize = 14;break;
      case "sm":fontSize = 12;break;
      case "xs":fontSize = 10;break;
      default: fontSize = 14;
    }
    switch (type) {
      case "default":color = '#333';break;
      case "detail":color = '#989898';break;
      default: color = '#333';break;
    }
    return {
      fontSize:global.FONT_SIZE(fontSize),
      color: colorProp ? colorProp : color,
      ...style
    };
  };

  render() {
    const { text, children, style, size, color, ...options } = this.props;
    return (
      <Text animation={'fadeIn'} style={this.buildStyle()} {...options}>
        {(text || text === '' || text === 0) ? text : children}
      </Text>
    );
  }
}
