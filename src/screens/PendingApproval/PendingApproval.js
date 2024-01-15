import {
    View,
    Text,
    Image,
    StyleSheet,
    useWindowDimensions,
    ScrollView,
    TouchableOpacity,
  } from "react-native";
    import coins from '../../assets/images/coins.png';
  // import { Icon } from '@iconify/react';
  
  import React, { useState } from "react";
  import CustomInput from "../../components/CustomInput";
  import CustomButton from "../../components/CustomButton";
  
  
  import { useNavigation } from "@react-navigation/native";
import PendingApproval from ".";
  
  const ApplicPendingApproval = () => {
    
  
    const navigation = useNavigation();
  
    const onPreviewPressed = () => {
      console.warn("onPreview Pressed");
  
      //navigation.navigate("");
    };
  
    
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
          <Text style={styles.HelloText}>Pending Approval</Text>
  
          <Image source={coins} style={styles.imageStyle} />
          
         </View>

         <View style= {styles.Message}>
            <Text style={styles.MessageText}>Your loan of 3000 GHS is currently Pending 
            approval by our team. Please feel free to reach
            out to <Text style={styles.hyperlink}>support@onemoney.com</Text> for any other assistance</Text>
            
         </View>
  
  
      </ScrollView>
    );
  };
  
  const styles = StyleSheet.create({


    Message: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingBottom:"-50",
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
  
    MessageText: {
      position: "relative",
      top: 15,
      paddingTop: 5,
      paddingBottom: 60,
      color: "black",
      fontSize: 11,
      textAlign: "center",
    },

    imageStyle: {
        width: 80,          // set width to 80 units (adjust as needed)
        height: 80,         // set height to 80 units (same as width to make it square)
        resizeMode: 'cover',// or 'contain' based on how you want the image to scale
        alignSelf: 'center', // center the image horizontally
        marginTop: 20,       // add some margin from the top of the view
        marginBottom: 20,    // add some margin from the bottom if needed
        borderRadius: 10,    // for rounded corners, adjust as needed or remove
        borderWidth: 1,      // border width
        borderColor: 'black', // border color
      },

    hyperlink: {
        color: "#FE9923",     // Orange color for the hyperlink
        textDecorationLine: 'underline',  // Add an underline to indicate it's a link
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
  
  export default PendingApproval;
  