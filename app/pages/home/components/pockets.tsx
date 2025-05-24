import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Pockets = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pockets</Text>
      <View style={styles.card}>
        <Ionicons name="wallet" size={46} color="#0d5d9a" />
        <View
          style={{
            width: "80%",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ color: "#68696b", marginBottom: 10 }}>
            With Forex Pockets, transaction in various currenies are easier and
            more convinient.
          </Text>
          <TouchableOpacity>
            <Text style={{ color: "#005ca9", fontSize: 12, fontWeight: "500" }}>
              Activate Now
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  title: {
    fontSize: 16,
    color: "#03285d",
    fontWeight: "bold",
  },
  card: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    columnGap: 20,
    marginTop: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
});

export default Pockets;
