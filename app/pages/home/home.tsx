import { AuthContext } from "@/app/context/auth-context";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { LinearGradient } from "expo-linear-gradient";
import React, { useContext } from "react";
import {
  Image,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Card from "./components/card";
import FinancialDiary from "./components/financial-diary";
import Menus from "./components/menus";
import PersonalCard from "./components/personal-card";
import Pockets from "./components/pockets";

const Home = () => {
  const { setIsLoggedIn } = useContext(AuthContext);

  const username = "John Doe";
  const accountNumber = "555-555-5555";
  const accountBalance = 99999999;

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          paddingHorizontal: 15,
          paddingVertical: 8,
          justifyContent: "space-between",
          marginTop: Platform.OS === "android" ? 50 : 0,
        }}
      >
        <View style={{ flexDirection: "row", columnGap: 0 }}>
          <Text style={styles.title}>my</Text>
          <Text style={[styles.title, { fontWeight: "bold" }]}>BCA</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            columnGap: 20,
          }}
        >
          <TouchableOpacity>
            <Ionicons name="headset" size={24} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity>
            <AntDesign name="setting" size={24} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setIsLoggedIn(false)}>
            <MaterialIcons name="logout" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView style={styles.container}>
        <View style={{ width: "100%", paddingHorizontal: 20, marginTop: 20 }}>
          <View
            style={{ flexDirection: "row", columnGap: 5, marginBottom: 10 }}
          >
            <Text style={{ color: "#fff" }}>HELLO,</Text>
            <Text
              style={{
                color: "#fff",
                textTransform: "uppercase",
                fontWeight: "bold",
              }}
            >
              {username}
            </Text>
          </View>

          <PersonalCard
            accountNumber={accountNumber}
            accountBalance={accountBalance}
          />
        </View>

        <View
          style={{
            width: "100%",
            borderRadius: 10,
            marginTop: 40,
          }}
        >
          <LinearGradient
            colors={[
              "rgba(4,56,128,255)",
              "rgba(13,152,221,255)",
              "rgba(68,186,213,255)",
            ]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={{
              width: "100%",
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              paddingTop: 10,
              paddingHorizontal: 20,
              paddingBottom: 20,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                columnGap: 10,
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  columnGap: 10,
                  alignItems: "center",
                }}
              >
                <FontAwesome6 name="gift" size={24} color="#20b6d8" />
                <View>
                  <Text style={{ color: "#fff", fontWeight: "500" }}>
                    The New Gebyar
                  </Text>
                  <Text
                    style={{
                      color: "#eebc3a",
                      fontSize: 16,
                      fontWeight: "bold",
                    }}
                  >
                    Hadiah BCA
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  columnGap: 5,
                  alignItems: "center",
                }}
              >
                <Text
                  style={{ color: "#fff", fontSize: 12, fontWeight: "bold" }}
                >
                  Click to Win
                </Text>
                <FontAwesome6 name="angle-right" size={16} color="#fff" />
              </View>
            </View>
          </LinearGradient>

          <View
            style={{
              borderTopStartRadius: 20,
              borderTopEndRadius: 20,
              backgroundColor: "#f4f7fc",
              marginTop: -15,
              marginBottom: 500,
              padding: 20,
            }}
          >
            <Menus />

            <View style={{ marginTop: 30 }}>
              <Image
                source={require("../../../assets/images/ads-1.png")}
                style={{ width: "100%", borderRadius: 15, resizeMode: "cover" }}
              />
            </View>

            <Pockets />

            <Card />

            <FinancialDiary />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0d5d9a",
  },
  title: {
    fontSize: 24,
    fontStyle: "italic",
    color: "#fff",
  },
});

export default Home;
