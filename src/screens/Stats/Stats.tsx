import { ScrollView, StyleSheet, View } from "react-native";
import { COLORS } from "../../constants";
import BalanceCard from "../../components/onboarding/BalanceCard";
import MonthSelector from "../../components/Stats/MonthSelector/MonthSelector";
import React from "react";
import TransactionCard from "./TransactionCard";

const Stats = () => {
  return (
    <ScrollView style={styles.container}>
      <BalanceCard />
      <View style={styles.monthContainer}>
        <MonthSelector
          onMonthSelect={(month) => {
            console.log("Selected month:", month.value);
          }}
          initialMonth="Oct"
        />
      </View>
      <View style={{ backgroundColor: "#F5F5F5", padding: 8 }}>
        <TransactionCard />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EFEFEF",
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  monthContainer: {
    marginTop: 12,
  },
});

export default Stats;
