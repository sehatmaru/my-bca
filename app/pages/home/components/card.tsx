import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const cards = {
  number: "5555 - **** - **** - **55",
  type: "PASPOR BCA BLUE",
};

const Card = () => {
  const [selectedCard, setSelectedCard] = useState("debit");

  function isDebitSelected() {
    return selectedCard === "debit";
  }

  function isCreditSelected() {
    return selectedCard === "credit";
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Card</Text>
      <View style={styles.option}>
        <TouchableOpacity
          style={{
            paddingVertical: 8,
            paddingHorizontal: 10,
            borderWidth: 1,
            borderColor: isDebitSelected() ? "#165b98" : "#68696b",
            backgroundColor: isDebitSelected() ? "#e5f3fe" : "##fff",
            borderRadius: 10,
          }}
          onPress={() => {
            setSelectedCard("debit");
          }}
        >
          <Text style={{ color: "#484848" }}>Debit Card</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            paddingVertical: 8,
            paddingHorizontal: 10,
            borderWidth: 1,
            borderColor: isCreditSelected() ? "#165b98" : "#68696b",
            backgroundColor: isCreditSelected() ? "#e5f3fe" : "##fff",
            borderRadius: 10,
          }}
          onPress={() => {
            setSelectedCard("credit");
          }}
        >
          <Text style={{ color: "#484848" }}>Credit Card</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.card}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            columnGap: 15,
          }}
        >
          <FontAwesome6 name="credit-card" size={34} color="#0d5d9a" />
          <View
            style={{
              justifyContent: "space-between",
            }}
          >
            <Text>{cards.number}</Text>
            <Text style={{ fontWeight: "300" }}>{cards.type}</Text>
          </View>
        </View>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            columnGap: 5,
          }}
        >
          <AntDesign name="setting" size={18} color="#005ca9" />
          <Text style={{ color: "#005ca9" }}>Manage</Text>
        </TouchableOpacity>
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
  option: {
    flexDirection: "row",
    columnGap: 10,
    marginVertical: 10,
  },
  card: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
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

export default Card;
