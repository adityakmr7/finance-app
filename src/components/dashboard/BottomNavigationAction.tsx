import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { COLORS } from "../../constants";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { RootTabParamList } from "../../navigations/types";

const ICON_SIZE = 22;
const ICON_COLOR = "#A9A9A9";
const ICON_FOCUS_COLOR = "#000000";
export const IconMapper: Record<keyof RootTabParamList, Function> = {
  Home: (isFocused: boolean) => (
    <Feather
      name={"home"}
      size={ICON_SIZE}
      color={isFocused ? ICON_FOCUS_COLOR : ICON_COLOR}
    />
  ),
  QrScan: (isFocused: boolean) => (
    <MaterialCommunityIcons
      name={"line-scan"}
      color={isFocused ? ICON_FOCUS_COLOR : ICON_COLOR}
      size={ICON_SIZE}
    />
  ),
  Stats: (isFocused: boolean) => (
    <Feather
      name={"credit-card"}
      size={ICON_SIZE}
      color={isFocused ? ICON_FOCUS_COLOR : ICON_COLOR}
    />
  ),
};

const BottomNavigationAction = ({ state, navigation }: BottomTabBarProps) => {
  const Icon = (routeName: keyof RootTabParamList) => {
    return IconMapper[routeName];
  };

  return (
    <View style={styles.bottomNav}>
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;
        const routeName = route.name as keyof RootTabParamList;
        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            key={index}
            onPress={onPress}
            style={[styles.navItem]}
          >
            {Icon(routeName)(isFocused)}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
const styles = StyleSheet.create({
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: "#eee",
    position: "absolute",
    bottom: 60,
    left: Dimensions.get("window").width / 4,
    borderRadius: 14,
    backgroundColor: COLORS.secondary,
    elevation: 4,
  },
  navItem: {
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
export default BottomNavigationAction;
