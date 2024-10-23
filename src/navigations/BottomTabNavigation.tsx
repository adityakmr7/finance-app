// navigation/BottomTabNavigator.tsx
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, View } from "react-native";
import Dashboard from "../screens/Dashboard";
import BottomNavigationAction from "../components/dashboard/BottomNavigationAction";
import Stats from "../screens/Stats";
import QrScan from "../screens/QrScan/QrScan";
export type RootTabParamList = {
  Home: undefined;
  Stats: undefined;
  QrScan: undefined;
};
const Tab = createBottomTabNavigator<RootTabParamList>();

const SettingsScreen: React.FC = () => (
  <View>
    <Text>Settings Screen</Text>
  </View>
);

const ProfileScreen: React.FC = () => (
  <View>
    <Text>Profile Screen</Text>
  </View>
);

const BottomTabNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#efefef",
          elevation: 0,
          borderWidth: 0,
        },
      }}
      tabBar={(props) => <BottomNavigationAction {...props} />}
    >
      <Tab.Screen
        options={{
          headerShown: false,
        }}
        name="Home"
        component={Dashboard}
      />
      <Tab.Screen
        name="QrScan"
        options={{
          headerShown: false,
          title: "QR Scan",
        }}
        component={QrScan}
      />
      <Tab.Screen
        name="Stats"
        options={{
          title: "Statistic",
        }}
        component={Stats}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
