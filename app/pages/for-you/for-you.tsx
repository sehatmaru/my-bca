import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

const ForYou = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text>For You</Text>
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

export default ForYou;
