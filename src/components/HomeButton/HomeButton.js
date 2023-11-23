import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

const HomeButton = ({ children, style, onPress }) => {
  return (
    <TouchableOpacity style={style} onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
};

export default HomeButton;
