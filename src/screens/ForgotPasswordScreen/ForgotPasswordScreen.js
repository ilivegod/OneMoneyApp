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
import { sendPasswordResetEmail } from "firebase/auth";
// import { TouchableOpacity } from "react-native-gesture-handler";

const ForgotPasswordScreen = () => {
  const [email, setEmail] = useState("");

  const { height } = useWindowDimensions();

  const onResetPressed = async () => {
    await sendPasswordResetEmail(auth, email)
      .then(() => alert("password reset email sent"))
      .catch((error) => console.log(error.message));
  };

  const onLoginPressed = () => {
    console.warn("onLoginPress");
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        {/* <Image source={padlock} style={styles.lock} resizeMode="contain" /> */}
        <Image source={padlock} style={styles.lock} />
        {/* <Text style={styles.shield}>OneMoney</Text> */}
        <Text style={styles.HelloText}>Reset Password</Text>
        <Text style={styles.HelloMessage}>
          we'll send you an e-mail to reset your password
        </Text>

        <Text style={styles.MailText}>E-mail</Text>
        <CustomInput
          placeholder="name@example.com "
          value={email}
          setValue={setEmail}
        />

        <CustomButton
          style={styles.LoginButton}
          text=" Reset Password "
          onPress={onResetPressed}
          color="black"
          backgroundColor="white"
        />

        <TouchableOpacity onPress={onLoginPressed}>
          <Text style={styles.NoAccount}>
            You remember your password?{" "}
            <Text style={styles.linktext}>Login.</Text>
          </Text>
        </TouchableOpacity>

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

export default ForgotPasswordScreen;
