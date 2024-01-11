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

import React, { useState } from "react";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import CustomLink from "../../components/CustomLink";
import DropdownList from "../../components/DropdownList";

import { useNavigation } from "@react-navigation/native";

const LoanApplicationScreen = () => {
  const [amount, setAmount] = useState("");

  const navigation = useNavigation();

  const onSignInPressed = () => {
    console.warn("onSignIn Pressed");

    navigation.navigate("SignIn");
  };

  const onPreviewPressed = () => {
    console.warn("onPreview Pressed");
  };

  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const data1 = [
    { label: "Education", value: "1" },
    { label: "Health", value: "2" },
    { label: "Upkeep", value: "3" },
    { label: "Item 4", value: "4" },
    { label: "Item 5", value: "5" },
    { label: "Item 6", value: "6" },
    { label: "Item 7", value: "7" },
    { label: "Item 8", value: "8" },
  ];

  const data2 = [
    { label: "One Month", value: "1" },
    { label: "Two Months", value: "2" },
    { label: "Three Months", value: "3" },
    { label: "Item 4", value: "4" },
    { label: "Item 5", value: "5" },
    { label: "Item 6", value: "6" },
    { label: "Item 7", value: "7" },
    { label: "Item 8", value: "8" },
  ];

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.HelloText}>Apply for a loan</Text>

        <Text style={styles.MailText}>Purpose</Text>
        <DropdownList
          placeholder={!isFocus ? "Education" : "..."}
          data={data1}
        />

        <Text style={styles.MailTextSecond}>Amount</Text>
        <CustomInput
          placeholder="Enter amount"
          value={amount}
          setValue={setAmount}
        />

        <Text style={styles.PasswordText}>Repayment duration</Text>
        <DropdownList
          placeholder={!isFocus ? "One Month" : "..."}
          data={data2}
        />

        <Text style={styles.nB}>
          {" "}
          <Text style={styles.note}>Note:</Text> One Money charges 30% on One
          Month {"\n"} repayment duration making your repayment {"\n"} amount
          GHS 45.56
        </Text>

        <CustomButton
          style={styles.LoginButton}
          text="Preview Loan"
          onPress={onPreviewPressed}
        />
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

  HelloText: {
    position: "relative",
    //top: 15,
    fontWeight: "700",
    fontSize: 20,
    //paddingTop: 80,
    textAlign: "center",
    alignItems: "center",
    marginTop: -40,
    marginBottom: 80,
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

  note: {
    fontWeight: "600",
  },

  nB: {
    marginTop: 30,
    marginBottom: 75,
  },

  root: {
    // alignItems: "center",
    marginTop: 100,
    padding: 15,
  },
});

export default LoanApplicationScreen;
