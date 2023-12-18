import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import profilePicture from "../../../assets/images/OneMoneyCapa_2.png";

const NameHeader = (fullName, nameMessage) => {
  return (
    <View style={styles.container}>
      <Image
        source={profilePicture}
        style={styles.profile}
        resizeMode="contain"
      />
      <View>
        {/* <Text style={style.fullName}> Hi {fullName}(" "),</Text> */}
        <Text style={styles.fullName}> Hi Nana Ama,</Text>
        {/* <Text style={style.nameMessage}>{nameMessage}</Text> */}
        <Text style={styles.nameMessage}>Access loans from us today!</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    right: 10,

    flexDirection: "row",
    marginTop: 25,
    marginBottom: 25,
  },

  profile: {
    width: "20%",
    maxWidth: 300,
  },

  fullName: {
    fontSize: 26,
    fontWeight: "600",
    textAlign: "left",
  },

  nameMessage: {
    fontWeight: "300",
    textAlign: "left",
    position: "relative",
  },
});

export default NameHeader;
