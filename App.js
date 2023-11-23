import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from "react-native";
import SignInScreen from "./src/screens/SignInScreen";
import SignUpScreen from "./src/screens/SignUpScreen";
import AccountVerificationScreen from "./src/screens/AccountVerificationScreen";
import SplashScreen from "./src/screens/SplashScreen";
import Navigation from "./src/navigation";
import HomePage from "./src/screens/HomePage";
import { useState } from "react";

export default function App() {
  return (
    <View style={styles.root}>
      <HomePage />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingHorizontal: 17,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
