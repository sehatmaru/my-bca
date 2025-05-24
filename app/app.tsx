import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Octicons from "@expo/vector-icons/Octicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import React, { useContext } from "react";
import { Platform, Text, View } from "react-native";
import { AuthContext, AuthProvider } from "./context/auth-context";
import Activity from "./pages/activity/activity";
import ForYou from "./pages/for-you/for-you";
import Home from "./pages/home/home";
import Login from "./pages/login/login";
import MyAccount from "./pages/my-account/my-account";
import Qris from "./pages/qris/qris";

const Tab = createBottomTabNavigator();

const Main = () => {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      {isLoggedIn ? (
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={{
              tabBarStyle: {
                backgroundColor: "#005baa",
                height: 80,
                paddingTop: 7,
                borderTopEndRadius: 20,
                borderTopStartRadius: 20,
                position: "absolute",
                borderTopWidth: 0,
              },
            }}
          >
            <Tab.Screen
              name="Home"
              component={Home}
              options={{
                headerShown: false,
                tabBarLabel: ({ focused }) => (
                  <Text
                    style={{
                      fontWeight: "600",
                      fontSize: 10,
                      color: focused ? "#fff" : "#7bafd1",
                    }}
                  >
                    Home
                  </Text>
                ),
                tabBarIcon(props) {
                  return (
                    <FontAwesome6
                      name="house"
                      size={20}
                      color={props.focused ? "#fff" : "#7bafd1"}
                    />
                  );
                },
              }}
            />
            <Tab.Screen
              name="Activity"
              component={Activity}
              options={{
                headerShown: false,
                tabBarLabel: ({ focused }) => (
                  <Text
                    style={{
                      fontWeight: "600",
                      fontSize: 10,
                      color: focused ? "#fff" : "#7bafd1",
                    }}
                  >
                    Activity
                  </Text>
                ),
                tabBarIcon(props) {
                  return (
                    <FontAwesome6
                      name="file-invoice-dollar"
                      size={20}
                      color={props.focused ? "#fff" : "#7bafd1"}
                    />
                  );
                },
              }}
            />
            {Platform.OS !== "web" && (
              <Tab.Screen
                name="qris"
                component={Qris}
                options={{
                  headerShown: false,
                  tabBarIcon(props) {
                    return (
                      <View
                        style={{
                          height: 150,
                          width: 150,
                          alignItems: "center",
                          paddingTop: 10,
                        }}
                      >
                        <LinearGradient
                          colors={[
                            "rgba(0,164,214,255)",
                            "rgba(67,210,255,255)",
                          ]}
                          start={{ x: 0, y: 0 }}
                          end={{ x: 1, y: 1 }}
                          locations={[0, 1]}
                          style={{
                            height: 60,
                            width: 60,
                            alignItems: "center",
                            justifyContent: "center",
                            padding: 15,
                            borderRadius: 19,
                            transform: [{ rotate: "45deg" }],
                          }}
                        >
                          <View style={{ transform: [{ rotate: "-45deg" }] }}>
                            <FontAwesome6
                              name="qrcode"
                              size={30}
                              color="#fff"
                            />
                          </View>
                        </LinearGradient>
                      </View>
                    );
                  },
                  tabBarLabel: () => (
                    <Text
                      style={{
                        fontWeight: "bold",
                        fontSize: 18,
                        color: "#fff",
                        position: "absolute",
                        top: 22,
                      }}
                    >
                      QRIS
                    </Text>
                  ),
                }}
              />
            )}
            <Tab.Screen
              name="For You"
              component={ForYou}
              options={{
                headerShown: false,
                tabBarLabel: ({ focused }) => (
                  <Text
                    style={{
                      fontWeight: "600",
                      fontSize: 10,
                      color: focused ? "#fff" : "#7bafd1",
                    }}
                  >
                    For You
                  </Text>
                ),
                tabBarIcon(props) {
                  return (
                    <Octicons
                      name="feed-star"
                      size={20}
                      color={props.focused ? "#fff" : "#7bafd1"}
                    />
                  );
                },
              }}
            />
            <Tab.Screen
              name="My Account"
              component={MyAccount}
              options={{
                headerShown: false,
                tabBarLabel: ({ focused }) => (
                  <Text
                    style={{
                      fontWeight: "600",
                      fontSize: 10,
                      color: focused ? "#fff" : "#7bafd1",
                    }}
                  >
                    My Account
                  </Text>
                ),
                tabBarIcon(props) {
                  return (
                    <Octicons
                      name="person-fill"
                      size={20}
                      color={props.focused ? "#fff" : "#7bafd1"}
                    />
                  );
                },
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      ) : (
        <Login />
      )}
    </View>
  );
};

const App = () => (
  <AuthProvider>
    <Main />
  </AuthProvider>
);

export default App;
