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
import { RootTabParamList } from "../../navigations/BottomTabNavigation";

export const IconMapper: Record<keyof RootTabParamList, string> = {
  Home: "🏠",
  QrScan: "🔄",
  Stats: "💳",
};

const BottomNavigationAction = ({ state, navigation }: BottomTabBarProps) => {
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
            style={[
              styles.navItem,
              {
                backgroundColor: isFocused ? "#e3e3e3" : "white",
              },
            ]}
          >
            <Text>{IconMapper[routeName]}</Text>
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
    left: Dimensions.get("window").width / 3,
    borderRadius: 14,
    backgroundColor: COLORS.secondary,
    elevation: 4,
  },
  navItem: {
    padding: 8,
  },
});
export default BottomNavigationAction;
