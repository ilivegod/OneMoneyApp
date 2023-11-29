import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Logo from "../../../assets/images/OneLogo.png";
import wave from "../../../assets/images/Onewaving.png";
// import { Icon } from '@iconify/react';
import React, { useState } from "react";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import CustomLink from "../../components/CustomLink";

import { useNavigation } from "@react-navigation/native";

const SignInScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { height } = useWindowDimensions();
  const navigation = useNavigation();

  const onSignInPressed = () => {
    console.warn("Sign in");
    //validate user
    navigation.navigate("HomePage");
  };

  const onForgotPasswordPressed = () => {
    console.warn("Forgot password pressed");

    navigation.navigate("ForgotPassword");
  };

  const onSignUpPressed = () => {
    console.warn("onSignUpPress");

    navigation.navigate("SignUp");
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Image source={Logo} style={styles.logo} resizeMode="contain" />
        {/* <Text style={styles.logo}>OneMoney</Text> */}
        <Text style={styles.HelloText}>Hello Again </Text>
        <Image source={wave} style={styles.wave} resizeMode="contain" />
        <Text style={styles.HelloMessage}>
          It's good to see you back, we missed you.{" "}
        </Text>

        <Text style={styles.MailText}>E-mail</Text>
        <CustomInput
          placeholder=" name@example.com"
          value={username}
          setValue={setUsername}
        />

        <Text style={styles.PasswordText}>Password</Text>
        <CustomInput
          placeholder="Your password"
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

        <TouchableOpacity onPress={onSignUpPressed}>
          <View style={styles.TextLink}>
            <Text style={styles.NoAccount}>
              Don't have an account?{" "}
              <Text style={styles.YellowText}>Sign up</Text>
            </Text>
          </View>
        </TouchableOpacity>
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

  PasswordText: {
    fontWeight: "300",
    // textAlign: 'left',
    justifyContent: "flex-start",
    paddingTop: 20,
  },

  logo: {
    width: "45%",
    maxWidth: 300,
    height: 50,
    position: "relative",
    left: 85,
    top: 20,
  },

  HelloText: {
    position: "relative",
    top: 15,
    fontWeight: "400",
    fontSize: 20,
    paddingTop: 80,
    textAlign: "center",
  },

  HelloMessage: {
    position: "relative",
    top: -10,
    paddingTop: 0,
    paddingBottom: 60,
    color: "#4E4E4E",
    fontSize: 11,
    textAlign: "center",
  },

  NoAccount: {
    position: "absolute",
    top: 20,
    // textAlign: "center",
    alignSelf: "center",
    // paddingTop: 23,
  },

  NoAccountView: {},

  ForgotPassword: {
    paddingTop: 30,
  },

  LoginButton: {
    paddingTop: 30,
  },

  wave: {
    width: "6.5%",
    maxWidth: 300,
    position: "relative",
    left: 237,
    bottom: 18,
  },

  TextLink: {
    backgroundColor: "black",
    color: "#FE9923",
  },

  YellowText: {
    color: "#FE9923",
  },

  root: {
    // alignItems: "center",
    marginTop: 100,
    padding: 15,
  },
});

export default SignInScreen;
