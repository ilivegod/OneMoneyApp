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
import mail from "../../../assets/images/Message.png";
// import { TouchableOpacity } from "react-native-gesture-handler";

const CheckEmailScreen = () => {
  const [email, setEmail] = useState("nicholasosei@gmail.com");

  // const [myText, setMyText] = useState("My Original Text");

  const { height } = useWindowDimensions();

  const GotItPressed = () => {
    console.warn("GotItPressed");
  };

  const onLoginPressed = () => {
    console.warn("onLoginPress");
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        {/* <Image source={padlock} style={styles.lock} resizeMode="contain" /> */}
        <Image source={mail} style={styles.lock} />
        {/* <Text style={styles.shield}>OneMoney</Text> */}
        <Text style={styles.HelloText}>Check email</Text>
        <Text style={styles.HelloMessage}>
          we've sent you instructions for resetting your password {"\n"} to{" "}
          {email}
        </Text>

        {/* <Text style={styles.MailText}>E-mail</Text>
        <CustomInput
          placeholder="name@example.com "
          value={email}
          setValue={setEmail}
        /> */}

        <CustomButton
          style={styles.LoginButton}
          text=" Got it "
          onPress={GotItPressed}
          color="black"
          backgroundColor="white"
        />

        {/* <TouchableOpacity onPress={onLoginPressed}>
          <Text style={styles.NoAccount}>
            You remember your password?{" "}
            <Text style={styles.linktext}>Login.</Text>
          </Text>
        </TouchableOpacity> */}

        <Text style={styles.support}>
          Didn't get any email? Check your junk mail folder. If {"\n"} you still
          don't find it contact support.
        </Text>

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

  support: {
    color: "#4E4E4E",
    textAlign: "center",
    marginTop: 20,
  },

  root: {
    // alignItems: "center",
    paddingTop: 150,
  },
});

export default CheckEmailScreen;
