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
import RetryButton from "../../components/RetryButton";

const AccountVerificationScreen = () => {
  const [code, setCode] = useState("");

  const { height } = useWindowDimensions();

  const onConfirmPressed = () => {
    console.warn("onConfirmPressed");
  };

  const onResendPressed = () => {
    console.warn("onResendPress");
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        {/* <Text style={styles.shield}>OneMoney</Text> */}
        <Text style={styles.HelloText}>Please verify your mail</Text>
        <Text style={styles.HelloMessage}>we've sent a code to ... </Text>

        <Text style={styles.MailText}>Confirmation code *</Text>
        <CustomInput
          placeholder="Enter your confirmation code"
          value={code}
          setValue={setCode}
        />

        <RetryButton text="Retry after 115s" />

        <CustomButton
          style={styles.LoginButton}
          text=" Verify "
          onPress={onConfirmPressed}
          color="black"
          backgroundColor="white"
        />

        <Text style={styles.NoAccount}>
          Didn't get a code?{" "}
          <Text style={styles.linktext} onPress={onResendPressed}>
            Click to resend.
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
    marginBottom: 10,
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
    textDecorationLine: "underline",
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
