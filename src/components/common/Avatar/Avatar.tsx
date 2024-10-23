import React from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  ImageSourcePropType,
} from "react-native";
import { COLORS } from "../../../constants";

interface AvatarProps {
  size?: number;
  imageUri: ImageSourcePropType;
  placeholderText?: string;
  borderColor?: string;
  borderWidth?: number;
}

const Avatar: React.FC<AvatarProps> = ({
  size = 50,
  imageUri,
  placeholderText = "N/A",
  borderColor = COLORS.secondary,
  borderWidth = 1,
}) => {
  return (
    <View
      style={[
        styles.container,
        {
          width: size,
          height: size,
          borderRadius: size / 2,
          borderColor: borderColor,
          borderWidth: borderWidth,
        },
      ]}
    >
      {imageUri ? (
        <Image
          source={imageUri}
          style={[
            styles.image,
            { width: size, height: size, borderRadius: size / 2 },
          ]}
        />
      ) : (
        <Text style={styles.placeholderText}>{placeholderText}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  image: {
    resizeMode: "cover",
  },
  placeholderText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Avatar;
