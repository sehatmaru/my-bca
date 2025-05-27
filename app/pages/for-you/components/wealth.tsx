import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const data = [
  {
    id: 1,
    title: "Informations due to Ascension Day of Jesus Christ Trading Days Off",
    category: "Events",
    description:
      "There are adjustments to the trading days schedule for the Ascension Day of Jesus Christ.",
    img: require("../../../../assets/images/ads-4.png"),
    date: new Date(),
  },
  {
    id: 2,
    title: "Monthly Product Highlight IDR Equity Mutual Fund May 2025",
    category: "Education",
    description:
      "Discover this month's BCA product highlight for IDR Equity Mutual Fund May 2025.",
    img: require("../../../../assets/images/ads-2.png"),
    date: new Date(),
  },
  {
    id: 3,
    title: "Monthly Product Highlight IDR Equity Mutual Fund May 2025",
    category: "Education",
    description:
      "Discover this month's BCA product highlight for IDR Equity Mutual Fund May 2025.",
    img: require("../../../../assets/images/ads-3.png"),
    date: new Date(),
  },
];

const Wealth = () => {
  return (
    <View>
      {data.map((wealth) => (
        <TouchableOpacity key={wealth.id}>
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
                  backgroundColor: "#d9f2fc",
                }}
              >
                <Ionicons
                  name="newspaper"
                  size={24}
                  color="#0090db"
                  style={{
                    borderRadius: 25,
                    width: 25,
                    height: 25,
                  }}
                />
              </View>
            </View>

            <View style={{ flex: 1, rowGap: 5 }}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{ color: "#0090db", fontSize: 12, fontWeight: "bold" }}
                >
                  {wealth.category}
                </Text>
                <Text
                  style={{ color: "#878e94", fontSize: 12, fontWeight: "500" }}
                >
                  {wealth.date
                    .toLocaleString("en-GB", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    })
                    .replace(",", "")}
                </Text>
              </View>
              <Text style={{ color: "#185281" }}>{wealth.title}</Text>

              <Text style={{ fontSize: 12, color: "#878e94" }}>
                {wealth.description}
              </Text>
            </View>
          </View>

          <View
            style={{
              padding: 25,
            }}
          >
            <Image
              source={wealth.img}
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

export default Wealth;
