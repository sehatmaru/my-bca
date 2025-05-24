import React from "react";
import { ScrollView, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const MyAccount = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text>Home</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#154d84",
    color: "#fff",
  },
});

export default MyAccount;
