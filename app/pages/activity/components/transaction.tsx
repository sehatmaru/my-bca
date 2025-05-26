import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const data = [
  {
    id: 1,
    name: "May",
    transactions: [
      {
        id: 1,
        title: "Phone Credit - TELKOMSEL PULSA",
        amount: 75000,
        category: "Payment & Top Up",
        status: "Successful",
        date: new Date(),
      },
      {
        id: 2,
        title: "Shell Select, Kyai Tapa",
        amount: 55000,
        category: "QRIS Payment",
        status: "Successful",
        date: new Date(Date.now() - 24 * 60 * 60 * 1000),
      },
    ],
  },
];

const Transaction = () => {
  return (
    <View>
      {data.map((month) => (
        <View key={month.id}>
          <View style={{ padding: 15, backgroundColor: "#f4f7fc" }}>
            <Text style={styles.monthTitle}>{month.name}</Text>
          </View>
          {month.transactions.map((transaction) => (
            <TouchableOpacity key={transaction.id} style={styles.card}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <View style={{ alignItems: "center" }}>
                  <Text
                    style={{
                      fontSize: 24,
                      color: "#878e94",
                      fontWeight: "bold",
                    }}
                  >
                    {transaction.date
                      .toLocaleString("en-GB", {
                        day: "2-digit",
                      })
                      .replace(",", "")}
                  </Text>
                  <Text
                    style={{
                      fontSize: 18,
                      color: "#878e94",
                      fontWeight: "600",
                    }}
                  >
                    {transaction.date
                      .toLocaleString("en-GB", {
                        month: "short",
                      })
                      .replace(",", "")}
                  </Text>
                  <Text
                    style={{
                      color: "#878e94",
                      fontWeight: "600",
                    }}
                  >
                    {transaction.date
                      .toLocaleString("en-GB", {
                        year: "numeric",
                      })
                      .replace(",", "")}
                  </Text>
                </View>
                <View
                  style={{
                    paddingHorizontal: 20,
                    flex: 1,
                  }}
                >
                  <Text
                    style={{
                      color: "#185281",
                      fontWeight: "bold",
                      marginBottom: 5,
                    }}
                  >
                    {transaction.title}
                  </Text>
                  <Text
                    style={{
                      fontWeight: "bold",
                      color: "#b82e39",
                      marginBottom: 5,
                    }}
                  >
                    IDR{" "}
                    {transaction.amount.toLocaleString("id-ID", {
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 0,
                    })}
                  </Text>
                  <Text
                    style={{
                      color: "#878e94",
                      fontSize: 13,
                      marginBottom: 5,
                    }}
                  >
                    {transaction.category}
                  </Text>
                  <View style={{ alignItems: "flex-start" }}>
                    <Text
                      style={{
                        color: "#167940",
                        paddingVertical: 6,
                        paddingHorizontal: 15,
                        fontSize: 12,
                        backgroundColor: "#c2fec7",
                        borderRadius: 12,
                        fontWeight: "500",
                      }}
                    >
                      {transaction.status}
                    </Text>
                  </View>
                </View>
                <View>
                  <FontAwesome6 name="angle-right" size={20} color="#003360" />
                </View>
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
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  monthTitle: {
    color: "#003360",
    fontWeight: "bold",
  },
  card: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
  },
});

export default Transaction;
