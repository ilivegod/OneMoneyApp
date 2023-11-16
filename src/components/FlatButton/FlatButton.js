import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

const FlatButton = ({ text, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "90%",
    backgroundColor: "white",

    padding: 14,
    marginVertical: 10,
    marginHorizontal: 20,

    alignItems: "center",
    borderRadius: 100,

    position: "relative",
    top: 550,
  },

  buttonText: {
    fontWeight: "600",
    color: "black",
  },
});

export default FlatButton;
