import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import RoundCard from "./RoundCard";
import { COLORS } from "../../constants";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const BalanceCard = ({
  isEyeIcon = false,
  color = COLORS.tertiary,
}: {
  color?: string;
  isEyeIcon?: boolean;
}) => {
  const [isBalanceVisible, setIsBalanceVisible] = useState(true);
  const toggleBalanceVisibility = () => {
    setIsBalanceVisible((prev) => !prev);
  };
  return (
    <View style={[styles.balanceCard, { backgroundColor: color }]}>
      <View style={{ width: "40%" }}>
        <RoundCard />
      </View>

      <Text style={styles.balanceLabel}>Your balance</Text>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text style={styles.balanceAmount}>
          {isBalanceVisible ? "$40,500.80" : "----"}
        </Text>
        {isEyeIcon && (
          <TouchableOpacity
            onPress={toggleBalanceVisibility}
            style={{ marginLeft: 8 }}
          >
            <MaterialCommunityIcons
              color={"#D4F2FD"}
              name={!isBalanceVisible ? "eye-off-outline" : "eye-outline"}
              size={32}
            />
          </TouchableOpacity>
        )}
      </View>

      <View style={styles.balanceFooter}>
        <View style={styles.accountInfo}>
          <Text style={styles.whiteText}>Account number </Text>
          <Text style={styles.accountNumber}>****9934</Text>
        </View>
        <View>
          <Text style={styles.whiteText}>Valid Thru</Text>
          <Text style={styles.accountNumber}>05/28</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  balanceCard: {
    backgroundColor: COLORS.tertiary,
    borderRadius: 20,
    padding: 20,
  },

  // Round Card

  balanceLabel: {
    fontSize: 14,
    color: "#666",
    marginVertical: 8,
  },
  balanceAmount: {
    fontSize: 34,
    fontWeight: "bold",
    // marginBottom: 10,
    fontFamily: "Sf-Medium",
  },
  accountInfo: {
    // marginTop: 10,
  },
  accountNumber: {
    color: COLORS.dark,
    fontSize: 14,
    fontFamily: "Sf-Medium",
  },

  balanceFooter: {
    marginTop: 24,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  whiteText: {
    color: "#ffffff",
    fontFamily: "Sf-Regular",
  },
});
export default BalanceCard;
