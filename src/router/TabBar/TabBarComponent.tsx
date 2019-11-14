import * as React from 'react';
import { Component, ReactElement } from 'react';
import {
  Platform,
  View,
  StyleSheet,
  Animated,
  LayoutChangeEvent,
  LayoutRectangle,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';
import {
  SafeAreaView,
  BottomTabBar,
  BottomTabBarProps,
  SafeAreaViewForceInsetValue,
  ThemeColors
} from "react-navigation";
import CrossFadeIcon from "./CrossFadeIcon";


type ThemedColor = {
  light: string,
  dark: string,
};

type TabBarOptions = {
  keyboardHidesTabBar: boolean,
  activeTintColor?: string | ThemedColor,
  inactiveTintColor?: string | ThemedColor,
  activeBackgroundColor?: string | ThemedColor,
  inactiveBackgroundColor?: string | ThemedColor,
  allowFontScaling: boolean,
  showLabel: boolean,
  showIcon: boolean,
  labelStyle: any,
  tabStyle: any,
  adaptive?: boolean,
  style: any,
};

export interface TabBarComponentProps extends TabBarOptions{
  navigation: {state:{ index:number, routes:Array<{key:string,routeName:string}> }},
  descriptors: any,
  jumpTo: any,
  onTabPress: any,
  onTabLongPress: any,
  getAccessibilityLabel: (props: { route: any }) => string,
  getAccessibilityRole: (props: { route: any }) => string,
  getAccessibilityStates: (props: { route: any }) => string[],
  getButtonComponent: ({ route }:{route:any}) => any,
  getLabelText: ({ route }:{route:any}) => any,
  getTestID: (props: { route: any }) => string,
  renderIcon: any,
  dimensions: { width: number, height: number },
  isLandscape: boolean,
  safeAreaInset: {
    top?: SafeAreaViewForceInsetValue,
    right?: SafeAreaViewForceInsetValue,
    bottom?: SafeAreaViewForceInsetValue,
    left?: SafeAreaViewForceInsetValue
  },
  activeLinkColor?:string,
  plusIndex?:number
}

export interface TabBarComponentState {
  layout:LayoutRectangle,
  keyboard:boolean,
  visible:Animated.Value
}

const majorVersion = parseInt(Platform.Version.toString(), 10);
const isIos = Platform.OS === 'ios';
const isIOS11 = majorVersion >= 11 && isIos;

class TouchableWithoutFeedbackWrapper extends React.Component<any> {
  render() {
    const {
      onPress,
      onLongPress,
      testID,
      accessibilityLabel,
      accessibilityRole,
      accessibilityStates,
      ...props
    } = this.props;

    return (
      <TouchableWithoutFeedback
        onPress={onPress}
        onLongPress={onLongPress}
        testID={testID}
        hitSlop={{ left: 15, right: 15, top: 0, bottom: 5 }}
        accessibilityLabel={accessibilityLabel}
        accessibilityRole={accessibilityRole}
        accessibilityStates={accessibilityStates}
      >
        <View {...props} />
      </TouchableWithoutFeedback>
    );
  }
}


export default class TabBarComponent extends Component<TabBarComponentProps,TabBarComponentState>{

  static defaultProps:Partial<TabBarComponentProps> = {
    keyboardHidesTabBar:false,
    safeAreaInset:{ bottom: 'always', top: 'never' },
    activeBackgroundColor: 'transparent',
    inactiveBackgroundColor: 'transparent',
    showIcon:true,
    showLabel:false,
    allowFontScaling:true,
    adaptive:isIOS11,
    activeTintColor: {
      light: '#007AFF',
      dark: '#fff',
    },
    inactiveTintColor: {
      light: '#8e8e93',
      dark: '#7f7f7f',
    },
    plusIndex:-1
  };

  constructor(props:TabBarComponentProps) {
    super(props);
    this.state = {
      layout:{
        x:0,
        y:0,
        width:0,
        height:0
      },
      keyboard:false,
      visible:new Animated.Value(1)
    }
  }

  componentDidMount() {
    if(Platform.OS === 'ios') {
      Keyboard.addListener('keyboardWillShow', this._handleKeyboardShow);
      Keyboard.addListener('keyboardWillHide', this._handleKeyboardHide);
    }else{
      Keyboard.addListener('keyboardDidShow', this._handleKeyboardShow);
      Keyboard.addListener('keyboardDidHide', this._handleKeyboardHide);
    }
  }

  componentWillUnmount() {
    if (Platform.OS === 'ios') {
      Keyboard.removeListener('keyboardWillShow', this._handleKeyboardShow);
      Keyboard.removeListener('keyboardWillHide', this._handleKeyboardHide);
    } else {
      Keyboard.removeListener('keyboardDidShow', this._handleKeyboardShow);
      Keyboard.removeListener('keyboardDidHide', this._handleKeyboardHide);
    }
  }

  _handleKeyboardShow = () =>
    this.setState({ keyboard: true }, () =>
      Animated.timing(this.state.visible, {
        toValue: 0,
        duration: 150,
        useNativeDriver: true,
      }).start()
    );

  _handleKeyboardHide = () =>
    Animated.timing(this.state.visible, {
      toValue: 1,
      duration: 100,
      useNativeDriver: true,
    }).start(() => {
      this.setState({ keyboard: false });
    });


  _handleLayout = (e:LayoutChangeEvent) => {
    const { layout } = this.state;
    const { height, width } = e.nativeEvent.layout;
    if( height === layout.height && width === layout.width) return;
    console.log('layout',layout)
    this.setState({
      layout:layout
    })
  };

  getActiveBackgroundColor = () => {
    let { activeBackgroundColor } = this.props;
    if(!activeBackgroundColor) {
      return;
    }else if (typeof activeBackgroundColor === 'string') {
      return activeBackgroundColor;
    }
    return activeBackgroundColor;
  };

  getInactiveBackgroundColor = () => {
    let { inactiveBackgroundColor } = this.props;
    if (!inactiveBackgroundColor) {
      return;
    } else if (typeof inactiveBackgroundColor === 'string') {
      return inactiveBackgroundColor;
    }

    return inactiveBackgroundColor;
  };

  getActiveTintColor = () => {
    let { activeTintColor } = this.props;
    if (!activeTintColor) {
      return;
    } else if (typeof activeTintColor === 'string') {
      return activeTintColor;
    }

    return activeTintColor;
  };

  getInactiveTintColor = () => {
    let { inactiveTintColor } = this.props;
    if (!inactiveTintColor) {
      return;
    } else if (typeof inactiveTintColor === 'string') {
      return inactiveTintColor;
    }

    return inactiveTintColor;
  };

  renderLink = ({ route, focused }:{ route:any, focused:boolean }) => {
    const { activeLinkColor } = this.props;
    let backgroundColor = focused
      ? activeLinkColor
      : 'rgba(0,0,0,0)';
    return (
      <View
        style={[
          styles.link,
          { backgroundColor },
        ]}
      />
    )
  };

  renderIcon = ({ route, focused }:{ route:any, focused:boolean }) => {
    const { renderIcon, showIcon } = this.props;
    if(!showIcon) return null;

    const activeTintColor = this.getActiveTintColor();
    const inactiveTintColor = this.getInactiveTintColor();
    const activeOpacity = focused ? 1 : 0;
    const inactiveOpacity = focused ? 0 : 1;

    return (
      <CrossFadeIcon
        route={route}
        horizontal={false}
        activeOpacity={activeOpacity}
        inactiveOpacity={inactiveOpacity}
        activeTintColor={activeTintColor}
        inactiveTintColor={inactiveTintColor}
        renderIcon={renderIcon}
        style={[
          styles.iconWithExplicitHeight,
          {flex:1}
        ]}
      />
    )
  };

  render(){
    const {
      keyboardHidesTabBar,
      safeAreaInset,
      navigation,
      onTabPress,
      style,
      tabStyle,
      plusIndex
    } = this.props;

    const { routes } = navigation.state;

    const tabBarStyle = [
      styles.tabBar,
      styles.tabBarRegular,
      style
    ];

    const activeBackgroundColor = this.getActiveBackgroundColor();
    const inactiveBackgroundColor = this.getInactiveBackgroundColor();

    return (
      <Animated.View
        style={[
          styles.container,
          keyboardHidesTabBar
            ? {
              transform: [
                {
                  translateY: this.state.visible.interpolate({
                    inputRange: [0, 1],
                    outputRange: [this.state.layout.height, 0],
                  }),
                },
              ],
              }
            :null
        ]}
        pointerEvents={
          keyboardHidesTabBar && this.state.keyboard ? 'none' : 'auto'
        }
        onLayout={this._handleLayout}
      >
        <SafeAreaView style={tabBarStyle} forceInset={safeAreaInset}>
          {routes.map((route,index) => {
            const focused = index === navigation.state.index;
            const scene = { route, focused };

            const testID = this.props.getTestID({route});

            const backgroundColor = focused
              ? activeBackgroundColor
              : inactiveBackgroundColor;

            const ButtonComponent =
              this.props.getButtonComponent({route}) ||
              TouchableWithoutFeedbackWrapper;

            const accessibilityLabel = this.props.getAccessibilityLabel({
              route,
            });

            const accessibilityRole = this.props.getAccessibilityRole({
              route,
            });

            const accessibilityStates = this.props.getAccessibilityStates(
              scene
            );

            const isPlus = plusIndex === index;

            return (
              <ButtonComponent
                key={route.key}
                onPress={() => isPlus ? null : onTabPress({route})}
                onLongPress={() => isPlus ? null : onTabPress({route})}
                testID={testID}
                accessibilityLabel={accessibilityLabel}
                accessibilityRole={accessibilityRole}
                accessibilityStates={accessibilityStates}
                style={[
                  styles.tab,
                  { backgroundColor },
                  styles.tabPortrait,
                  tabStyle
                ]}
              >
                {!isPlus && this.renderLink(scene)}
                {this.renderIcon(scene)}
              </ButtonComponent>
            )
          })}
        </SafeAreaView>
      </Animated.View>
    )
  }
}

const DEFAULT_HEIGHT = 49;

const styles = StyleSheet.create({
  container:{
    left:0,
    right:0,
    bottom:0,
    elevation:8
  },
  tabBar:{
    borderTopWidth:StyleSheet.hairlineWidth,
    flexDirection:'row',
    borderTopColor:ThemeColors.light.headerBorder,
    backgroundColor:ThemeColors.light.header
  },
  tabBarRegular: {
    height: DEFAULT_HEIGHT,
  },
  tab:{
    flex:1,
    alignItems: isIos ? 'center' : 'stretch',
  },
  tabPortrait: {
    justifyContent: 'flex-end',
    flexDirection: 'column',
  },
  iconWithExplicitHeight:{
    height: DEFAULT_HEIGHT
  },
  link:{
    width:'70%',
    height:3,
    borderBottomLeftRadius:5,
    borderBottomRightRadius:5
  }
});
