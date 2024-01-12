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
import arrow from "../../../assets/images/OneMoneyarrow-right.png";
import Faces from "../../../assets/images/Faces.png";

const HomePage = () => {
  // const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const navigation = useNavigation();

  const createAppPress = () => {
    navigation.navigate("LoanApplication");
  };

  const onPress = () => {
    console.warn("contact sales pressed");
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

          <View
            style={styles.BackImage}
            //resizeMode="contain"
            //source={require("../../../assets/images/OneMoneyStartnow.png")}
          >
            <View style={styles.topFlex}>
              <Text style={styles.mainText}>Need huge {"\n"} funding?</Text>
              <Image source={Faces} style={styles.Faces} />
            </View>

            <Text style={styles.secondaryText}>
              Are you a business owner? {"\n"} Need huge funding for business
              operations? {"\n"} OneMoney has got a special offer for you.{" "}
            </Text>
            <TouchableOpacity onPress={onPress}>
              <View style={styles.contactBtn}>
                <Text style={styles.contactText}>Contact Sales</Text>
                <Image source={arrow} style={styles.arrow} />
              </View>
            </TouchableOpacity>
          </View>
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

    marginBottom: 35,
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

  BackImage: {
    // padding: 15,
    // // flex: 1,
    // height: 120,
    // width: 342,
    // position: "relative",

    padding: 15,
    flex: 1,
    height: 167,
    width: 342,
    position: "relative",
    color: "black",
    backgroundColor: "#FA801B",

    borderRadius: 20,

    marginBottom: 25,
  },

  mainText: {
    color: "white",
    fontWeight: "700",
    fontSize: 22.2,
    marginBottom: 5,
  },

  topFlex: {
    display: "flex",
    flexDirection: "row",
    //alignItems: "center",
  },

  Faces: {
    position: "absolute",
    top: 0,
    left: 202,
  },

  secondaryText: {
    color: "white",
    fontWeight: "500",
    marginBottom: 7,
  },

  contactBtn: {
    left: 3,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },

  contactText: {
    fontWeight: "500",
    fontSize: 15,
  },

  arrow: {
    marginLeft: 5,
    width: 15,
  },
});

export default HomePage;
