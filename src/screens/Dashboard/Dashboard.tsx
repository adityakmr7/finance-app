// screens/Dashboard.tsx
import React from "react";
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackPramsList } from "../../navigations/types";
import USER_DATA from "../../data/user";
import Avatar from "../../components/common/Avatar";
import Header from "../../components/dashboard/Header";
import BalanceCard from "../../components/onboarding/BalanceCard";
import ActionButtons from "../../components/dashboard/ActionButtons";
import BottomNavigationAction from "../../components/dashboard/BottomNavigationAction";
import Transactions from "../../components/dashboard/Transactions";

type DashboardScreenNavigationProp = StackNavigationProp<
  RootStackPramsList,
  "Dashboard"
>;

interface Props {
  navigation: DashboardScreenNavigationProp;
}
const Dashboard: React.FC<Props> = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* Header Section */}
        <Header
          userName={"Sarah Muller"}
          avatarUrl={USER_DATA.profilePic}
          onNotificationPress={() => null}
        />

        <Text style={styles.sectionTitle}>Account</Text>

        {/* Card Section */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.cardsContainer}
        >
          {[0, 1, 2].map((_, index) => (
            <View
              key={index}
              style={{
                marginRight: 20,
                width: Dimensions.get("window").width * 0.7,
              }}
            >
              <BalanceCard />
            </View>
          ))}
        </ScrollView>

        {/* Action Buttons */}
        <ActionButtons />

        {/* Transaction Section */}
        <Transactions />
      </ScrollView>

      {/* Bottom Navigation */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
  },

  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginLeft: 20,
    fontFamily: "Sf-Regular",
  },
  cardsContainer: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
});

export default Dashboard;
