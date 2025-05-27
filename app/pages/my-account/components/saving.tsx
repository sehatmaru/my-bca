import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Octicons from "@expo/vector-icons/Octicons";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const data = {
  username: "John Doe",
  accountNumber: "555-555-5555",
  accountBalance: 99999999,
};

const Saving = () => {
  const [isShowBalance, setIsShowBalance] = useState(false);

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        backgroundColor: "#f4f7fc",
        paddingHorizontal: 20,
        paddingTop: 10,
      }}
    >
      <View style={styles.card}>
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            alignItems: "center",
            columnGap: 20,
          }}
        >
          <LinearGradient
            colors={["rgba(247,252,255,255)", "rgba(211,229,243,255)"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={{
              backgroundColor: "#d0eafe",
              padding: 5,
              marginStart: 10,
              marginTop: 10,
              borderRadius: 12,
              transform: [{ rotate: "45deg" }],
            }}
          >
            <MaterialIcons
              name="wallet"
              size={30}
              color="#0d5d9a"
              style={{ transform: [{ rotate: "-45deg" }] }}
            />
          </LinearGradient>
          <Text
            style={{
              flex: 1,
              fontSize: 16,
              fontWeight: "bold",
              color: "#003360",
              letterSpacing: 0.5,
            }}
          >
            Savings Account
          </Text>
          <TouchableOpacity
            onPress={() => setIsShowBalance(!isShowBalance)}
            style={{
              paddingEnd: 10,
            }}
          >
            <FontAwesome6
              name={isShowBalance ? "eye-slash" : "eye"}
              size={22}
              color="#0d5d9a"
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            padding: 15,
            backgroundColor: "#f4f7fc",
            marginTop: 20,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: "#dedede",
          }}
        >
          <Text style={{ fontSize: 12, color: "#0d5d9a", fontWeight: "bold" }}>
            Tahapan/Tahapan Gold - IDR
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              columnGap: 5,
              marginTop: 5,
              marginBottom: 10,
            }}
          >
            <Text style={{ fontWeight: "300", fontSize: 12 }}>
              Account No. {data.accountNumber}
            </Text>
            <TouchableOpacity>
              <FontAwesome6 name="copy" size={16} color="#0d5d9a" />
            </TouchableOpacity>
          </View>
          <Text style={{ fontSize: 12, fontWeight: "500", marginBottom: 5 }}>
            Active Balance
          </Text>
          <View
            style={{
              flexDirection: "row",
              columnGap: 5,
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontWeight: "bold",
                alignItems: "center",
              }}
            >
              IDR
            </Text>
            {isShowBalance ? (
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "bold",
                  alignItems: "center",
                }}
              >
                {data.accountBalance.toLocaleString("id-ID", {
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 0,
                })}
              </Text>
            ) : (
              <View style={{ flexDirection: "row", columnGap: 5 }}>
                <Octicons name="dot-fill" size={16} />
                <Octicons name="dot-fill" size={16} />
                <Octicons name="dot-fill" size={16} />
                <Octicons name="dot-fill" size={16} />
                <Octicons name="dot-fill" size={16} />
                <Octicons name="dot-fill" size={16} />
              </View>
            )}
          </View>
          <TouchableOpacity
            style={{
              marginTop: 15,
              flexDirection: "row",
              columnGap: 10,
              alignItems: "center",
            }}
          >
            <FontAwesome6 name="money-bills" size={18} color="#0d5d9a" />
            <Text style={{ color: "#0d5d9a", fontWeight: "500", fontSize: 12 }}>
              View Account Transactions & Info
            </Text>
          </TouchableOpacity>
        </View>
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
    marginTop: 15,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
});

export default Saving;
