import React from "react";
import {createBottomTabNavigator, TabBarIconProps} from 'react-navigation';
import FeedPage from "../../pages/Feed";
import MessagePage from "../../pages/Message";
import NotificationPage from "../../pages/Notification";
import ProfilePage from "../../pages/Profile";
import TabBarComponent from './TabBarComponent';

import Icon from "../../components/Icons";
import { IconType } from "../../components/Icons/getIconType";
import PlusButton from "./PlusButton";

//icon size
const TAB_ICON_SIZE = 28;

const TabIcon = ({name,color,type}:{name:string,color:string | null,type:IconType}) => (
  <Icon
    type={type}
    name={name}
    size={TAB_ICON_SIZE}
    color={color || '#000'}
  />
);

const TabBar = createBottomTabNavigator({
  Feed:{
    screen:FeedPage,
    navigationOptions:{
      tabBarIcon:({focused,tintColor}:TabBarIconProps) => (
        <TabIcon
          name={'home'}
          color={tintColor}
          type={"font-awesome"}
        />
      )
    }
  },
  Message:{
    screen:MessagePage,
    navigationOptions:{
      tabBarIcon:({focused,tintColor}:TabBarIconProps) => (
        <TabIcon
          name={'message'}
          color={tintColor}
          type={"material"}
        />
      )
    }
  },
  a:{
    screen:MessagePage,
    navigationOptions:{
      tabBarIcon:({focused,tintColor}:TabBarIconProps) => (
        <PlusButton
          focused={focused}
        />
      )
    }
  },
  Notification:{
    screen:NotificationPage,
    navigationOptions:{
      tabBarIcon:({focused,tintColor}:TabBarIconProps) => (
        <TabIcon
          name={'notifications'}
          color={tintColor}
          type={"material"}
        />
      )
    }
  },
  Profile:{
    screen:ProfilePage,
    navigationOptions:{
      hideLink:false,
      tabBarIcon:({focused,tintColor}:TabBarIconProps) => (
        <TabIcon
          name={'home'}
          color={tintColor}
          type={"antdesign"}
        />
      )
    }
  }
},{
  tabBarComponent:(props)=>{
    return (
      <TabBarComponent
        {...props}
        plusIndex={2}
        activeLinkColor={global.Theme.primaryColor}
      />
    )
  },
  tabBarOptions:{
    showLabel:false,
    inactiveTintColor:'#b9bcc5',
    activeTintColor:'#2d3551'
  }
});


export default TabBar
