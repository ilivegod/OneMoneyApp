import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
  TouchableOpacity,
} from "react-native";
// import { Icon } from '@iconify/react';
import React, { useState } from "react";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import CustomLink from "../../components/CustomLink";
import RetryButton from "../../components/RetryButton";
// import { TouchableOpacity } from "react-native-gesture-handler";

import { useNavigation } from "@react-navigation/native";

const AccountVerificationScreen = () => {
  const [code, setCode] = useState("");

  const [mail, setMail] = useState("sekajunior2014@gmail.com");

  const [timer, setTimer] = useState("");

  const { height } = useWindowDimensions();

  const navigation = useNavigation();

  const onVerifyPressed = () => {
    console.warn("onVerifyPressed");

    //verify user
    navigation.navigate("Sign In");
  };

  const onResendPressed = () => {
    console.warn("onResendPress");
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        {/* <Text style={styles.shield}>OneMoney</Text> */}
        <Text style={styles.HelloText}>Please verify your mail</Text>
        <Text style={styles.HelloMessage}>we've sent a code to {mail}</Text>

        <Text style={styles.MailText}>Confirmation code *</Text>
        <CustomInput
          placeholder="Enter your confirmation code"
          value={code}
          setValue={setCode}
        />

        <RetryButton text="Retry after 666s" />

        <CustomButton
          style={styles.LoginButton}
          text=" Verify "
          onPress={onVerifyPressed}
          color="black"
          backgroundColor="white"
        />

        <TouchableOpacity onPress={onResendPressed}>
          <Text style={styles.NoAccount}>
            Didn't get a code?{" "}
            <Text style={styles.linktext}>Click to resend.</Text>
          </Text>
        </TouchableOpacity>

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
    marginTop: 100,
    padding: 15,
  },
});

export default AccountVerificationScreen;
