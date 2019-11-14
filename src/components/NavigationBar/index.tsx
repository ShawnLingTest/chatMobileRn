import * as React from 'react';
import {Component, ReactElement} from 'react';
import { Dimensions, View, StatusBar, StatusBarStyle, StyleSheet, ViewStyle, Platform, LayoutChangeEvent} from 'react-native';
import NavigationTitle from './NavigationTitle';

export interface NavigationBarProps {
  animated?:boolean,
  statusBarHidden?:boolean,
  statusBarColor?:string,
  statusBarStyle?:StatusBarStyle,
  type?: 'android' | 'ios' | 'auto',
  onLayout?: (e:LayoutChangeEvent) => void,
  title?:string | ReactElement,
}

export default class NavigationBar extends Component<NavigationBarProps>{

  static defaultProps:Partial<NavigationBarProps> = {
    animated:true,
    type:'ios'
  };

  private navBarContentHeight = 66;

  private barHeight:number = 0;
  private screenWidth:number = 0;

  get statusBarHeight () {
    if(Platform.OS === 'ios') {
      return global.isIPhoneX ? 44 : 20;
    }else if(Platform.OS === 'android'){
      if (Platform.Version > 20) return StatusBar.currentHeight || 0;
      return 0;
    }
    return 20;
  };

  onLayout = (e:LayoutChangeEvent) => {
    const { nativeEvent:{ layout } } = e;
    const { width, height } = layout;
    if(height !== this.barHeight){
      this.barHeight = height;
    }
    let { width:windowWidth } = Dimensions.get('window');
    if(windowWidth !== this.screenWidth) {
      this.screenWidth = width;
      this.forceUpdate();
    }
    this.props.onLayout && this.props.onLayout(e);
  };

  buildStyle () {
    const { type } = this.props;
    const navBarContentHeight = this.navBarContentHeight;

    let justifyContent:'space-between' | 'flex-end';
    switch (type === 'auto' ? Platform.OS : type) {
      case 'ios': justifyContent = 'space-between'; break;
      case 'android': justifyContent = 'flex-end'; break;
      default: justifyContent = 'space-between'; break;
    }

    let style:ViewStyle = {
      height:navBarContentHeight + this.statusBarHeight,
      backgroundColor: 'white',
      shadowColor: "rgba(165, 165, 165, 0.07)",
      shadowOffset: {
        width: 0,
        height: 7
      },
      shadowRadius: 15,
      shadowOpacity: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent
    };
    return style;
  }

  renderBackground () {
    let backgroundViewStyle:ViewStyle = {
      // backgroundColor: 'rgba(0, 0, 0, 0)',
      backgroundColor:'white',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    };
    return <View style={backgroundViewStyle}/>
  }

  renderTitle () {
    let { title } = this.props;
    let titleViewStyle:ViewStyle = {
      position: 'absolute',
      top:this.statusBarHeight,
      left:0,
      right:0,
      height:this.navBarContentHeight,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    };
    if(typeof title === 'string') {
      title = (
        <NavigationTitle
          text={title}
        />
      )
    }
    return <View style={titleViewStyle}>{title}</View>;
  }

  renderRight () {

  };

  renderStatusBar () {
    const { statusBarColor, animated, statusBarHidden, statusBarStyle } = this.props;
    return (
      <StatusBar
        backgroundColor={statusBarColor}
        translucent={true}
        animated={animated}
        hidden={statusBarHidden}
        barStyle={statusBarStyle}
      />
    )
  }

  render() {
    let fs = StyleSheet.flatten(this.buildStyle());
    return (
      <View style={fs} onLayout={this.onLayout}>
        {this.renderStatusBar()}
        {this.renderBackground()}
        {this.renderTitle()}
        {this.renderRight()}
      </View>
    );
  }
}

const style = StyleSheet.create({

});
