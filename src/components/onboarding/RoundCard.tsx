import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS } from "../../constants";

const RoundCard = () => {
  return (
    <View style={styles.currencyRow}>
      <View style={styles.flagCircle}>
        <Text>🇺🇸</Text>
      </View>
      <Text style={styles.currencyText}>US Dollar</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  currencyRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    backgroundColor: COLORS.secondary,
    paddingVertical: 8,
    paddingHorizontal: 8,
    borderRadius: 24,
  },
  flagCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    marginRight: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  currencyText: {
    fontSize: 10,
    fontWeight: "500",
  },
});

export default RoundCard;
