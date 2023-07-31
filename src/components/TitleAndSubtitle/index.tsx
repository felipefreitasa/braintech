import { View, ViewProps } from "react-native";

import { Title, Subtitle } from "./styles";

type Props = ViewProps & {
  title: string;
  subtitle: string;
};

export function TitleAndSubtitle({ title, subtitle, ...rest }: Props) {
  return (
    <View {...rest}>
      <Title>{title}</Title>

      <Subtitle>{subtitle}</Subtitle>
    </View>
  );
}
