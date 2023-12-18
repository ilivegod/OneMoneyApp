import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useState } from "react";
import NameHeader from "../../components/NameHeader";
import UpdateProfileAlert from "../../components/UpdateProfileAlert/UpdateProfileAlert";
import StartNowBox from "../../components/StartNowBox/StartNowBox";
import BorrowersList from "../../components/BorrowersList/BorrowersList";
import Footer from "../../components/Footer/Footer";
import HomeButton from "../../components/HomeButton";
import { useNavigation } from "@react-navigation/native";
import plus from "../../../assets/images/gala_add.png";

const HomePage = () => {
  const navigation = useNavigation();

  const createAppPress = () => {
    console.warn("createAppPress");
  };

  // useLayoutEffect(() => {
  //   navigation.setOptions({
  //     headerShown: false,
  //   });
  // }, []);

  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
          <UpdateProfileAlert />
          <NameHeader dimension="60%" />

          <View style={styles.request}>
            <Text style={styles.requestTitle}>Request a loan</Text>
            <Text style={styles.requestText}>
              Request a loan and get the money into your {"\n"} account in few
              minutes.{" "}
            </Text>

            <HomeButton
              onPress={createAppPress}
              style={{
                backgroundColor: "black",
                width: 234,
                maxwidth: "40%",
                height: 42,
                maxheight: "30%",
                borderRadius: 100,

                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row",
              }}
            >
              <Image
                source={plus}
                resizeMode="contain"
                style={{
                  marginRight: 15,
                }}
              />
              <Text
                style={{
                  color: "white",
                }}
              >
                Create Application
              </Text>
            </HomeButton>
          </View>

          <View style={styles.buttonRow}></View>

          <Footer />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignSelf: "center",
    flex: 1,
    paddingTop: 20,
    width: 342,
  },

  request: {
    padding: 15,
    flex: 1,
    height: 161,
    width: 342,
    position: "relative",
    color: "black",
    backgroundColor: "#E8EBF4",

    borderRadius: 20,

    marginBottom: 25,
  },

  requestTitle: {
    fontSize: 22,
    color: "#585858",
    paddingBottom: 15,
  },

  requestText: {
    color: "#585858",
    paddingBottom: 20,
  },

  buttonRow: {
    flexDirection: "row",
  },

  boldText: {
    fontWeight: "700",
  },
});

export default HomePage;
