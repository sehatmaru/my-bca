import React from "react";
import { Text, View } from "react-native";

export default function Profile() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>
        Welcome to the Profile Page!
      </Text>
      <Text style={{ fontSize: 16, marginTop: 10 }}>
        This is a simple React Native app.
      </Text>
      <Text style={{ fontSize: 16, marginTop: 10 }}>
        You can start building your app from here.
      </Text>
    </View>
  );
}
