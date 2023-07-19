import { useState } from "react";
import { TextInputProps } from "react-native";
import { useTheme } from "styled-components/native";

import { Container, Label } from "./styles";

type Props = TextInputProps & {
  label: string
}

export function Input({ label, ...rest }: Props) {
  const { COLORS } = useTheme();

  const [isFocused, setIsFocused] = useState(false);

  return (
    <>
      <Label>
        {label}
      </Label>

      <Container
        autoCorrect={false}
        autoCapitalize="none"
        isFocused={isFocused}
        placeholderTextColor={COLORS.GRAY}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        {...rest}
      />
    </>
  );
}
