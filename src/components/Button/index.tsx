import * as React from 'react';
import { Component } from 'react';
import { TouchableOpacity, TouchableOpacityProps, Text, ViewStyle, TextStyle } from 'react-native';
import { View } from 'react-native-animatable';

// const TouchableOpacityAnimatable = createAnimatableComponent(TouchableOpacity);

export interface ButtonProps extends TouchableOpacityProps{
  title?: string,
  height?: number,
  type?: 'primary' | 'link',
  size?: 'sm' | 'md' | 'lg' | 'xl' | number,
  style?: ViewStyle,
  titleStyle?: TextStyle
}


export default class Button extends Component<ButtonProps>{

  static defaultProps:Partial<ButtonProps> = {
    type:"primary",
    size:'md'
  };

  buildStyle = () => {
    const { disabled, style, size, height, type } = this.props;
    let viewStyle:ViewStyle = {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    };
    switch (size) {
      case "sm":
        viewStyle.borderRadius = 3;
        viewStyle.paddingVertical = 4;
        viewStyle.paddingHorizontal = 8;
        break;
      case "md":
        viewStyle.borderRadius = 4;
        viewStyle.paddingVertical = 6;
        viewStyle.paddingHorizontal = 12;
        break;
      case "lg":
        viewStyle.borderRadius = 6;
        viewStyle.paddingVertical = 8;
        viewStyle.paddingHorizontal = 16;
        break;
      case "xl":
        viewStyle.borderRadius = 8;
        viewStyle.paddingVertical = 10;
        viewStyle.paddingHorizontal = 20;
        break;
    }
    switch (type) {
      case "primary":
          viewStyle.backgroundColor = global.Theme.primaryColor;
          viewStyle.borderColor = global.Theme.primaryColor;
        break;
      case "link":
        viewStyle.backgroundColor = 'rgba(0,0,0,0)';
        viewStyle.borderColor = 'rgba(0,0,0,0)';
        break;
    }
    if(disabled) viewStyle.opacity = .3;
    return {
      ...viewStyle,
      height,
      ...style
    };
  };

  renderText = () => {
    const { title, type, size, titleStyle } = this.props;
    let fontSize, color;
    switch (size) {
      case "xl":fontSize = 18;break;
      case "lg":fontSize = 16;break;
      case "md":fontSize = 14;break;
      case "sm":fontSize = 12;break;
      default: fontSize = 14;break;
    }
    switch (type) {
      case "primary":color = 'white';break;
      case "link":color = global.Theme.primaryColor;break;
      default:color = 'white';break;
    }
    return (
      <Text style={[{
        color,
        fontSize:global.FONT_SIZE(fontSize)
      },titleStyle]}>
        {title}
      </Text>
    )
  };

  render() {
    const { style, type, size, titleStyle, ...options } = this.props;
    return (
      <View animation={'fadeIn'}>
        <TouchableOpacity style={this.buildStyle()} {...options} >
          {this.renderText()}
        </TouchableOpacity>
      </View>
    );
  }
}
