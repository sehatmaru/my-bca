import AdsCarousel from "@/app/components/ads-carousel/ads-carousel";
import { AuthContext } from "@/app/context/auth-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { LinearGradient } from "expo-linear-gradient";
import React, { useContext } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const quickMenus = [
  {
    id: 1,
    title: "Flazz",
    icon: "card",
  },
  {
    id: 2,
    title: "Scan QRIS",
    icon: "qr-code-outline",
  },
  {
    id: 3,
    title: "QRIS Transfer",
    icon: "send",
  },
];

const otherMenus = [
  {
    id: 1,
    title: "KPR BCA",
    subTitle: "Application",
    icon: "home",
  },
  {
    id: 2,
    title: "blu",
    subTitle: "by BCA Digital",
    icon: "at-circle-outline",
  },
  {
    id: 3,
    title: "BSya",
    subTitle: "BCA Syariah",
    icon: "happy",
  },
];

const Login = () => {
  const { setIsLoggedIn } = useContext(AuthContext);
  const fullName = "John Doe";
  const username = "jo****e";

  const handleLogin = async () => {
    await AsyncStorage.setItem("isLoggedIn", "true");
    setIsLoggedIn(true);
  };

  return (
    <LinearGradient
      colors={["#c9e4f7", "#fcfdff", "#fff"]}
      style={styles.container}
    >
      <View
        style={{
          flexDirection: "row",
          width: "90%",
          justifyContent: "space-between",
        }}
      >
        <View style={{ flexDirection: "row", columnGap: 0 }}>
          <Text style={[styles.title, { color: "#12b8e9" }]}>my</Text>
          <Text
            style={[styles.title, { color: "#005baa", fontWeight: "bold" }]}
          >
            BCA
          </Text>
        </View>
        <View style={{ flexDirection: "row", columnGap: 15 }}>
          <TouchableOpacity style={headerStyles.cardButton}>
            <Ionicons name="headset" size={20} color="#005baa" />
          </TouchableOpacity>

          <TouchableOpacity
            style={[headerStyles.cardButton, { paddingHorizontal: 10 }]}
          >
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>ID 🇮🇩</Text>
          </TouchableOpacity>
        </View>
      </View>

      <AdsCarousel />

      <View style={{ alignItems: "center" }}>
        <Text style={{ fontWeight: "300" }}>Hello,</Text>
        <Text
          style={{
            textTransform: "uppercase",
            fontWeight: "bold",
          }}
        >
          {fullName}
        </Text>
        <Text
          style={{
            textTransform: "uppercase",
            fontSize: 12,
            color: "#a3a7aa",
          }}
        >
          {username}
        </Text>
      </View>

      <View
        style={{
          width: "80%",
          borderRadius: 10,
          flexDirection: "row",
          justifyContent: "space-evenly",
          backgroundColor: "#f2f9ff",
          borderWidth: 1,
          borderColor: "#e2f2ff",
          paddingVertical: "5%",
        }}
      >
        {quickMenus.map((menu) => (
          <QuickMenu key={menu.id} title={menu.title} icon={menu.icon} />
        ))}
      </View>

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <View
        style={{
          flexDirection: "column",
          alignItems: "center",
          columnGap: 10,
        }}
      >
        <Text style={{ fontSize: 14, color: "#a3a7aa", marginBottom: 5 }}>
          Want to Login with a different account?
        </Text>
        <TouchableOpacity onPress={handleLogin}>
          <Text style={{ color: "#005baa", fontWeight: "bold" }}>
            Change Account
          </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity>
        <View
          style={{ flexDirection: "row", columnGap: 5, alignItems: "center" }}
        >
          <Ionicons
            name="information-circle-outline"
            size={20}
            color="#005baa"
          />
          <Text style={{ color: "#005baa", fontSize: 12, fontWeight: "500" }}>
            About myBCA
          </Text>
        </View>
      </TouchableOpacity>

      <View style={{ marginTop: 20, width: "100%", height: "10%" }}>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: "5%",
            gap: 15,
          }}
        >
          {otherMenus.map((menu) => (
            <OtherMenu
              key={menu.id}
              title={menu.title}
              subTitle={menu.subTitle}
              icon={menu.icon}
            />
          ))}
        </ScrollView>
      </View>
    </LinearGradient>
  );
};

const QuickMenu = (props: { title: string; icon: any }) => {
  return (
    <TouchableOpacity
      style={{
        alignItems: "center",
      }}
    >
      <LinearGradient
        colors={["#e2f2ff", "#cfeaff"]}
        style={{ padding: 10, borderRadius: 25 }}
      >
        <Ionicons name={props.icon} size={24} color="#005baa" />
      </LinearGradient>
      <Text
        style={{
          fontSize: 10,
          marginTop: 10,
          fontWeight: "600",
          color: "#005baa",
        }}
      >
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

const OtherMenu = (props: { title: string; subTitle: string; icon: any }) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        alignItems: "center",
        height: 50,
        borderWidth: 1,
        borderColor: "#e2f2ff",
        borderRadius: 10,
        paddingVertical: 5,
        paddingHorizontal: 10,
      }}
    >
      <LinearGradient
        colors={["#e2f2ff", "#cfeaff"]}
        style={{ padding: 5, borderRadius: 25 }}
      >
        <Ionicons name={props.icon} size={14} color="#005baa" />
      </LinearGradient>
      <View style={{ flexDirection: "column", marginLeft: 10 }}>
        <Text style={{ fontSize: 14 }}>{props.title}</Text>
        <Text style={{ fontSize: 14 }}>{props.subTitle}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-evenly",
    paddingVertical: 65,
  },
  title: {
    fontSize: 24,
    fontStyle: "italic",
  },
  input: {
    width: "80%",
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
  },
  button: {
    backgroundColor: "#005baa",
    padding: 15,
    borderRadius: 25,
    width: "80%",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});

const headerStyles = StyleSheet.create({
  cardButton: {
    padding: 5,
    borderRadius: 25,
    backgroundColor: "#fff",
  },
});

export default Login;
