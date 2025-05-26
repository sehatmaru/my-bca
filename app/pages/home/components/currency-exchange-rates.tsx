import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import CountryFlag from "react-native-country-flag";

const data = [
  {
    id: 1,
    name: "USD",
    icon: "US",
    buy: 16310.0,
    sell: 16340.0,
  },
  {
    id: 2,
    name: "SGD",
    icon: "SG",
    buy: 12629.63,
    sell: 12670.88,
  },
  {
    id: 3,
    name: "CNY",
    icon: "CN",
    buy: 22598.85,
    sell: 2271.78,
  },
  {
    id: 4,
    name: "MYR",
    icon: "MY",
    buy: 18420.27,
    sell: 18478.02,
  },
];

const CurrencyExchangeRates = () => {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={styles.title}>Currency Exchange Rates</Text>
        <TouchableOpacity>
          <FontAwesome6 name="angle-right" color="#03285d" size={16} />
        </TouchableOpacity>
      </View>
      <View style={styles.card}>
        <View style={styles.table}>
          <Text style={styles.header}>Currency</Text>
          <Text style={styles.header}>Bank Buy</Text>
          <Text style={styles.header}>Bank Sell</Text>
        </View>
        <View
          style={{
            borderColor: "#dedede",
            borderWidth: 0.5,
            width: "100%",
            marginVertical: 10,
          }}
        ></View>
        {data.map((currency) => (
          <View style={[styles.table, { marginVertical: 5 }]} key={currency.id}>
            <View
              style={{
                flexDirection: "row",
              }}
            >
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  columnGap: 5,
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    borderRadius: 16,
                    overflow: "hidden",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <CountryFlag
                    isoCode={currency.icon}
                    size={20}
                    style={{ width: 20, height: 20 }}
                  />
                </View>
                <Text style={styles.header}>{currency.name}</Text>
              </View>
              <Text
                style={[styles.header, { fontWeight: "normal", fontSize: 16 }]}
              >
                {currency.buy.toLocaleString("id-ID", {
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 2,
                })}
              </Text>
              <Text
                style={[styles.header, { fontWeight: "normal", fontSize: 16 }]}
              >
                {currency.sell.toLocaleString("id-ID", {
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 2,
                })}
              </Text>
            </View>
          </View>
        ))}
        <Text
          style={{
            width: "100%",
            color: "#68696b",
            marginTop: 10,
            fontSize: 13,
          }}
        >
          Last updated on{" "}
          {new Date()
            .toLocaleString("en-GB", {
              day: "2-digit",
              month: "short",
              year: "numeric",
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit",
              hour12: false,
            })
            .replace(",", "")}
        </Text>
        <Text
          style={{
            width: "100%",
            color: "#03285d",
            fontSize: 13,
            fontWeight: "500",
          }}
        >
          Exchange rate may change during transaction.
        </Text>
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
  table: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  header: {
    flex: 1,
    color: "#03285d",
    fontWeight: "600",
  },
});

export default CurrencyExchangeRates;
