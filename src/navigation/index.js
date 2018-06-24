import {
  createBottomTabNavigator,
  createSwitchNavigator
} from "react-navigation";

import LoginScreen from "../screens/LoginScreen";
import MyBetsScreen from "../screens/MyBetsScreen";
import DashboardScreen from "../screens/DashboardScreen";

export const mainNavigator = createBottomTabNavigator(
  {
    Dashboard: DashboardScreen,
    MyBets: MyBetsScreen
  },
  {
    initialRouteName: "Dashboard"
  }
);

export default initialRouteName => {
  return createSwitchNavigator(
    {
      Login: {
        screen: LoginScreen
      },
      Main: mainNavigator
    },
    {
      initialRouteName
    }
  );
};
