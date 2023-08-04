import { useState } from "react";
import { Feather } from "@expo/vector-icons";
import { TextInputProps } from "react-native";
import { useTheme } from "styled-components/native";
import Animated, { FadeInUp } from "react-native-reanimated";

import {
  Label,
  Container,
  ErrorMessage,
  InputContainer,
  HideAndShowPasswordButton,
} from "./styles";

type Props = TextInputProps & {
  label: string;
  isPassword?: boolean;
  isPasswordVisible?: boolean;
  errorMessage?: string | null;
  handlePasswordVisibility?: () => void;
};

export function Input({ label, errorMessage, isPassword, isPasswordVisible, handlePasswordVisibility, ...rest }: Props) {
  const { COLORS } = useTheme();

  const [isFocused, setIsFocused] = useState(false);

  const isInvalid = !!errorMessage;

  return (
    <Container>
      <Label>{label}</Label>

      <InputContainer
        autoCorrect={false}
        isInvalid={isInvalid}
        isFocused={isFocused}
        autoCapitalize="none"
        placeholderTextColor={COLORS.GRAY}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        {...rest}
      />

      {isPassword && (
        <HideAndShowPasswordButton
          isFocused={isFocused}
          hitSlop={{ bottom: 20, left: 20, right: 20, top: 20 }}
          onPress={handlePasswordVisibility}
        >
          <Feather
            size={22}
            color={COLORS.GRAY}
            name={isPasswordVisible ? "eye-off" : "eye"}
          />
        </HideAndShowPasswordButton>
      )}

      {isInvalid && (
        <Animated.View entering={FadeInUp}>
          <ErrorMessage>{errorMessage}</ErrorMessage>
        </Animated.View>
      )}
    </Container>
  );
}
