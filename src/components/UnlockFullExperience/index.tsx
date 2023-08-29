import { ViewProps } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Animated, { FadeIn } from "react-native-reanimated";

import { AppNavigatorRoutesProps } from "../../routes/app.routes";

import { Button } from "@components/Button";
import { TextButton } from "@components/TextButton";
import { ListFeedbackStatus } from "@components/ListFeedbackStatus";

import { Container } from "./styles";

type Props = ViewProps & {
  subtitle: string;
};

export function UnlockFullExperience({ subtitle, ...rest }: Props) {
  const { navigate } = useNavigation<AppNavigatorRoutesProps>();

  return (
    <Container {...rest}>
      <Animated.View entering={FadeIn.duration(600)} style={{ flex: 1 }}>
        <ListFeedbackStatus
          icon="log-in"
          mode="default"
          subtitle={subtitle}
          title="Unlock the full experience"
        />
      </Animated.View>

      <Animated.View
        entering={FadeIn.duration(600).delay(250)}
        style={{ width: "100%", paddingBottom: 40 }}
      >
        <Button title="Sign up" onPress={() => navigate("nameOnboarding")} />

        <TextButton
          highlightLabel="Sign in!"
          label="Already have account ?"
          onPress={() => navigate("signIn")}
        />
      </Animated.View>
    </Container>
  );
}
