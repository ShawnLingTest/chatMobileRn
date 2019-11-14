
import { NavigationActions, NavigationParams, NavigationContainerComponent } from "react-navigation";

let _navigation:NavigationContainerComponent;

const setNavigatorRef = (navigatorRef:any) => {
  _navigation = navigatorRef;
};

const navigate = (routeName:string, params?:NavigationParams) => {
  _navigation.dispatch(
    NavigationActions.navigate({
      routeName,
      params
    })
  )
};

const goBack = (routeName?:string) => {
  _navigation.dispatch(
    NavigationActions.back({key:routeName})
  )
};

export default {
  navigate,
  setNavigatorRef,
  goBack
}
