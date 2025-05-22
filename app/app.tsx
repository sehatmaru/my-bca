import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React, { useContext } from "react";
import { Text, View } from "react-native";
import { AuthContext, AuthProvider } from "./context/auth-context";
import Dashboard from "./pages/dashboard/dashboard";
import Login from "./pages/login/login";
import Profile from "./pages/profile/profile";

const Tab = createBottomTabNavigator();

const Main = () => {
  let { isLoggedIn } = useContext(AuthContext);

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      {isLoggedIn ? (
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen
              name="home"
              component={Dashboard}
              options={{
                headerShown: false,
                tabBarIcon(props) {
                  return <Text style={{ color: props.color }}>🏠</Text>;
                },
                tabBarShowLabel: false,
              }}
            />
            <Tab.Screen
              name="dashboard"
              component={Dashboard}
              options={{
                tabBarIcon(props) {
                  return <Text style={{ color: props.color }}>🏠</Text>;
                },
                tabBarShowLabel: false,
              }}
            />
            <Tab.Screen
              name="profile"
              component={Profile}
              options={{
                headerShown: false,
                tabBarIcon(props) {
                  return <Text style={{ color: props.color }}>👤</Text>;
                },
                tabBarShowLabel: false,
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
