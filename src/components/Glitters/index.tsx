import * as React from 'react';
import { Component } from 'react';
import { View } from 'react-native';
import Svg,{
  Defs,
  LinearGradient,
  Stop,
  G,
  Circle
} from "react-native-svg";

export default class Glitters extends Component{
  render() {
    return (
      <Svg width="202px" height="72px" viewBox="0 0 202 72">
        <Defs>
          <LinearGradient x1="50%" y1="0%" x2="50%" y2="97.0872471%" id="linearGradient-1">
            <Stop stopColor="#F6DC79" offset="0%" />
            <Stop stopColor="#FF9E7B" offset="100%" />
          </LinearGradient>
        </Defs>
        <G id="UI" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <G id="020_signup" transform="translate(-87.000000, -190.000000)" fill="url(#linearGradient-1)">
            <G id="Glitters" transform="translate(87.000000, 190.000000)">
              <Circle id="Oval-Copy-4" cx="165" cy="28" r="2" />
              <Circle id="Oval-Copy-7" cx="34" cy="43" r="4" />
              <Circle id="Oval-Copy-5" cx="182.5" cy="3.5" r="3.5" />
              <Circle id="Oval-Copy-8" cx="17" cy="9" r="2" />
              <Circle id="Oval-Copy-6" cx="197" cy="58" r="5" />
              <Circle id="Oval-Copy-9" cx="3" cy="69" r="3" />
            </G>
          </G>
        </G>
      </Svg>
    );
  }
}
