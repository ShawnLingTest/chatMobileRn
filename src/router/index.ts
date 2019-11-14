import { createAppContainer, createStackNavigator } from 'react-navigation';
import { createFluidNavigator } from "react-navigation-fluid-transitions";
import TabBar from './TabBar/TabBar';
import LoginPage from "../pages/Login";
import RegisterPage from "../pages/Register";



const LoginFluidNavigator = createFluidNavigator({
  Login:{ screen: LoginPage },
  Register:{ screen: RegisterPage }
});

const AppRouter = createStackNavigator({
  TabBar:TabBar,
  Login:LoginFluidNavigator,
},{
  initialRouteName:'Login',
  defaultNavigationOptions:{
    header:null
  }
});


export default createAppContainer(AppRouter)
