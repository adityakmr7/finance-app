import React from "react";
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { COLORS } from "../../constants";
import InputField from "../common/InputField";
import { useTransfer } from "../../hooks/useTransfer";

interface BottomSheetContentProps {
  onSuccess?: () => void;
}

export const BottomSheetContent: React.FC<BottomSheetContentProps> = ({
  onSuccess,
}) => {
  const [destination, setDestination] = React.useState("");
  const [amount, setAmount] = React.useState("");
  const [card, setCard] = React.useState("");
  const { addTransfer } = useTransfer();

  const handleSubmit = () => {
    if (!destination || !amount || !card) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }

    addTransfer({
      destination,
      amount,
      card,
      type: "send",
    });

    // Reset form
    setDestination("");
    setAmount("");
    setCard("");

    // Close bottom sheet
    onSuccess?.();

    Alert.alert("Success", "Transfer details saved successfully");
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <View style={styles.header}>
        <Text style={styles.title}>Transfer Details</Text>
        <Text style={styles.subtitle}>Please fill in the transfer details</Text>
      </View>

      <InputField
        label="Destination Name"
        placeholder="Enter destination name"
        value={destination}
        onChangeText={setDestination}
      />

      <InputField
        label="Amount"
        placeholder="Enter amount"
        value={amount}
        onChangeText={setAmount}
      />

      <InputField
        label="Card"
        placeholder="Enter card number"
        value={card}
        onChangeText={setCard}
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleSubmit} style={styles.button}>
          <Text style={styles.buttonText}>Confirm Transfer</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.secondary,
  },
  header: {
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: COLORS.dark,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: "#666",
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    color: COLORS.dark,
    marginBottom: 8,
  },
  input: {
    backgroundColor: "#F5F5F5",
    borderRadius: 12,
    padding: 16,
    fontSize: 16,
    color: COLORS.dark,
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },
  buttonContainer: {
    marginTop: 24,
  },
  button: {
    backgroundColor: COLORS.primary,
    borderRadius: 12,
    padding: 16,
    alignItems: "center",
    shadowColor: COLORS.primary,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  buttonText: {
    color: COLORS.dark,
    fontSize: 16,
    fontWeight: "600",
  },
});
