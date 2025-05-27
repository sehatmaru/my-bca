import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const data = [
  {
    id: 1,
    title: "Apply for BCA Business Loan Now!",
    description:
      "Get financing for your business conveniently, apply online now!",
    img: require("../../../../assets/images/ads-3.png"),
  },
  {
    id: 2,
    title: "Invest via myBCA and Enjoy 0 Fees for Mutual Funds Transactions!",
    description:
      "Enjoy the program and start diversify your investment portfolio now!",
    img: require("../../../../assets/images/ads-2.png"),
  },
];

const Promo = () => {
  return (
    <View>
      {data.map((promo) => (
        <TouchableOpacity key={promo.id}>
          <View
            style={{
              flexDirection: "row",
              columnGap: 15,
              marginTop: 15,
              paddingHorizontal: 25,
            }}
          >
            <View
              style={{
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
              }}
            >
              <View
                style={{
                  padding: 6,
                  borderRadius: 25,
                  backgroundColor: "#fce9dc",
                }}
              >
                <FontAwesome6
                  name="tags"
                  size={24}
                  color="#f27a38"
                  style={{
                    borderRadius: 25,
                    width: 25,
                    height: 25,
                  }}
                />
              </View>
            </View>

            <View style={{ flex: 1, rowGap: 5 }}>
              <Text style={{ color: "#185281", fontWeight: "bold" }}>
                {promo.title}
              </Text>

              <Text style={{ fontSize: 12, color: "#878e94" }}>
                {promo.description}
              </Text>
            </View>
          </View>

          <View
            style={{
              padding: 25,
            }}
          >
            <Image
              source={promo.img}
              style={{
                width: "100%",
                height: 150,
                borderRadius: 10,
                resizeMode: "cover",
              }}
            />
          </View>

          <View
            style={{
              borderColor: "#dedede",
              borderWidth: 0.5,
              marginTop: 15,
            }}
          ></View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Promo;
