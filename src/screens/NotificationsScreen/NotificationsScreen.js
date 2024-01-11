import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  FlatList,
  Image,
} from "react-native";
import React from "react";
import bell from "../../../assets/images/bell.png";

const NotificationsScreen = () => {
  const data1 = [
    {
      notifTitle: "Loan Approved",
      notifImage: { bell },
      value: "1",
      notification:
        "your loan of GHS 3000 has been approved and set to your wallet",
    },
    {
      notifTitle: "Loan Approved",
      notifImage: { bell },
      value: "2",
      notification:
        "your loan of GHS 3000 has been approved and set to your wallet",
    },
    {
      notifTitle: "Loan Approved",
      notifImage: { bell },
      value: "3",
      notification:
        "your loan of GHS 3000 has been approved and set to your wallet",
    },
    {
      notifTitle: "Loan Approved ",
      notifImage: { bell },
      value: "4",
      notification:
        "your loan of GHS 3000 has been approved and set to your wallet",
    },
  ];

  return (
    //<ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.root}>
      <Text style={styles.pageTitle}>Notifications</Text>
      <FlatList
        data={data1}
        keyExtractor={(item, index) => {
          return index.toString();
        }}
        renderItem={({ item }) => {
          return (
            <View style={styles.container}>
              <View style={styles.leftImageView}>
                <Image style={styles.leftImage} source={bell} />
              </View>
              <View style={styles.notifTitle}>
                <View>
                  <Text style={styles.notifTitleText}>{item.notifTitle}</Text>
                  <Text style={styles.notificationText}>
                    {item.notification}
                  </Text>
                  {/* {item < item.length - 1 && } */}
                  <View style={styles.lineStyle} />
                </View>
              </View>
            </View>
          );
        }}
      />
    </View>
    //</ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    // alignItems: "center",
    marginTop: 80,
    padding: 15,
  },

  pageTitle: {
    justifyContent: "flex-start",
    fontWeight: "700",
    fontSize: 25,
    marginLeft: 10,
    marginBottom: 20,
  },

  container: {
    display: "flex",
    flex: 1,
    width: "100%",
    height: "100%",
    padding: 20,
    flexDirection: "row",
  },

  leftImage: {
    width: "100%",
    height: "100%",
    borderRadius: 50,
  },

  leftImageView: {
    width: 50,
    height: 50,
    borderRadius: 40 / 2,
    marginLeft: -20,
  },

  notifTitle: {
    marginLeft: 0,
  },

  notifTitleText: {
    fontWeight: "600",
    fontSize: 14,
  },

  notificationText: {
    //paddingTop: 5,
    fontSize: 11,
  },

  lineStyle: {
    backgroundColor: "gray",
    height: 0.5,
    //width: "100%",
    marginTop: 5,
    alignSelf: "stretch",
  },
});

export default NotificationsScreen;
