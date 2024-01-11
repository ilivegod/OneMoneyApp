import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from "react-native";
import SignInScreen from "./src/screens/SignInScreen";
import SignUpScreen from "./src/screens/SignUpScreen";
import AccountVerificationScreen from "./src/screens/AccountVerificationScreen";
import SplashScreen from "./src/screens/SplashScreen";
//import Navigation from "./src/navigation";
import HomePage from "./src/screens/HomePage";
import ForgotPasswordScreen from "./src/screens/ForgotPasswordScreen/ForgotPasswordScreen";
import CheckEmailScreen from "./src/screens/CheckEmailScreen";
import SetNewPasswordScreen from "./src/screens/SetNewPasswordScreen";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState } from "react";
import LoanApplicationScreen from "./src/screens/LoanApplicationScreen";
import NotificationsScreen from "./src/screens/NotificationsScreen";
import TabNavigator from "./src/navigation/TabNavigator";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {/* <View style={styles.root}>
        <SetNewPasswordScreen />
        <StatusBar style="auto" />
    </View> */}

      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen
          name="AccountVerification"
          component={AccountVerificationScreen}
        />
        <Stack.Screen name="HomePage" component={TabNavigator} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="CheckEmail" component={CheckEmailScreen} />
        <Stack.Screen name="SetNewPassword" component={SetNewPasswordScreen} />
        <Stack.Screen
          name="LoanApplication"
          component={LoanApplicationScreen}
        />
        <Stack.Screen name="Notifications" component={NotificationsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  root: {
    // flex: 1,
    // paddingHorizontal: 17,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },

  // Nav: {
  //   marginTop: 50,
  // },
});
