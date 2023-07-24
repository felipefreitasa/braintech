import { useState } from "react";
import { TextInputProps } from "react-native";
import { useTheme } from "styled-components/native";
import Animated, { FadeInUp } from "react-native-reanimated";

import { Container, ErrorMessage, InputContainer, Label } from "./styles";

type Props = TextInputProps & {
  label: string;
  errorMessage?: string | null;
};

export function Input({ label, errorMessage, ...rest }: Props) {
  const { COLORS } = useTheme();

  const [isFocused, setIsFocused] = useState(false);

  const isInvalid = !!errorMessage;

  return (
    <Container>
      <Label>{label}</Label>

      <InputContainer
        autoCorrect={false}
        autoCapitalize="none"
        isFocused={isFocused}
        placeholderTextColor={COLORS.GRAY}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        isInvalid={isInvalid}
        {...rest}
      />

      {isInvalid && (
        <Animated.View entering={FadeInUp}>
          <ErrorMessage>{errorMessage}</ErrorMessage>
        </Animated.View>
      )}
    </Container>
  );
}
