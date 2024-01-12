import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { View, Text, Image } from "react-native";
import React from "react";

import HomePage from "../screens/HomePage";
import NotificationsScreen from "../screens/NotificationsScreen";
import PortfolioScreen from "../screens/PortfolioScreen";
import SettingsScreen from "../screens/SettingsScreen";
import HomeIcon from "../../assets/images/Iconly/Curved/Bold/Home.png";
import portfolioIcon from "../../assets/images/Iconly/Curved/Bold/Document.png";
import NotifIcon from "../../assets/images/Iconly/Curved/Bold/Notification.png";
import SettingsIcon from "../../assets/images/Iconly/Curved/Bold/Setting.png";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarInactiveTintColor: "#C2C2C2",
        tabBarActiveTintColor: "black",
        tabBarStyle: {},
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomePage}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: (color, size) => (
            <Image source={HomeIcon} color={color} size={size} />
          ),
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="Portfolio"
        component={PortfolioScreen}
        options={{
          tabBarLabel: "Portfolio",
          tabBarIcon: (color, size) => (
            <Image source={portfolioIcon} color={color} size={size} />
          ),
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="Notifications"
        component={NotificationsScreen}
        options={{
          tabBarLabel: "Notifications",
          tabBarIcon: (color, size) => (
            <Image source={NotifIcon} color={color} size={size} />
          ),
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarLabel: "Settings",
          tabBarIcon: (color, size) => (
            <Image source={SettingsIcon} color={color} size={size} />
          ),
        }}
      ></Tab.Screen>
    </Tab.Navigator>
  );
};

export default TabNavigator;
