import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Octicons from "@expo/vector-icons/Octicons";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

const PersonalCard = (props: {
  accountNumber: string;
  accountBalance: number;
}) => {
  const [isShowBalance, setIsShowBalance] = useState(false);

  return (
    <View
      style={{
        width: "100%",
        borderRadius: 10,
      }}
    >
      <LinearGradient
        colors={[
          "rgba(120,188,241,255)",
          "rgba(63,162,194,255)",
          "rgba(42,185,182,255)",
        ]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{
          width: "100%",
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          padding: 15,
        }}
      >
        <View
          style={{
            rowGap: 10,
            flexDirection: "column",
          }}
        >
          <View
            style={{
              alignSelf: "flex-start",
              flexDirection: "row",
              columnGap: 10,
              alignItems: "center",
              borderWidth: 1,
              borderColor: "#fff",
              paddingVertical: 5,
              paddingHorizontal: 10,
              borderRadius: 25,
            }}
          >
            <FontAwesome6 name="circle-info" size={12} color="#fff" />
            <Text style={{ color: "#fff", fontWeight: "500" }}>
              View BCA ID
            </Text>
          </View>
          <View
            style={{ flexDirection: "row", columnGap: 5, alignItems: "center" }}
          >
            <Text style={{ fontSize: 12, fontWeight: "500", color: "#fff" }}>
              Account:
            </Text>
            <Text style={{ fontSize: 12, fontWeight: "500", color: "#fff" }}>
              {props.accountNumber}
            </Text>
            <FontAwesome6 name="copy" size={14} color="#fff" />
          </View>
        </View>
      </LinearGradient>
      <View
        style={{
          width: "100%",
          borderBottomStartRadius: 10,
          borderBottomEndRadius: 10,
          padding: 15,
          backgroundColor: "#fff",
        }}
      >
        <Text style={{ color: "#616266", fontWeight: "500" }}>
          Active Balance
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingVertical: 10,
          }}
        >
          <View
            style={{ flexDirection: "row", columnGap: 5, alignItems: "center" }}
          >
            <Text
              style={{ fontSize: 22, fontWeight: "bold", alignItems: "center" }}
            >
              IDR
            </Text>
            {isShowBalance ? (
              <Text
                style={{
                  fontSize: 22,
                  fontWeight: "bold",
                  alignItems: "center",
                }}
              >
                {props.accountBalance.toLocaleString("id-ID", {
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 0,
                })}
              </Text>
            ) : (
              <View style={{ flexDirection: "row", columnGap: 5 }}>
                <Octicons name="dot-fill" size={18} />
                <Octicons name="dot-fill" size={18} />
                <Octicons name="dot-fill" size={18} />
                <Octicons name="dot-fill" size={18} />
                <Octicons name="dot-fill" size={18} />
                <Octicons name="dot-fill" size={18} />
              </View>
            )}
          </View>

          <TouchableOpacity onPress={() => setIsShowBalance(!isShowBalance)}>
            <FontAwesome6
              name={isShowBalance ? "eye-slash" : "eye"}
              size={22}
              color="#0d5d9a"
            />
          </TouchableOpacity>
        </View>
        <View style={{ borderColor: "#dedede", borderWidth: 0.5 }}></View>
        <View
          style={{
            paddingTop: 10,
            flexDirection: "row",
            columnGap: 10,
            alignItems: "center",
          }}
        >
          <FontAwesome6 name="money-bills" size={18} color="#0d5d9a" />
          <Text style={{ color: "#0d5d9a", fontWeight: "500", fontSize: 12 }}>
            Account Transactions
          </Text>
        </View>
      </View>
    </View>
  );
};

export default PersonalCard;
