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
  
  
  import { useNavigation } from "@react-navigation/native";
  
  const LoanApplicationScreen2 = () => {
    
  
    const navigation = useNavigation();
  
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
          
         <View style= {styles.loanAmt}>
            <Text  style={styles.FirstText}>Loan Amount</Text>
            <Text  style={styles.SecondText}>GHS 2,300</Text>
         </View>
         <View style= {styles.loanAmt}>
            <Text style={styles.FirstText}>Loan Interest</Text>
            <Text  style={styles.SecondText}>GHS 2,300</Text>
         </View>
         <View style= {styles.loanAmt}>
            <Text style={styles.FirstText}>Amount Disbursed To You</Text>
            <Text  style={styles.SecondText}>GHS 2,300</Text>
         </View>

         <View style= {styles.loanAmt}>
            <Text style={styles.FirstText}>Total Repayment Amount</Text>
            <Text style={styles.SecondText}>GHS 2,300</Text>
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
        paddingBottom:"-50",
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
  