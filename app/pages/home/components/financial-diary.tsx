import AntDesign from "@expo/vector-icons/AntDesign";
import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";

const data = [
  { label: "May 2025", value: "1" },
  { label: "April 2025 ", value: "2" },
  { label: "March 2025", value: "3" },
];

const FinancialDiary = () => {
  const [value, setValue] = useState(data[0].value);

  const renderItem = (item: any) => {
    return (
      <View style={styless.item}>
        <Text style={styless.textItem}>{item.label}</Text>
        {item.value === value && (
          <AntDesign
            style={styless.icon}
            color="black"
            name="Safety"
            size={20}
          />
        )}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={styles.title}>Financial Diary</Text>
        <Text style={styles.subTitle}>Cashflow</Text>
      </View>
      <View style={styles.card}>
        <Dropdown
          style={styless.dropdown}
          placeholderStyle={styless.placeholderStyle}
          selectedTextStyle={styless.selectedTextStyle}
          iconStyle={styless.iconStyle}
          data={data}
          maxHeight={300}
          labelField="label"
          valueField="value"
          value={value}
          onChange={(item) => {
            setValue(item.value);
          }}
          renderItem={renderItem}
        />
        <View
          style={{
            width: "100%",
            alignItems: "center",
            marginVertical: 40,
          }}
        >
          <Image
            source={require("../../../../assets/images/spending-graph.png")}
            style={{ width: "70%", resizeMode: "contain" }}
          />
        </View>
        <TouchableOpacity>
          <Text style={{ color: "#005ca9" }}>View Cashflow Details</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  title: {
    fontSize: 16,
    color: "#03285d",
    fontWeight: "bold",
  },
  subTitle: {
    fontSize: 16,
    color: "#68696b",
  },
  option: {
    flexDirection: "row",
    columnGap: 10,
    marginVertical: 10,
  },
  card: {
    width: "100%",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    marginTop: 10,
    padding: 25,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
});

const styless = StyleSheet.create({
  dropdown: {
    width: "100%",
    backgroundColor: "white",
    borderRadius: 12,
    padding: 12,
    borderWidth: 0.5,
    borderColor: "#68696b",
  },
  icon: {
    marginRight: 5,
  },
  item: {
    padding: 17,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textItem: {
    flex: 1,
    fontSize: 16,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});

export default FinancialDiary;
