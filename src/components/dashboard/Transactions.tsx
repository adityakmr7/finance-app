import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { transactions } from "../../data/transaction";

const Transactions = () => {
  return (
    <View style={styles.transactionSection}>
      <View style={styles.transactionHeader}>
        <Text style={styles.transactionTitle}>Transaction</Text>
        <TouchableOpacity>
          <Text style={styles.viewAll}>View all</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.today}>TODAY</Text>

      {transactions.map((transaction) => (
        <View key={transaction.id} style={styles.transactionItem}>
          <View style={styles.transactionInfo}>
            <Text style={styles.arrowIcon}>
              {transaction.type === "send" ? "↗" : "↙"}
            </Text>
            <View>
              <Text style={styles.transactionName}>{transaction.name}</Text>
              <Text style={styles.transactionTime}>{transaction.time}</Text>
            </View>
          </View>
          <Text
            style={[
              styles.transactionAmount,
              {
                color: transaction.type === "receive" ? "#2ecc71" : "#e74c3c",
              },
            ]}
          >
            {transaction.amount}
          </Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  transactionSection: {
    padding: 20,
  },
  transactionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  transactionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    fontFamily: "Sf-Regular",
  },
  viewAll: {
    color: "#666",
    fontFamily: "Sf-Regular",
  },
  today: {
    color: "#666",
    marginBottom: 12,
    fontSize: 8,
    fontFamily: "Sf-Regular",
  },
  transactionItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  transactionInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  arrowIcon: {
    fontSize: 20,
    marginRight: 12,
  },
  transactionName: {
    fontSize: 16,
    // fontWeight: "500",
    fontFamily: "Sf-Medium",
  },
  transactionTime: {
    color: "#666",
    fontSize: 12,
    fontFamily: "Sf-Regular",
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: "500",
  },
});

export default Transactions;
