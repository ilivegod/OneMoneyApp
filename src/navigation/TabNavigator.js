import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { View, Text } from "react-native";
import React from "react";

import HomePage from "../screens/HomePage";
import NotificationsScreen from "../screens/NotificationsScreen";
import PortfolioScreen from "../screens/PortfolioScreen";
import SettingsScreen from "../screens/SettingsScreen";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={HomePage}></Tab.Screen>
      <Tab.Screen name="Portfolio" component={PortfolioScreen}></Tab.Screen>
      <Tab.Screen
        name="Notifications"
        component={NotificationsScreen}
      ></Tab.Screen>
      <Tab.Screen name="Settings" component={SettingsScreen}></Tab.Screen>
    </Tab.Navigator>
  );
};

export default TabNavigator;
