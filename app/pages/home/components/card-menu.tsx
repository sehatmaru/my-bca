import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { LinearGradient } from "expo-linear-gradient";
import { Text, TouchableOpacity, View } from "react-native";

const CardMenu = (props: { title: string; icon: any }) => {
  return (
    <View style={{ width: "20%" }}>
      <TouchableOpacity
        style={{
          alignItems: "center",
        }}
      >
        <LinearGradient
          colors={["rgba(240,248,251,255)", "rgba(210,231,249,255)"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          locations={[0, 1]}
          style={{
            flex: 1,
            width: 45,
            height: 45,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 14,
            transform: [{ rotate: "45deg" }],
          }}
        >
          <FontAwesome6
            name={props.icon}
            size={24}
            color="#005baa"
            style={{ transform: [{ rotate: "-45deg" }] }}
          />
        </LinearGradient>
        <Text
          style={{
            fontSize: 10,
            marginTop: 10,
            textAlign: "center",
          }}
        >
          {props.title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CardMenu;
