import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";

const RetryButton = ({
  onPress,
  text,
  type = "PRIMARY",
  backgroundColor,
  color,
}) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "40%",
    backgroundColor: "#F7F9FC",

    padding: 12,
    marginVertical: 15,

    borderRadius: 100,
    borderWidth: 0.2,
    borderColor: "#515151",

    display: "flex",
    flexDirection: "row",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  //   container_PRIMARY: {
  //     backgroundColor: "#000000",
  //   },

  //   container_TERTIARY: {},

  text: {
    fontWeight: "500",
    color: "#515151",
  },

  //   text_TERTIARY: {
  //     color: "#FE9923",
  //   },
});

export default RetryButton;
