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
import { useEffect } from "react";
import NameHeader from "../../components/NameHeader";
import StartNowBox from "../../components/StartNowBox/StartNowBox";
import BorrowersList from "../../components/BorrowersList/BorrowersList";
import HomeButton from "../../components/HomeButton";
import { useNavigation } from "@react-navigation/native";
import plus from "../../../assets/images/gala_add.png";
import arrow from "../../../assets/images/OneMoneyarrow-right.png";
import Faces from "../../../assets/images/Faces.png";
import { Firestore } from "firebase/firestore";
import { doc, getDoc } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";

import profilePicture from "../../../assets/images/OneMoneyCapa_2.png";

const HomePage = () => {
  const [username, setUsername] = useState("");
  const [userInfo, setUserInfo] = useState("");

  const navigation = useNavigation();

  const createAppPress = () => {
    navigation.navigate("LoanApplication");
  };

  const onPress = () => {
    console.warn("contact sales pressed");
  };

  const fetchData = async () => {
    const docRef = doc(db, "users", "6ryq0bI9FjfK5k1SJQ3ctCn31v03");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      setUserInfo(docSnap.data());
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }
  };

  const db = getFirestore();

  const getData = async () => {
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
      setUserInfo(doc.data());
    });
  };

  useEffect(() => {
    //fetchData();
    getData();
  }, []);

  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
          <View style={styles.container}>
            <Image
              source={profilePicture}
              style={styles.profile}
              resizeMode="contain"
            />
            <View>
              {/* <Text style={styles.fullName}>Hi{userInfo?.Name},</Text> */}
              <Text style={styles.fullName}>Hi {userInfo?.Name},</Text>

              <Text style={styles.nameMessage}>
                Access loans from us today!
              </Text>
            </View>
          </View>

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
