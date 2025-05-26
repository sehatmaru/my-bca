import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { Text, View } from "react-native";

const Other = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Ionicons name="document-text" size={150} color="#e3f2f9" />
      <Text style={{ color: "#68696b", fontWeight: "500", marginTop: 10 }}>
        No activities found.
      </Text>
    </View>
  );
};

export default Other;
