import { View, StyleSheet, AppState, Linking, Platform } from "react-native";
import { CameraView, useCameraPermissions } from "expo-camera";
import { useEffect, useRef } from "react";
import { Overlay } from "./Overlay";
import { StatusBar } from "expo-status-bar";

const QrScan = () => {
  const [permission, requestPermission] = useCameraPermissions();
  const qrLock = useRef(false);
  const appState = useRef(AppState.currentState);

  const isPermissionGranted = Boolean(permission?.granted);

  useEffect(() => {
    const req = async () => {
      await requestPermission();
    };
    req();
  }, []);

  useEffect(() => {
    const subscription = AppState.addEventListener("change", (nextAppState) => {
      if (
        appState.current.match(/inactive|background/) &&
        nextAppState === "active"
      ) {
        qrLock.current = false;
      }
      appState.current = nextAppState;
    });

    return () => {
      subscription.remove();
    };
  }, []);
  return (
    <View style={StyleSheet.absoluteFillObject}>
      {Platform.OS === "android" ? <StatusBar hidden /> : null}
      <CameraView
        style={StyleSheet.absoluteFillObject}
        facing={"back"}
        onBarcodeScanned={({ data }) => {
          // TODO: add check for if it is a valid url else return toast invalid url.
          if (data && !qrLock.current) {
            qrLock.current = true;
            setTimeout(async () => {
              await Linking.openURL(data);
            }, 500);
          }
        }}
      />
      <Overlay />
    </View>
  );
};

export default QrScan;
