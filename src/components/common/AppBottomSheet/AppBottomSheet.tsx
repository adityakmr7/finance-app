// AppBottomSheet.tsx
import React, { forwardRef, useImperativeHandle } from "react";
import {
  StyleSheet,
  Dimensions,
  Modal,
  View,
  TouchableWithoutFeedback,
} from "react-native";
import {
  GestureHandlerRootView,
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from "react-native-gesture-handler";
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  interpolate,
  Extrapolate,
  runOnJS,
} from "react-native-reanimated";

const SCREEN_HEIGHT = Dimensions.get("window").height;
const MAX_TRANSLATE_Y = -SCREEN_HEIGHT * 0.7 + 50;
const SPRING_CONFIG = {
  damping: 50,
  mass: 0.3,
  stiffness: 121.6,
  overshootClamping: true,
  restDisplacementThreshold: 0.3,
  restSpeedThreshold: 0.3,
};

interface AppBottomSheetProps {
  children: React.ReactNode;
  backgroundColor?: string;
}

export interface AppBottomSheetRef {
  open: () => void;
  close: () => void;
}

const AppBottomSheet = forwardRef<AppBottomSheetRef, AppBottomSheetProps>(
  ({ children, backgroundColor = "#ffffff" }, ref) => {
    const [isVisible, setIsVisible] = React.useState(false);
    const translateY = useSharedValue(0);
    const active = useSharedValue(false);

    const scrollTo = React.useCallback((destination: number) => {
      "worklet";
      active.value = destination !== 0;
      translateY.value = withSpring(destination, SPRING_CONFIG);
    }, []);

    const setVisible = React.useCallback((visible: boolean) => {
      setIsVisible(visible);
    }, []);

    useImperativeHandle(ref, () => ({
      open: () => {
        setVisible(true);
        scrollTo(MAX_TRANSLATE_Y);
      },
      close: () => {
        scrollTo(0);
        setTimeout(() => {
          setVisible(false);
        }, 300);
      },
    }));

    const gestureHandler = useAnimatedGestureHandler<
      PanGestureHandlerGestureEvent,
      { startY: number }
    >({
      onStart: (_, context) => {
        context.startY = translateY.value;
      },
      onActive: (event, context) => {
        translateY.value = Math.max(
          Math.min(context.startY + event.translationY, 0),
          MAX_TRANSLATE_Y
        );
      },
      onEnd: (event) => {
        if (event.velocityY > 500) {
          scrollTo(0);
          runOnJS(setVisible)(false);
        } else if (event.velocityY < -500) {
          scrollTo(MAX_TRANSLATE_Y);
        } else if (translateY.value > -SCREEN_HEIGHT / 3) {
          scrollTo(0);
          runOnJS(setVisible)(false);
        } else {
          scrollTo(MAX_TRANSLATE_Y);
        }
      },
    });

    const rBottomSheetStyle = useAnimatedStyle(() => {
      const borderRadius = interpolate(
        translateY.value,
        [MAX_TRANSLATE_Y + 50, MAX_TRANSLATE_Y],
        [25, 5],
        Extrapolate.CLAMP
      );

      return {
        borderRadius,
        transform: [{ translateY: translateY.value }],
      };
    });

    const rBackdropStyle = useAnimatedStyle(() => {
      return {
        opacity: interpolate(
          translateY.value,
          [0, MAX_TRANSLATE_Y],
          [0, 0.5],
          Extrapolate.CLAMP
        ),
      };
    });

    const handleClose = React.useCallback(() => {
      scrollTo(0);
      setTimeout(() => {
        setVisible(false);
      }, 300);
    }, [scrollTo, setVisible]);

    if (!isVisible) return null;

    return (
      <GestureHandlerRootView>
        <Modal transparent statusBarTranslucent>
          <View style={styles.container}>
            <TouchableWithoutFeedback onPress={handleClose}>
              <Animated.View style={[styles.backdrop, rBackdropStyle]} />
            </TouchableWithoutFeedback>
            <PanGestureHandler onGestureEvent={gestureHandler}>
              <Animated.View
                style={[
                  styles.bottomSheetContainer,
                  rBottomSheetStyle,
                  { backgroundColor },
                ]}
              >
                <View style={styles.dragHandler} />
                {children}
              </Animated.View>
            </PanGestureHandler>
          </View>
        </Modal>
      </GestureHandlerRootView>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "#000",
    zIndex: 1,
  },
  bottomSheetContainer: {
    height: SCREEN_HEIGHT,
    width: "100%",
    backgroundColor: "white",
    position: "absolute",
    top: SCREEN_HEIGHT,
    zIndex: 2,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 20,
  },
  dragHandler: {
    width: 40,
    height: 4,
    backgroundColor: "#dfdfdf",
    borderRadius: 2,
    marginBottom: 20,
    alignSelf: "center",
  },
});

export default AppBottomSheet;
