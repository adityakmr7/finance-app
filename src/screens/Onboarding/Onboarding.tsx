// Onboarding.js
import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
} from "react-native";
import { SolidButton } from "../../components/common/Buttons";
import { COLORS } from "../../constants";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackPramsList } from "../../navigations/types";
import { useNavigation } from "@react-navigation/native";
import BalanceCard from "../../components/onboarding/BalanceCard";

// TODO: may be i will use react native skia to create card component.
type OnboardingScreenNavigationProp = StackNavigationProp<
  RootStackPramsList,
  "Onboarding"
>;

interface Props {
  navigation: OnboardingScreenNavigationProp;
}

const TitleSection = () => {
  return (
    <View style={styles.titleSection}>
      <Text style={styles.mainTitle}>
        <Text style={styles.regularText}>Your{"\n"}</Text>

        <Text style={styles.bold}>Financial{"\n"}</Text>

        <Text style={styles.regularText}>Navigator</Text>
      </Text>

      <Text style={styles.subtitle}>
        Invest in projects that make a difference. Join us in supporting
        impactful initiatives and create a positive change in the world.
      </Text>
    </View>
  );
};

const LogoHeader = () => {
  return (
    <View style={styles.logoContainer}>
      <Text style={styles.logoText}>ProfitPilot.</Text>
    </View>
  );
};

const Onboarding = () => {
  const navigation = useNavigation();
  const handleGetStarted = () => {
    // @ts-ignore
    navigation.navigate("Dashboard");
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <LogoHeader />

        {/* Balance Card */}
        <View style={styles.balanceCardContainer}>
          <BalanceCard />
        </View>

        {/* Title Section */}
        <TitleSection />

        {/* Button */}
        <SolidButton label={"Get Started"} onPress={handleGetStarted} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.secondary,
  },
  content: {
    paddingHorizontal: 16,
  },
  balanceCardContainer: {
    marginLeft: 40,
    marginTop: 40,
    width: Dimensions.get("window").width * 0.7,
  },
  // Balance Card

  // Title section
  titleSection: {
    marginTop: 10,
    marginBottom: 30,
  },
  mainTitle: {
    fontSize: 36 * 2,
    fontWeight: "bold",
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    lineHeight: 24,
    fontFamily: "Sf-Regular",
  },
  regularText: {
    fontFamily: "Sf-Regular",
  },
  bold: {
    fontFamily: "Sf-Bold",
  },

  // Logo
  logoContainer: {},
  logoText: {
    fontFamily: "Sf-Medium",
    fontSize: 32,
  },
});

export default Onboarding;
