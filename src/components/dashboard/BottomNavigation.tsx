import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const BottomNavigation = () => {
  return (
    <View style={styles.bottomNav}>
      <TouchableOpacity style={styles.navItem}>
        <Text>🏠</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem}>
        <Text>🔄</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem}>
        <Text>💳</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
  navItem: {
    padding: 8,
  },
});
export default BottomNavigation;
