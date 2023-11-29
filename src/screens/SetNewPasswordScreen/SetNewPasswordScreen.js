import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
// import { Icon } from '@iconify/react';
import React, { useState } from "react";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import CustomLink from "../../components/CustomLink";
import RetryButton from "../../components/RetryButton";
import padlock from "../../../assets/images/Lock.png";
// import { TouchableOpacity } from "react-native-gesture-handler";

const SetNewPasswordScreen = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { height } = useWindowDimensions();

  const onSetNewPasswordPressed = () => {
    console.warn("onSetNewPasswordPressed");
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        {/* <Image source={padlock} style={styles.lock} resizeMode="contain" /> */}
        <Image source={padlock} style={styles.lock} />
        {/* <Text style={styles.shield}>OneMoney</Text> */}
        <Text style={styles.HelloText}>Set new password</Text>
        <Text style={styles.HelloMessage}>
          Create a password that you will remember
        </Text>

        <Text style={styles.MailText}>New password</Text>
        <CustomInput
          placeholder="Your password "
          value={newPassword}
          setValue={setNewPassword}
        />

        <Text style={styles.MailText2}>Confirm password</Text>
        <CustomInput
          placeholder="Your password "
          value={confirmPassword}
          setValue={setConfirmPassword}
        />

        <Text>
          {" "}
          {"\n"} {"\n"}
        </Text>

        <CustomButton
          style={styles.LoginButton}
          text=" Set new Password "
          onPress={onSetNewPasswordPressed}
          color="black"
          backgroundColor="white"
        />

        {/* <CustomLink text=" Sign In" onPress={onSignInPressed} /> */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  lock: {
    alignSelf: "center",
    // width: 50,
  },

  MailText: {
    fontWeight: "300",
    // textAlign: 'left',
    justifyContent: "flex-start",
    marginBottom: 10,
  },

  MailText2: {
    fontWeight: "300",
    // textAlign: 'left',
    justifyContent: "flex-start",
    marginTop: 25,
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

export default SetNewPasswordScreen;
