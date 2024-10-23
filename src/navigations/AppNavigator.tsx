// navigation/AppNavigator.tsx
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Onboarding from "../screens/Onboarding";
import Dashboard from "../screens/Dashboard/Dashboard";
import { RootStackPramsList } from "./types";
import BottomTabNavigator from "./BottomTabNavigation";

const Stack = createStackNavigator<RootStackPramsList>();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Onboarding"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="Dashboard" component={BottomTabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
