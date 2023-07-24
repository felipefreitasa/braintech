import { useEffect } from "react";
import { Platform, ViewProps } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useTheme } from "styled-components/native";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

import { Container, Message, ModeProps } from "./styles";

const AnimatedContainer = Animated.createAnimatedComponent(Container);

type Props = ViewProps & {
  message: string;
  mode?: ModeProps;
  isVisible: boolean;
};

export function Toast({ message, mode, isVisible, ...rest }: Props) {
  const { COLORS } = useTheme();

  const toastFeedback = useSharedValue(0);

  const toastAnimatedStyles = useAnimatedStyle(() => {
    return {
      top: interpolate(toastFeedback.value, [0, 1], [-100, Platform.OS === 'ios' ? 60 : 20]),
    };
  });

  useEffect(() => {
    toastFeedback.value = withTiming(isVisible ? 1 : 0);
  }, [isVisible]);

  return (
    <AnimatedContainer mode={mode} style={toastAnimatedStyles} {...rest}>
      <Feather
        size={22}
        name={mode === "success" ? "check" : "alert-circle"}
        color={mode === "success" ? COLORS.SUCCESS : COLORS.ERROR}
      />

      <Message mode={mode}>{message}</Message>
    </AnimatedContainer>
  );
}
