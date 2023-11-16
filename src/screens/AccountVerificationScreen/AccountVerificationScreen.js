import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
} from "react-native";
// import { Icon } from '@iconify/react';
import React, { useState } from "react";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import CustomLink from "../../components/CustomLink";

const AccountVerificationScreen = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { height } = useWindowDimensions();

  const onRegisterPressed = () => {
    console.warn("onRegisterPressed");
  };

  const onSignInPressed = () => {
    console.warn("onSignIn Pressed");
  };

  const onForgotPasswordPressed = () => {
    console.warn("Forgot password pressed");
  };

  const onSignUpPressed = () => {
    console.warn("onSignUpPress");
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        {/* <Text style={styles.shield}>OneMoney</Text> */}
        <Text style={styles.HelloText}>Please verify your mail</Text>
        <Text style={styles.HelloMessage}>we've sent a code to ... </Text>

        <Text style={styles.MailText}>Full name</Text>
        <CustomInput
          placeholder="Your name"
          value={fullname}
          setValue={setFullname}
        />

        <Text style={styles.MailTextSecond}>E-mail</Text>
        <CustomInput
          placeholder="name@example.com"
          value={email}
          setValue={setEmail}
        />

        <Text style={styles.PasswordText}>Password</Text>
        <CustomInput
          style={styles.passwordBox}
          placeholder="Your password"
          value={password}
          setValue={setPassword}
          secureTextEntry
        />

        <CustomButton
          style={styles.LoginButton}
          text=" Register "
          onPress={onRegisterPressed}
        />

        <Text style={styles.NoAccount}>
          Already have an account?{" "}
          <Text style={styles.linktext} onPress={onSignInPressed}>
            Sign In
          </Text>
        </Text>

        {/* <CustomLink text=" Sign In" onPress={onSignInPressed} /> */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  MailText: {
    fontWeight: "300",
    // textAlign: 'left',
    justifyContent: "flex-start",
  },

  MailTextSecond: {
    fontWeight: "300",
    justifyContent: "flex-start",
    marginTop: 15,
  },

  PasswordText: {
    fontWeight: "300",
    // textAlign: 'left',
    justifyContent: "flex-start",
    paddingTop: 20,
  },

  passwordBox: {
    marginBottom: 15,
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

  linktext: {
    color: "#FE9923",
  },

  NoAccount: {
    textAlign: "center",
    paddingTop: 23,
  },

  ForgotPassword: {
    paddingTop: 30,
  },

  LoginButton: {
    marginTopTop: 50,
  },

  root: {
    // alignItems: "center",
    paddingTop: 150,
  },
});

export default AccountVerificationScreen;
