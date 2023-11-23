import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  ScrollView,
  useWindowDimensions,
} from "react-native";
import LogoWhite from "../../../assets/images/OneLogoWhite.png";
import SplashText from "../../../assets/images/OneSplashText.png";
import React from "react";
import CustomButton from "../../components/CustomButton";
import FlatButton from "../../components/FlatButton";

const SplashScreen = () => {
  const { height } = useWindowDimensions();

  const OnGetStartedPressed = () => {
    console.warn("OnGetStartedPressed");
  };

  return (
    // <View style={styles.ViewBox}>
    <ImageBackground
      style={styles.BackImage}
      resizeMode={"cover"}
      source={require("../../../assets/images/OnePhoto.png")}
    >
      <Image source={LogoWhite} style={styles.logo} />
      <Image source={SplashText} style={styles.splashText} />
      <FlatButton text="Get Started" onPress={OnGetStartedPressed} />
    </ImageBackground>
    // </View>
  );
};

const styles = StyleSheet.create({
  //   ViewBox: {
  //     width: "100%",
  //   },
  BackImage: {
    marginLeft: -18,
    width: 400,
    height: "100%",
  },

  logo: {
    position: "relative",
    top: 80,
    left: 30,
  },

  splashText: {
    position: "relative",
    top: 500,
    left: 30,
  },

  GetStartedButton: {
    paddingTop: 190,
    padding: 50,
  },
});

export default SplashScreen;
