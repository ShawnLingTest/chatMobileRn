import * as React from 'react';
import { Component } from 'react';
import { TextStyle, TextProps } from 'react-native';
import * as Animatable from 'react-native-animatable';

export interface NavigationTitleProps extends TextProps{
  text?:string,
  style?:TextStyle
}

export default class NavigationTitle extends Component<NavigationTitleProps>{

  static defaultProps:Partial<NavigationTitleProps> = {
    numberOfLines:1,
    allowFontScaling:false
  };

  render() {
    let { style, text, ...others } = this.props;
    let textStyle:TextStyle = {
      flex:1,
      paddingLeft: 4,
      paddingRight: 4,
      textAlign: 'center',
      overflow: 'hidden',
      color:global.Theme.defaultTextColor,
      opacity:.8,
      fontSize:global.FONT_SIZE(18),
      fontWeight:'bold',
      ...style
    };
    return (
      <Animatable.Text style={textStyle} animation={'fadeIn'} {...others}>
        {text}
      </Animatable.Text>
    );
  }
}
