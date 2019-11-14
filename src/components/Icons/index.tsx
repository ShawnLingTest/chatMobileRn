import * as React from 'react';
import { Component } from 'react';
import { TextStyle } from 'react-native';

import getIconType from "./getIconType";
import { IconType } from './getIconType';


export interface IconsProps {
  type?:IconType,
  name:string,
  size?:number,
  solid?:boolean,
  color?:string,
  style?:TextStyle
}

export default class Icons extends Component<IconsProps>{
  render() {
    const { type, name, size, solid, color, style } = this.props;

    const IconComponent = getIconType(type);

    return (
      <IconComponent
        testID="iconIcon"
        style={[
          { backgroundColor: 'transparent' },
          style
        ]}
        name={name}
        size={size}
        solid={solid}
        color={color}
      />
    );
  }
}
