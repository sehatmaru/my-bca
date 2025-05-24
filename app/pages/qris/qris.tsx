import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

const Qris = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text>QRIS</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default Qris;
