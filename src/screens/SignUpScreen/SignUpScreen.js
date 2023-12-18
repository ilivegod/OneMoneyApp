import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
  TouchableOpacity,
} from "react-native";
// import { Icon } from '@iconify/react';
import Logo from "../../../assets/images/OneLogo.png";
import React, { useState } from "react";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import CustomLink from "../../components/CustomLink";

import { useNavigation } from "@react-navigation/native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase/firebase";

const SignUpScreen = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { height } = useWindowDimensions();

  const navigation = useNavigation();

  // const onRegisterPressed = () => {
  //   console.warn("onRegisterPressed");

  //   //Register user
  //   navigation.navigate("AccountVerification");
  // };

  // handle sign up function to add to the button in order for firebase to work.
  const onRegisterPressed = async () => {
    setLoading(true);
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setLoading(false);
        alert("account created succesfully :)");
      })
      .catch((err) => {
        setLoading(false);
        alert(err.message);
      });
    //validate user
    //navigation.navigate("HomePage");
  };

  const onSignInPressed = () => {
    console.warn("onSignIn Pressed");

    navigation.navigate("SignIn");
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
        <Image source={Logo} style={styles.logo} resizeMode="contain" />
        <Text style={styles.HelloText}>Let's get you started</Text>
        <Text style={styles.HelloMessage}>
          Sign up to enjoy amazing loan offers{" "}
        </Text>

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
          text={loading ? "Creating account..." : "Register"}
          onPress={onRegisterPressed}
        />

        <TouchableOpacity onPress={onSignInPressed}>
          <View style={styles.TextLink}>
            <Text style={styles.NoAccount}>
              Already have an account?{" "}
              <Text style={styles.YellowText}>Sign In</Text>
            </Text>
          </View>
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
    top: 15,
    paddingTop: 5,
    paddingBottom: 60,
    color: "#4E4E4E",
    fontSize: 11,
    textAlign: "center",
  },

  // linktext: {
  //   color: "#FE9923",
  // },

  // NoAccount: {
  //   textAlign: "center",
  //   paddingTop: 23,
  // },

  NoAccount: {
    position: "absolute",
    top: 20,
    // textAlign: "center",
    alignSelf: "center",
    // paddingTop: 23,
  },

  TextLink: {
    backgroundColor: "black",
    color: "#FE9923",
  },

  YellowText: {
    color: "#FE9923",
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

export default SignUpScreen;
