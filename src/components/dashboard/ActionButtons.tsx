import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const ActionButtons = () => {
  return (
    <View style={styles.actionButtons}>
      <TouchableOpacity style={styles.actionButton}>
        <Text>↙ Request</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.actionButton}>
        <Text>↗ Transfer</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  actionButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    alignItems: "center",
  },
  actionButton: {
    padding: 10,
  },
  addButton: {
    backgroundColor: "#000",
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  addButtonText: {
    color: "#fff",
    fontSize: 24,
  },
});
export default ActionButtons;
