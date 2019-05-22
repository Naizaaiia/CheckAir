import React from "react";
import { createStackNavigator, createDrawerNavigator } from "react-navigation";

import HomeScreen from "../page/";
import Report from "../page/ReportProblem";
import Send from "../page/SendFeedback";

const Drawer = createDrawerNavigator({
  Home: {
    screen: Report
  },
  Notifications: {
    screen: Send
  }
});

const AppNavigator = createStackNavigator({
  Home: HomeScreen,
  Report: Report,
  Send: Send,

});

export default AppNavigator;
