import React from "react";
import { StyleSheet, Text, View } from "react-native";

const FinancialDiary = () => {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={styles.title}>Financial Diary</Text>
        <Text style={styles.subTitle}>Cashflow</Text>
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
  subTitle: {
    fontSize: 16,
    color: "#68696b",
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
    backgroundColor: "#fff",
    borderRadius: 10,
    marginTop: 10,
    paddingVertical: 20,
    paddingHorizontal: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
});

export default FinancialDiary;
