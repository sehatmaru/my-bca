import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { Link } from "expo-router";
import {
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function AboutScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          columnGap: 10,
          padding: 15,
          marginTop: Platform.OS === "android" ? 50 : 0,
        }}
      >
        <Link href={"/login"} dismissTo asChild>
          <TouchableOpacity>
            <FontAwesome6 name="angle-left" size={32} color="#fff" />
          </TouchableOpacity>
        </Link>
        <Text style={styles.title}>About myBCA</Text>
      </View>
      <View
        style={{
          alignItems: "center",
          backgroundColor: "#fff",
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
          paddingHorizontal: 15,
          height: "100%",
        }}
      >
        <View style={{ flexDirection: "row", columnGap: 0, marginTop: 20 }}>
          <Text
            style={{
              fontSize: 36,
              fontStyle: "italic",
              color: "#12b8e9",
              fontWeight: "700",
            }}
          >
            my
          </Text>
          <Text
            style={{
              fontSize: 36,
              fontStyle: "italic",
              color: "#005baa",
              fontWeight: "900",
            }}
          >
            BCA
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 50,
            width: "100%",
          }}
        >
          <Text style={styles.subTitle}>Version</Text>
          <Text style={{ color: "#005baa" }}>2.5.1 (107)</Text>
        </View>

        <View
          style={{
            width: "100%",
            borderColor: "#dedede",
            borderWidth: 0.5,
            marginVertical: 25,
          }}
        ></View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Text style={styles.subTitle}>Call Halo BCA</Text>
          <View
            style={{
              flexDirection: "row",
              columnGap: 10,
              borderRadius: 25,
              borderColor: "#005baa",
              borderWidth: 1,
              paddingHorizontal: 20,
              paddingVertical: 5,
              alignItems: "center",
            }}
          >
            <FontAwesome6 name="phone" size={22} color="#005baa" />
            <Text style={{ color: "#005baa" }}>1500888</Text>
          </View>
        </View>

        <View
          style={{
            width: "100%",
            borderColor: "#dedede",
            borderWidth: 0.5,
            marginVertical: 25,
          }}
        ></View>

        <Text style={{ color: "#005baa", fontSize: 16 }}>
          <Text style={{ fontWeight: "bold" }}>BCA</Text> All Rights Reserved.
        </Text>

        <Text style={{ color: "#005baa", marginTop: 25, fontSize: 16 }}>
          For further information, visit
        </Text>

        <Text
          style={{
            color: "#12b8e9",
            marginTop: 5,
            fontWeight: "600",
            fontSize: 16,
          }}
        >
          https://www.bca.co.id/mybca
        </Text>

        <Text
          style={{
            color: "#005baa",
            marginTop: 25,
            fontSize: 16,
            textAlign: "center",
          }}
        >
          BCA is licensed and supervisored by Financial Services Authority
          (Otoritas Jasa Keuangan) & Bank Indonesia.
        </Text>
        <Text
          style={{
            color: "#005baa",
            fontSize: 16,
            textAlign: "center",
          }}
        >
          BCA is member of Indonesia Deposit Insurance Corporation (Lembaga
          Penjamin Simpanan).
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0d5d9a",
    height: "100%",
  },
  title: {
    flex: 1,
    fontSize: 20,
    fontWeight: "600",
    letterSpacing: 1,
    color: "#fff",
  },
  subTitle: {
    textAlign: "center",
    fontWeight: "bold",
    color: "#005baa",
  },
});
