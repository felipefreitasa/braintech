import Animated, { FadeIn } from "react-native-reanimated";

import { ListFeedbackStatus } from "@components/ListFeedbackStatus";

import { Container } from "./styles";

export function NoInternetConnection() {
  return (
    <Container>
      <Animated.View entering={FadeIn.duration(600)}>
        <ListFeedbackStatus
          mode="default"
          icon="wifi-off"
          title="No internet connection"
          subtitle="You need internet access to continue using the BrainTech app"
        />
      </Animated.View>
    </Container>
  );
}
