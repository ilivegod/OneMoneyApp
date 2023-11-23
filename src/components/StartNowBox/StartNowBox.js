import { View, Text, Image, ImageBackground, StyleSheet } from "react-native";
import React from "react";
import box from "../../../assets/images/OneMoneyStartnow.png";
import group from "../../../assets/images/OneMoneyGroup1.png";
import group2 from "../../../assets/images/OneMoneyGroup2.png";
import arrows from "../../../assets/images/OneMoneyArrows.png";
import arrow from "../../../assets/images/OneMoneyri_arrow-up-s-line.png";

import HomeButton from "../HomeButton";

const StartNowBox = () => {
  const handlePress = () => {
    console.warn("Home Button was clicked!");
  };
  return (
    // <View>
    //   <Image source={box} resizeMode="contain"></Image>
    //   <Text>StartNowBox</Text>
    // </View>

    <ImageBackground source={box} style={styles.container}>
      <Text style={styles.text}>Lend or Borrow {"\n"} others today!</Text>
      <Image source={group} style={styles.group} resizeMode="contain" />
      <Image source={group2} style={styles.group2} resizeMode="contain" />
      <Image source={arrows} style={styles.arrows} resizeMode="contain" />

      <HomeButton
        onPress={handlePress}
        style={{
          backgroundColor: "black",
          // color: "white",
          width: 106,
          maxwidth: "40%",
          height: 26,
          maxheight: "30%",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 100,

          position: "realtive",
          top: 75,
          left: 22,

          flexDirection: "row",
        }}
      >
        <Text
          style={{
            color: "white",
          }}
        >
          Start Now
        </Text>
        <Image
          source={arrow}
          resizeMode="contain"
          style={{
            position: "relative",
            top: 0,
            left: 0,
            right: 20,
          }}
        />
      </HomeButton>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 116,
    width: 342,
    position: "relative",

    marginBottom: 20,
  },

  text: {
    fontWeight: "700",
    fontSize: 22.2,
    color: "white",
    position: "absolute", // child
    bottom: 48,
    left: 20,
  },

  group: {
    position: "absolute",
    bottom: 30,
    left: 210,
  },

  group2: {
    position: "absolute",
    bottom: 30,
    left: 275,
  },

  arrows: {
    position: "absolute",
    bottom: 50,
    left: 264,
  },
});

export default StartNowBox;
