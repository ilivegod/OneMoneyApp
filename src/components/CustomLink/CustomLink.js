import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";

const CustomLink = ({ onPress, text }) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,

    alignItems: "flex-end",
  },

  text: {
    color: "#FE9923",
    textDecorationLine: "underline",
  },
});

export default CustomLink;
