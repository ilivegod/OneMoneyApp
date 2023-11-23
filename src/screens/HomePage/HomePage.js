import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  StyleSheet,
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
const HomePage = () => {
  return (
    <SafeAreaView>
      <Text>HomePage</Text>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
          <UpdateProfileAlert />
          <NameHeader dimension="60%" />
          <StartNowBox />
          {/* <Text>
            <Text style={styles.boldText}>Borrowers</Text> | Lenders
          </Text> */}

          <View style={styles.buttonRow}>
            <TouchableOpacity>
              <Text style={styles.boldText}>Borrowers</Text>
            </TouchableOpacity>
            <Text> | </Text>
            <TouchableOpacity>
              <Text>Lenders</Text>
            </TouchableOpacity>
          </View>

          <BorrowersList />
          <Footer />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: 10,
    width: 342,
  },

  buttonRow: {
    flexDirection: "row",
  },

  boldText: {
    fontWeight: "700",
  },
});

export default HomePage;
