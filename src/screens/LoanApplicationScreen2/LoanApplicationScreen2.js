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

import React, { useState, useEffect } from "react";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";

import { useNavigation } from "@react-navigation/native";

const LoanApplicationScreen2 = ({ route }) => {
  const navigation = useNavigation();

  const amount = parseFloat(route.params?.amount);

  // Check if 'amount' is NaN or undefined and provide a default value or handle accordingly
  const displayAmount = isNaN(amount) ? "Invalid Amount" : amount.toFixed(2);

  // State variables for loan details
  const [loanAmount, setLoanAmount] = useState("");
  const [loanInterest, setLoanInterest] = useState("");
  const [amountDisbursed, setAmountDisbursed] = useState("");
  const [totalRepaymentAmount, setTotalRepaymentAmount] = useState("");

  // Calculate values based on the retrieved amount
  useEffect(() => {
    const calculatedInterest = (parseFloat(amount) * 0.05).toFixed(2);
    const calculatedTotalRepayment = (
      parseFloat(amount) + parseFloat(calculatedInterest)
    ).toFixed(2);

    setLoanInterest(calculatedInterest);
    setAmountDisbursed(amount);
    setTotalRepaymentAmount(calculatedTotalRepayment);
  }, [amount]);

  const onPreviewPressed = () => {
    //   console.warn("onPreview Pressed");
    navigation.navigate("PendingApproval");

    //navigation.navigate("SignIn");
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.HelloText}>Preview Loan Details</Text>

        <Text style={styles.MailText}>Loan Details</Text>

        <View style={styles.loanAmt}>
          <Text style={styles.FirstText}>Loan Amount</Text>
          <Text style={styles.SecondText}>{amount}</Text>
        </View>
        <View style={styles.loanAmt}>
          <Text style={styles.FirstText}>Loan Interest</Text>
          <Text style={styles.SecondText}>{loanInterest}</Text>
        </View>
        <View style={styles.loanAmt}>
          <Text style={styles.FirstText}>Amount Disbursed To You</Text>
          <Text style={styles.SecondText}>{amountDisbursed}</Text>
        </View>

        <View style={styles.loanAmt}>
          <Text style={styles.FirstText}>Total Repayment Amount</Text>
          <Text style={styles.SecondText}>{totalRepaymentAmount}</Text>
        </View>

        <CustomButton
          style={styles.LoginButton}
          text="Submit for approval"
          onPress={onPreviewPressed}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  loanAmt: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: "-50",
  },

  MailTextText: {
    position: "relative",
    //top: 15,
    fontWeight: "bold",
    fontSize: 30,
    //paddingTop: 80,
    textAlign: "center",
    alignItems: "center",
    marginTop: -40,
    marginBottom: 80,
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

  FirstText: {
    position: "relative",
    top: 15,
    paddingTop: 5,
    paddingBottom: 60,
    color: "#4E4E4E",
    fontSize: 11,
    textAlign: "center",
  },

  SecondText: {
    position: "relative",
    top: 15,
    paddingTop: 5,
    paddingBottom: 60,
    color: "black",
    fontSize: 11,
    textAlign: "center",
    fontWeight: "bold",
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

export default LoanApplicationScreen2;
