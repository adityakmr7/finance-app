import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useRef } from "react";
import { Feather } from "@expo/vector-icons";
import AppBottomSheet from "../common/AppBottomSheet";
import { AppBottomSheetRef } from "../common/AppBottomSheet/AppBottomSheet";
import { BottomSheetContent } from "./BottomSheetContent";

const ActionButtons = () => {
  const bottomSheetRef = useRef<AppBottomSheetRef>(null);
  return (
    <>
      <View style={styles.actionButtons}>
        <TouchableOpacity style={styles.actionButton}>
          <Feather size={24} name={"arrow-down-left"} />
          <Text style={styles.request}>Request</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => bottomSheetRef?.current?.open()}
        >
          <Feather size={24} name={"arrow-up-right"} />
          <Text style={styles.transfer}>Transfer</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>
      <AppBottomSheet ref={bottomSheetRef}>
        <BottomSheetContent />
      </AppBottomSheet>
    </>
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
    paddingVertical: 12,
    paddingHorizontal: 18,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderRadius: 24,
  },
  addButton: {
    backgroundColor: "#000",
    width: 46,
    height: 46,
    borderRadius: 23,
    justifyContent: "center",
    alignItems: "center",
  },
  addButtonText: {
    color: "#fff",
    fontSize: 24,
  },
  request: {
    fontFamily: "Sf-Regular",
  },
  transfer: {
    fontFamily: "Sf-Regular",
  },
});
export default ActionButtons;
