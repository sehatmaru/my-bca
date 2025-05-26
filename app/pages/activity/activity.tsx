import Feather from "@expo/vector-icons/Feather";
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
import Other from "./components/other";
import Transaction from "./components/transaction";

const Activity = () => {
  const [isTransactionActive, setIsTransactionActive] = useState(true);

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
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={styles.title}>Activity</Text>
          <TouchableOpacity
            style={{
              alignItems: "flex-end",
              justifyContent: "flex-end",
            }}
          >
            <Feather name="filter" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
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
        <TouchableOpacity
          style={{
            flex: 1,
            padding: 15,
            borderBottomWidth: isTransactionActive ? 3 : 1,
            borderColor: isTransactionActive ? "#0258a5" : "#dedede",
          }}
          onPress={() => setIsTransactionActive(true)}
        >
          <Text
            style={[
              styles.subTitle,
              { color: isTransactionActive ? "#0d5d9a" : "#68696b" },
            ]}
          >
            Transaction
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flex: 1,
            padding: 15,
            borderBottomWidth: !isTransactionActive ? 3 : 1,
            borderColor: !isTransactionActive ? "#0258a5" : "#dedede",
          }}
          onPress={() => setIsTransactionActive(false)}
        >
          <Text
            style={[
              styles.subTitle,
              { color: !isTransactionActive ? "#0d5d9a" : "#68696b" },
            ]}
          >
            Others
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        contentContainerStyle={{ height: "100%", backgroundColor: "#fff" }}
      >
        {isTransactionActive ? <Transaction /> : <Other />}
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

export default Activity;
