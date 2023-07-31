import { useEffect } from "react";
import { useTheme } from "styled-components/native";
import { Dimensions, ViewProps } from "react-native";
import Animated, {
  withRepeat,
  withTiming,
  interpolate,
  useSharedValue,
  useAnimatedStyle,
  interpolateColor,
} from "react-native-reanimated";

import { Container } from "./styles";

const { width } = Dimensions.get("screen");

type Props = ViewProps & {
  width: number;
  height: number;
  borderRadius?: number;
};

export function Skeleton({ height, width, borderRadius, ...rest }: Props) {
  const { COLORS } = useTheme();

  const skeletonAnimation = useSharedValue(0);

  const skeletonAnimatedStyles = useAnimatedStyle(() => {
    return {
      width,
      height: "100%",
      backgroundColor: interpolateColor(
        skeletonAnimation.value,
        [0, 1],
        [COLORS.CARD, COLORS.CARD]
      ),
      transform: [
        {
          translateX: interpolate(
            skeletonAnimation.value,
            [0, 1],
            [-width, width]
          ),
        },
      ],
    };
  });

  useEffect(() => {
    skeletonAnimation.value = withRepeat(
      withTiming(1, {
        duration: 1000,
      }),
      -1
    );

    return () => {
      skeletonAnimation.value = 0;
    };
  }, []);

  return (
    <Container
      width={width}
      height={height}
      borderRadius={borderRadius}
      {...rest}
    >
      <Animated.View style={skeletonAnimatedStyles} />
    </Container>
  );
}
