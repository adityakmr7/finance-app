import { Text, View, StyleSheet } from "react-native";
import React from "react";
import RoundCard from "./RoundCard";
import { COLORS } from "../../constants";

const BalanceCard = () => {
  return (
    <View style={styles.balanceCard}>
      <View style={{ width: "40%" }}>
        <RoundCard />
      </View>

      <Text style={styles.balanceLabel}>Your balance</Text>
      <Text style={styles.balanceAmount}>$40,500.80</Text>

      <View style={styles.balanceFooter}>
        <View style={styles.accountInfo}>
          <Text>Account number </Text>
          <Text style={styles.accountNumber}>****9934</Text>
        </View>
        <View>
          <Text>Valid Thru</Text>
          <Text>05/28</Text>
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
    // marginTop: 40,
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
    marginBottom: 10,
    fontFamily: "Sf-Medium",
  },
  accountInfo: {
    // marginTop: 10,
  },
  accountNumber: {
    color: "#666",
    fontSize: 14,
  },

  balanceFooter: {
    marginTop: 24,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
export default BalanceCard;
