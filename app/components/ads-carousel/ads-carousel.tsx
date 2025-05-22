import React from "react";
import { Image, StyleSheet, View } from "react-native";

const AdsCarousel = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/images/ads-1.png")}
        style={styles.image}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "80%",
  },
  image: {
    width: "100%",
    borderRadius: 15,
    resizeMode: "cover",
  },
  title: {},
});

export default AdsCarousel;
