import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Dashboard from "../screens/Dashboard";
import BottomNavigationAction from "../components/dashboard/BottomNavigationAction";
import Stats from "../screens/Stats";
import QrScan from "../screens/QrScan/QrScan";
import { RootTabParamList } from "./types";

const Tab = createBottomTabNavigator<RootTabParamList>();

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
