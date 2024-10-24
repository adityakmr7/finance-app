import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { formatDate } from "../../utils/formatDate";
import { useTransfer } from "../../hooks/useTransfer";

const Transactions = () => {
  const { state } = useTransfer();

  return (
    <View style={styles.transactionSection}>
      <View style={styles.transactionHeader}>
        <Text style={styles.transactionTitle}>Transaction</Text>
        <TouchableOpacity>
          <Text style={styles.viewAll}>View all</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.today}>TODAY</Text>

      {state.transfers.length === 0 && (
        <View style={styles.noTransaction}>
          <Text style={styles.noTransactionText}>No transactions yet.</Text>
        </View>
      )}
      {state?.transfers.map((transaction) => {
        return (
          <View key={transaction.id} style={styles.transactionItem}>
            <View style={styles.transactionInfo}>
              <View style={styles.arrowIcon}>
                {transaction.type === "send" ? (
                  <Feather size={24} name={"arrow-up-right"} />
                ) : (
                  <Feather size={24} name={"arrow-down-left"} />
                )}
              </View>
              <View>
                <Text style={styles.transactionName}>
                  {transaction.destination}
                </Text>
                <Text style={styles.transactionTime}>
                  {formatDate(transaction.timestamp)}
                </Text>
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
              {transaction?.type == "send" ? "-" : "+"} ${transaction.amount}
            </Text>
          </View>
        );
      })}
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
    backgroundColor: "#f6f6f6",
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderRadius: 24,
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
  noTransaction: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 20,
  },
  noTransactionText: {
    color: "#90A4AE",
    fontFamily: "Sf-Regular",
  },
});

export default Transactions;
