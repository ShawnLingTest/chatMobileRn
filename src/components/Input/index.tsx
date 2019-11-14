import * as React from 'react';
import { Component } from 'react';
import { View, Text, TextStyle, TextInput } from 'react-native';


export interface InputProps {
  title?:string,

}


export default class Input extends Component<InputProps>{

  constructor(props:InputProps) {
    super(props);
    this.state = {

    }
  }


  renderTitle = () => {
    const { title } = this.props;
    if(title) {
      let style:TextStyle = {
        fontSize: 10,
        color: "rgba(22, 31, 61, 0.5)"
      };
      return (
        <Text
          style={style}
          numberOfLines={1}
        >
          { title }
        </Text>
      )
    }
  };

  renderInputText = () => {
    return (
      <TextInput
        style={{paddingVertical:10}}
        placeholder={'请输入用户名'}
      />
    )
  };

  renderLine = () => {
    return (
      <View
        style={{
          height: 2,
          opacity: 0.1,
          borderStyle: "solid",
          borderWidth: 1,
          borderColor: "#1d1d26"
        }}
      />
    )
  };

  render() {
    return (
      <View>
        {this.renderTitle()}
        {this.renderInputText()}
        {this.renderLine()}
      </View>
    );
  }
}
