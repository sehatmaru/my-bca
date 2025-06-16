import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { AuthProvider } from "./context/auth-context";

export default function RootLayout() {
  return (
    <AuthProvider>
      <React.Fragment>
        <StatusBar style="auto" />
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen
            name="pages/login/login"
            options={{ headerShown: false, animation: "ios_from_left" }}
          />
          <Stack.Screen
            name="pages/login/about/index"
            options={{ headerShown: false }}
          />
        </Stack>
      </React.Fragment>
    </AuthProvider>
  );
}
