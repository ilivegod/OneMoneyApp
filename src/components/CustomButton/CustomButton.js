import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";

const CustomButton = ({ onPress, text, backgroundColor, color }) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "black",

    padding: 15,
    marginVertical: 15,

    alignItems: "center",
    borderRadius: 100,
  },

  //   container_PRIMARY: {
  //     backgroundColor: "#000000",
  //   },

  //   container_TERTIARY: {},

  text: {
    fontWeight: "600",
    color: "white",
  },

  //   text_TERTIARY: {
  //     color: "#FE9923",
  //   },
});

export default CustomButton;
