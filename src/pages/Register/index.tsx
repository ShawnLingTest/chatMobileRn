import * as React from 'react';
import { Component } from 'react';
import { View, StyleSheet, Animated, PixelRatio } from 'react-native';
import Button from "../../components/Button";
import Input from "../../components/Input";
import BlobBg from "../../components/BlobBg";
import Label from "../../components/Label";
import ScrollView from "../../components/ScrollView";
import Glitters from "../../components/Glitters";
import NavigationModule from "../../modules/NavigationModule";



export interface LoginPageProps {

}

export default class RegisterPage extends Component<LoginPageProps>{

  componentDidMount() {
    // console.log('PixelRatio.get()',PixelRatio.get(),global.WINDOW_WIDTH,global.WINDOW_HEIGHT)
  }

  navigateGoBack = () => {
    NavigationModule.goBack();
  };

  navigateForgetPassword = () => {
    NavigationModule.navigate('forgetPassword');
  };

  /**
   * 点击忘记密码
   */
  onClickForgetPassword = () => {
    this.navigateForgetPassword();
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.blobView}>
          <BlobBg
            type={"top"}
          />
          <View style={styles.blobBottomView}>
            <BlobBg
              type={"bottom"}
            />
          </View>
        </View>
        <ScrollView style={{paddingTop:150}}>
          <View style={styles.logoView}>
            <Glitters >
            </Glitters>
          </View>
          <View style={styles.titleContainer}>
            <Label
              text={'您好, 注册'}
              size={"xl"}
              color={"rgba(22, 31, 61, 0.7)"}
            />
            <Label
              text={'欢迎回来注册'}
              size={"xl"}
              color={"rgba(22, 31, 61, 0.7)"}
            />
          </View>
          <View style={{paddingHorizontal:15}}>
            <Input
              title={'用户名'}
            />
            <View style={{height:20}}/>
            <Input
              title={'密码'}
            >
              <Button
                title={'忘记密码'}
                type={"link"}
                onPress={this.onClickForgetPassword}
              />
            </Input>
            <View style={{height:20}}/>
            <Button
              height={52}
              title={'登录'}
              size={"lg"}
            />
            <View style={styles.linkView}>
              <Label
                type={'detail'}
                text={'你还没有账号?'}
              />
              <Button
                type={"link"}
                title={'去注册'}
                onPress={this.navigateGoBack}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  titleContainer:{
    justifyContent:'center',
    alignItems:'center'
  },
  blobView:{
    flex:1,
    position:'absolute',
    top:0,
    height:'100%',
    width:'100%',
  },
  blobBottomView:{
    position:'absolute',
    bottom:0,
    width:'100%'
  },
  linkView:{
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:global.px2dp(60)
  },
  logoView:{
    alignItems:'center',
    alignContent:'center'
  }
});
