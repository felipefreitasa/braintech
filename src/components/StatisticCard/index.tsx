import { Feather } from "@expo/vector-icons";
import { useTheme } from "styled-components/native";
import Animated, { FadeIn } from "react-native-reanimated";

import { Skeleton } from "@components/Skeleton";

import { Container, Content, IconContainer, Subtitle, Title } from "./styles";

const AnimatedSubtitle = Animated.createAnimatedComponent(Subtitle);

type Props = {
  title: string;
  subtitle?: string | number;
  isLoading?: boolean;
  icon: keyof typeof Feather.glyphMap;
};

export function StatisticCard({ icon, title, subtitle, isLoading }: Props) {
  const { COLORS } = useTheme();

  return (
    <Container>
      <IconContainer>
        <Feather size={28} name={icon} color={COLORS.WHITE} />
      </IconContainer>

      <Content>
        <Title>{title}</Title>

        {isLoading ? (
          <Skeleton height={13} width={140} style={{ marginTop: 8 }} />
        ) : (
          <AnimatedSubtitle entering={FadeIn}>
            {isLoading ? "-" : subtitle}
          </AnimatedSubtitle>
        )}
      </Content>
    </Container>
  );
}
