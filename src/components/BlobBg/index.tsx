import * as React from 'react';
import { Component } from 'react';
import {Animated, View, ViewStyle} from 'react-native';
import Svg, {Circle, Defs, G, LinearGradient, Stop} from "react-native-svg";
import * as Animatable from 'react-native-animatable';


export interface BlobBgProps {
  type?: 'top' | 'bottom'
  // style?:ViewStyle
}

export default class BlobBg extends Component<BlobBgProps>{

  static defaultProps:BlobBgProps = {
    type:'top'
  };

  renderTopView = () => {
    return (
      <Animatable.View animation={'fadeIn'}>
        <Svg width="100%" height="202px" viewBox="0 0 375 202">
          <Defs>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-1">
              <Stop stopColor={'#F679A3'} offset='0' />
              <Stop stopColor={'#E9446A'} offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="97.0872471%" id="linearGradient-2">
              <Stop stopColor="#F6DC79" offset="0%" />
              <Stop stopColor="#FF9E7B" offset="100%" />
            </LinearGradient>
          </Defs>
          <G id="UI" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <G id="010_Signin">
              <G id="Blob_BG-2" transform="translate(-50.000000, -176.000000)">
                <G id="Blob_BG">
                  <Circle id="Oval" fill="url(#linearGradient-1)" cx="354" cy="188" r="188" />
                  <Circle id="Oval-Copy" fill="url(#linearGradient-2)" cx="118" cy="162" r="118" />
                </G>
              </G>
            </G>
          </G>
        </Svg>
      </Animatable.View>
    )
  };

  renderBottomView = () => {
    let viewStyle:ViewStyle = {
      flexDirection:'row',
      justifyContent:'flex-end',
    };
    return (
      <Animatable.View animation={'fadeIn'} style={viewStyle}>
        <Svg width="196px" height="67px" viewBox="0 0 196 67">
          <Defs>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-1">
              <Stop stopColor="#F679A3" offset="0%" />
              <Stop stopColor="#E9446A" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="97.0872471%" id="linearGradient-2">
              <Stop stopColor="#F6DC79" offset="0%" />
              <Stop stopColor="#FF9E7B" offset="100%" />
            </LinearGradient>
          </Defs>
          <G id="UI" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" opacity="0.200000003">
            <G id="010_Signin" transform="translate(-179.000000, -745.000000)">
              <G id="Bottom_Blob" transform="translate(136.000000, 741.000000)">
                <Circle id="Oval" fill="url(#linearGradient-1)" cx="276" cy="202.583374" r="202" />
                <Circle id="Oval-Copy" fill="url(#linearGradient-2)" transform="translate(123.000000, 165.000000) scale(1, -1) translate(-123.000000, -165.000000) " cx="123" cy="165" r="123" />
              </G>
            </G>
          </G>
        </Svg>
      </Animatable.View>
    )
  };

  render() {
    const { type } = this.props;
    return type === 'top' ? this.renderTopView() : this.renderBottomView()
  }
}
