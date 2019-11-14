import * as React from 'react';
import { Component } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from "../../components/Icons";

export interface PlusButtonProps {
  focused:boolean
}

export default class PlusButton extends Component<PlusButtonProps>{
  render() {
    return (
      <TouchableOpacity style={styles.container}>
        <Icon
          name={'plus'}
          color={'white'}
          size={24}
          type={"entypo"}
        />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    justifyContent:'center',
    alignItems:'center',
    width: 40,
    height: 40,
    backgroundColor: global.Theme.primaryColor,
    shadowColor: "rgba(233, 68, 106, 0.3)",
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowRadius: 10,
    shadowOpacity: 1,
    borderRadius:20
  }
});
