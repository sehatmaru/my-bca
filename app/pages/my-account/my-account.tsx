import React, { useState } from "react";
import {
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Credit from "./components/credit";
import Investment from "./components/investment";
import Saving from "./components/saving";

const MyAccount = () => {
  const [selectedTab, setSelectedTab] = useState("saving");

  function isSavingSelected() {
    return selectedTab === "saving";
  }

  function isInvestmentSelected() {
    return selectedTab === "investment";
  }
  function isCreditSelected() {
    return selectedTab === "credit";
  }

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          paddingHorizontal: 15,
          paddingVertical: 8,
          justifyContent: "space-between",
          marginTop: Platform.OS === "android" ? 50 : 0,
        }}
      >
        <Text style={styles.title}>My Account</Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#fff",
          borderTopEndRadius: 25,
          borderTopStartRadius: 25,
        }}
      >
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            width: "100%",
          }}
        >
          <TouchableOpacity
            style={{
              flex: 1,
              padding: 15,
              borderBottomWidth: isSavingSelected() ? 3 : 1,
              borderColor: isSavingSelected() ? "#0258a5" : "#dedede",
            }}
            onPress={() => setSelectedTab("saving")}
          >
            <Text
              style={[
                styles.subTitle,
                { color: isSavingSelected() ? "#0d5d9a" : "#68696b" },
              ]}
            >
              Savings
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 1,
              padding: 15,
              borderBottomWidth: isInvestmentSelected() ? 3 : 1,
              borderColor: isInvestmentSelected() ? "#0258a5" : "#dedede",
            }}
            onPress={() => setSelectedTab("investment")}
          >
            <Text
              style={[
                styles.subTitle,
                { color: isInvestmentSelected() ? "#0d5d9a" : "#68696b" },
              ]}
            >
              Investment
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 1,
              padding: 15,
              borderBottomWidth: isCreditSelected() ? 3 : 1,
              borderColor: isCreditSelected() ? "#0258a5" : "#dedede",
            }}
            onPress={() => setSelectedTab("credit")}
          >
            <Text
              style={[
                styles.subTitle,
                { color: isCreditSelected() ? "#0d5d9a" : "#68696b" },
              ]}
            >
              Credit
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
      <ScrollView
        bounces={false}
        contentContainerStyle={{
          backgroundColor: "#fff",
          flexGrow: 1,
        }}
      >
        {isSavingSelected() && <Saving />}
        {isInvestmentSelected() && <Investment />}
        {isCreditSelected() && <Credit />}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0d5d9a",
    height: "100%",
  },
  title: {
    flex: 1,
    fontSize: 20,
    fontWeight: "600",
    letterSpacing: 1,
    color: "#fff",
  },
  subTitle: {
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default MyAccount;
