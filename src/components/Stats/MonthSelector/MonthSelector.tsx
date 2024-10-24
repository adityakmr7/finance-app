// components/MonthSelector.tsx
import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import Animated, {
  useAnimatedStyle,
  withSpring,
  withTiming,
  interpolateColor,
} from "react-native-reanimated";
import { COLORS } from "../../../constants";
import { Month, MonthSelectorProps } from "./types";

const months: Month[] = [
  { label: "Oct", value: "Oct" },
  { label: "Nov", value: "Nov" },
  { label: "Dec", value: "Dec" },
  { label: "Jan", value: "Jan" },
  { label: "Feb", value: "Feb" },
  { label: "Mar", value: "Mar" },
];

const MonthSelector: React.FC<MonthSelectorProps> = ({
  onMonthSelect,
  initialMonth = "Oct",
}) => {
  const [selectedMonth, setSelectedMonth] = useState(initialMonth);

  const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

  const MonthButton: React.FC<{ month: Month }> = ({ month }) => {
    const isSelected = month.value === selectedMonth;

    const animatedStyle = useAnimatedStyle(() => {
      return {
        backgroundColor: withTiming(isSelected ? "#87CEEB" : "transparent", {
          duration: 200,
        }),
        transform: [
          {
            scale: withSpring(isSelected ? 1 : 0.95, {
              damping: 12,
              stiffness: 100,
            }),
          },
        ],
      };
    });

    const textStyle = useAnimatedStyle(() => {
      const color = interpolateColor(
        isSelected ? 1 : 0,
        [0, 1],
        ["#8E8E93", COLORS.dark]
      );

      return {
        color: withTiming(color, { duration: 200 }),
      };
    });

    return (
      <AnimatedTouchable
        onPress={() => {
          setSelectedMonth(month.value);
          onMonthSelect?.(month);
        }}
        style={[styles.monthButton, animatedStyle]}
      >
        <Animated.Text style={[styles.monthText, textStyle]}>
          {month.label}
        </Animated.Text>
      </AnimatedTouchable>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.selector}>
        {months.map((month) => (
          <MonthButton key={month.value} month={month} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
  },
  selector: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    borderRadius: 28,
    padding: 4,
    gap: 4,
    borderWidth: 1,
    borderColor: "#EFEFEF",
    borderStyle: "solid",
  },
  monthButton: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 8,
    borderRadius: 28,
    justifyContent: "center",
    alignItems: "center",
  },
  monthText: {
    fontSize: 14,
    fontWeight: "500",
  },
});

export default MonthSelector;
