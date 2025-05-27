import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Octicons from "@expo/vector-icons/Octicons";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const data = [
  {
    id: 1,
    title: "Credit Card",
    subTitle: "BCA CREDIT CARD",
    customerNo: "177855555",
    accountBalance: 99999999,
    isRegistered: true,
    canRegister: true,
  },
  {
    id: 2,
    title: "Reward",
    subTitle: "REWARD BCA",
    customerNo: null,
    accountBalance: 99999999,
    isRegistered: true,
    canRegister: true,
  },
  {
    id: 3,
    title: "Paylater BCA",
    subTitle: null,
    description: "A solution for sudden needs. Shop now, pay later.",
    customerNo: null,
    accountBalance: null,
    isRegistered: false,
    canRegister: true,
  },
  {
    id: 4,
    title: "Customer Credit",
    subTitle: null,
    description: "You don't have any Customer Credit Account",
    customerNo: null,
    accountBalance: null,
    isRegistered: false,
    canRegister: false,
  },
];

const Credit = () => {
  const [isShowBalance, setIsShowBalance] = useState(false);

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        backgroundColor: "#f4f7fc",
        paddingHorizontal: 20,
        paddingTop: 10,
        paddingBottom: Platform.OS === "android" ? "55%" : "35%",
      }}
    >
      {data.map((item) =>
        item.isRegistered ? (
          <RegisteredCard key={item.id} data={item} />
        ) : (
          <View key={item.id} style={styles.card}>
            <View
              style={{
                flexDirection: "row",
                columnGap: 15,
              }}
            >
              <View
                style={{
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                }}
              >
                <LinearGradient
                  colors={["rgba(247,252,255,255)", "rgba(211,229,243,255)"]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: 6,
                    borderRadius: 10,
                    backgroundColor: "#f7fcff",
                    transform: [{ rotate: "45deg" }],
                  }}
                >
                  <FontAwesome6
                    name="newspaper"
                    size={24}
                    color="#0d5d9a"
                    style={{
                      borderRadius: 25,
                      width: 25,
                      height: 25,
                      transform: [{ rotate: "-45deg" }],
                    }}
                  />
                </LinearGradient>
              </View>

              <View style={{ flex: 1, rowGap: 5 }}>
                <Text
                  style={{
                    color: "#185281",
                    fontWeight: "bold",
                    fontSize: 16,
                  }}
                >
                  {item.title}
                </Text>

                <Text style={{ fontSize: 12, color: "#878e94" }}>
                  {item.description}
                </Text>
              </View>
            </View>
            {item.canRegister && (
              <TouchableOpacity
                onPress={() => setIsShowBalance(!isShowBalance)}
                style={{
                  width: "100%",
                  padding: 10,
                  marginTop: 15,
                  borderColor: "#0d5d9a",
                  borderWidth: 1,
                  borderRadius: 20,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text style={{ color: "#0d5d9a" }}>Apply or Check Status</Text>
              </TouchableOpacity>
            )}
          </View>
        )
      )}
    </View>
  );
};

const RegisteredCard = (props: { data: any }) => {
  const [isShowBalance, setIsShowBalance] = useState(false);

  return (
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
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            padding: 6,
            borderRadius: 10,
            backgroundColor: "#f7fcff",
            transform: [{ rotate: "45deg" }],
          }}
        >
          <FontAwesome6
            name="newspaper"
            size={24}
            color="#0d5d9a"
            style={{
              borderRadius: 25,
              width: 25,
              height: 25,
              transform: [{ rotate: "-45deg" }],
            }}
          />
        </LinearGradient>
        <Text
          style={{
            color: "#185281",
            fontWeight: "bold",
            fontSize: 16,
            flex: 1,
          }}
        >
          {props.data.title}
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
        <Text style={{ fontSize: 12, color: "#0d5d9a", fontWeight: "500" }}>
          {props.data.subTitle}
        </Text>
        {props.data.customerNo && (
          <Text
            style={{
              fontWeight: "300",
              fontSize: 12,
              marginTop: 5,
            }}
          >
            Account No. {props.data.customerNo}
          </Text>
        )}
        <View
          style={{
            flexDirection: "row",
            columnGap: 5,
            alignItems: "center",
            marginTop: 10,
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
              {props.data.accountBalance.toLocaleString("id-ID", {
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
            View Details
          </Text>
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
  card: {
    width: "100%",
    columnGap: 20,
    marginVertical: 15,
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
});

export default Credit;
