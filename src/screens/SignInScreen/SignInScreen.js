import { View, Text, StyleSheet, useWindowDimensions } from "react-native";
// import { Icon } from '@iconify/react';
import React, { useState } from "react";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import CustomLink from "../../components/CustomLink";

const SignInScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { height } = useWindowDimensions();

  const onSignInPressed = () => {
    console.warn("Sign in");
  };

  const onForgotPasswordPressed = () => {
    console.warn("Forgot password pressed");
  };

  return (
    <View style={styles.root}>
      <Text style={styles.logo}>OneMoney</Text>
      <Text style={styles.HelloText}>Hello Again </Text>
      <Text style={styles.HelloMessage}>
        It's good to see you back, we missed you.{" "}
      </Text>

      <Text style={styles.MailText}>E-mail</Text>
      <CustomInput
        placeholder="username"
        value={username}
        setValue={setUsername}
      />

      <Text style={styles.PasswordText}>Password</Text>
      <CustomInput
        placeholder="password"
        value={password}
        setValue={setPassword}
        secureTextEntry
      />

      <CustomLink
        style={styles.ForgotPassword}
        text=" Forgot Password?"
        onPress={onForgotPasswordPressed}
      />

      <CustomButton
        style={styles.LoginButton}
        text=" Login "
        onPress={onSignInPressed}
      />

      <Text style={styles.NoAccount}>Don't have an account?</Text>

      <CustomLink text=" Sign Up" onPress={onForgotPasswordPressed} />
    </View>
  );
};

const styles = StyleSheet.create({
  MailText: {
    fontWeight: "300",
    // textAlign: 'left',
    justifyContent: "flex-start",
  },

  PasswordText: {
    fontWeight: "300",
    // textAlign: 'left',
    justifyContent: "flex-start",
    paddingTop: 20,
  },

  logo: {
    fontWeight: "500",
    fontSize: 24,
    textAlign: "center",
  },

  HelloText: {
    fontWeight: "400",
    fontSize: 20,
    paddingTop: 40,
    textAlign: "center",
  },

  HelloMessage: {
    paddingTop: 5,
    paddingBottom: 60,
    color: "#4E4E4E",
    fontSize: 11,
    textAlign: "center",
  },

  NoAccount: {
    textAlign: "center",
    paddingTop: 23,
  },

  ForgotPassword: {
    paddingTop: 30,
  },

  LoginButton: {
    paddingTop: 30,
  },

  root: {
    // alignItems: "center",
    paddingTop: 150,
  },
});

export default SignInScreen;
