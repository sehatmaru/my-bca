import { Link } from "expo-router";
import { Button, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View
      style={{ justifyContent: "center", alignItems: "center", height: "100%" }}
    >
      <Text>Home</Text>
      <Link href={".."} replace asChild>
        <Button title="To Login"></Button>
      </Link>
    </View>
  );
}
