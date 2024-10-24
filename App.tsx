import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import React, { useEffect } from "react";
import AppNavigator from "./src/navigations/AppNavigator";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [loaded, error] = useFonts({
    "Sf-Bold": require("./assets/SF-Pro-Display-Bold.otf"),
    "Sf-Regular": require("./assets/SF-Pro-Display-Regular.otf"),
    "Sf-Medium": require("./assets/SF-Pro-Display-Medium.otf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <>
      <StatusBar style="dark" />
      <AppNavigator />
    </>
  );
}
