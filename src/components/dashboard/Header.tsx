// components/Header/Header.tsx
import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { HeaderProps } from "../../screens/Dashboard/types";
import Avatar from "../common/Avatar";

import { Ionicons } from "@expo/vector-icons";

const Header: React.FC<HeaderProps> = ({
  userName,
  avatarUrl,
  onNotificationPress,
}) => (
  <View style={styles.header}>
    <View style={styles.userInfo}>
      <Avatar imageUri={{ uri: avatarUrl }} size={40} />
      <View style={styles.intro}>
        <Text style={styles.welcomeText}>Welcome back,</Text>
        <Text style={styles.userName}>{userName}</Text>
      </View>
    </View>
    <TouchableOpacity
      onPress={onNotificationPress}
      style={styles.notificationContainer}
    >
      <Ionicons name={"notifications-outline"} size={24} />
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  intro: { paddingLeft: 8 },

  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  welcomeText: {
    fontSize: 14,
    color: "#666",
  },
  userName: {
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: "Sf-Medium",
  },
  notificationContainer: {
    backgroundColor: "#ffffff",
    padding: 8,
    borderRadius: 32,
    elevation: 2,
  },
});

export default Header;
