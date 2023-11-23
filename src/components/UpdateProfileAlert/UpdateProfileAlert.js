import { TouchableOpacity, View, Text, StyleSheet, Image } from "react-native";
import React from "react";

import arrow from "../../../assets/images/OneMoneyarrow-right.png";
import exclamation from "../../../assets/images/OneMoneyalert-circle.png";
import cross from "../../../assets/images/OneMoneyx-close.png";

const UpdateProfileAlert = (
  BigAlertMessage,
  SmallAlertMessage,
  handlePress,
  handleClose
) => {
  return (
    <TouchableOpacity style={styles.BigButton} onPress={handlePress}>
      <Image source={exclamation} style={styles.exclamation} />
      <Text style={styles.BigAlertMessage}>
        {/* {BigAlertMessage} */}
        Update your profile to keep going.
      </Text>
      <TouchableOpacity onPress={handleClose}>
        <Image source={cross} style={styles.cross} />
      </TouchableOpacity>
      <Text style={styles.SmallAlertMessage}>
        {/* {SmallAlertMessage} */}
        This involves updating your profile picture and payment methods
      </Text>
      <Text style={styles.UpdateText}> Update Now </Text>
      <TouchableOpacity onPress={handleClose}>
        <Image source={arrow} style={styles.arrow} />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  BigButton: {
    borderWidth: 1,
    backgroundColor: "#FFF6F5",
    borderColor: "#FDA29B",
    borderRadius: 20,
    padding: 20,
  },

  BigAlertMessage: {
    fontSize: 15,
    position: "relative",
    top: -8,
    left: 10,
    fontWeight: "400",
  },

  cross: {
    position: "relative",
    top: -30,
    left: 280,
    marginBottom: -10,
  },

  SmallAlertMessage: {
    fontSize: 9,
    position: "relative",
    top: -3,
    left: 10,
    fontWeight: "500",
    color: "#797979",
  },

  UpdateText: {
    fontWeight: "600",
    fontSize: 13,
    position: "relative",
    top: 8,
    left: 10,
    marginBottom: -10,
  },

  arrow: {
    width: "5%",
    maxWidth: 300,
    position: "relative",
    left: 95,
    top: 5,
  },

  exclamation: {
    position: "relative",
    left: -13,
    top: 8,
    marginTop: -10,
  },
});

export default UpdateProfileAlert;
