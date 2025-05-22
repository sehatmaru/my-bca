import React from "react";
import { SafeAreaView, Text, View } from "react-native";

export default function Dashboard() {
  return (
    <SafeAreaView style={{ flex: 1, marginTop: 50, backgroundColor: "#fff" }}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          Welcome to the Dashboard!
        </Text>
        <Text style={{ fontSize: 16, marginTop: 10 }}>
          This is a simple React Native app.
        </Text>
        <Text style={{ fontSize: 16, marginTop: 10 }}>
          You can start building your app from here.
        </Text>
      </View>
    </SafeAreaView>
  );
}
