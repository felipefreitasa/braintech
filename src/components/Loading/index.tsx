import Animated, { FadeIn } from "react-native-reanimated";
import { Container, LoadIndicator } from "./styles";

export function Loading() {
  return (
    <Container>
      <Animated.View entering={FadeIn.duration(600)}>
        <LoadIndicator />
      </Animated.View>
    </Container>
  );
}
