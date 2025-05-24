import React from "react";
import { View } from "react-native";
import CardMenu from "./card-menu";

const menus = [
  {
    id: 1,
    title: "Transfer",
    icon: "money-bill-transfer",
  },
  {
    id: 2,
    title: "Payment & Top Up",
    icon: "money-bills",
  },
  {
    id: 3,
    title: "Investment",
    icon: "money-bill-trend-up",
  },
  {
    id: 4,
    title: "Lifestyle",
    icon: "bag-shopping",
  },
  {
    id: 5,
    title: "e-Statement",
    icon: "suitcase",
  },
  {
    id: 6,
    title: "Flazz",
    icon: "credit-card",
  },
  {
    id: 7,
    title: "Cardless",
    icon: "mobile-button",
  },
  {
    id: 8,
    title: "All Menu",
    icon: "box-open",
  },
];

const Menus = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        columnGap: 20,
        rowGap: 20,
        flexWrap: "wrap",
      }}
    >
      {menus.map((menu) => (
        <CardMenu key={menu.id} title={menu.title} icon={menu.icon} />
      ))}
    </View>
  );
};

export default Menus;
