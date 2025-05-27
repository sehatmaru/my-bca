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
import InfoTransactions from "./components/info-transactions";
import Promo from "./components/promo";
import Wealth from "./components/wealth";

const ForYou = () => {
  const [selectedTab, setSelectedTab] = useState("info");

  function isInfoSelected() {
    return selectedTab === "info";
  }

  function isPromoSelected() {
    return selectedTab === "promo";
  }
  function isWealthSelected() {
    return selectedTab === "wealth";
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
        <Text style={styles.title}>For You</Text>
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
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <TouchableOpacity
            style={{
              flex: 1,
              padding: 15,
              borderBottomWidth: isInfoSelected() ? 3 : 1,
              borderColor: isInfoSelected() ? "#0258a5" : "#dedede",
            }}
            onPress={() => setSelectedTab("info")}
          >
            <Text
              style={[
                styles.subTitle,
                { color: isInfoSelected() ? "#0d5d9a" : "#68696b" },
              ]}
            >
              Info & Transactions
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 1,
              padding: 15,
              borderBottomWidth: isPromoSelected() ? 3 : 1,
              borderColor: isPromoSelected() ? "#0258a5" : "#dedede",
            }}
            onPress={() => setSelectedTab("promo")}
          >
            <Text
              style={[
                styles.subTitle,
                { color: isPromoSelected() ? "#0d5d9a" : "#68696b" },
              ]}
            >
              Promo
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 1,
              padding: 15,
              borderBottomWidth: isWealthSelected() ? 3 : 1,
              borderColor: isWealthSelected() ? "#0258a5" : "#dedede",
            }}
            onPress={() => setSelectedTab("wealth")}
          >
            <Text
              style={[
                styles.subTitle,
                { color: isWealthSelected() ? "#0d5d9a" : "#68696b" },
              ]}
            >
              Wealth Insight
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
      <ScrollView
        contentContainerStyle={{
          backgroundColor: "#fff",
          minHeight: "100%",
          paddingBottom: Platform.OS === "android" ? "55%" : "35%",
        }}
      >
        {isInfoSelected() && <InfoTransactions />}
        {isPromoSelected() && <Promo />}
        {isWealthSelected() && <Wealth />}
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

export default ForYou;
