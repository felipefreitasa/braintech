import { TouchableOpacity, TouchableOpacityProps } from "react-native";

import { HighlightLabel, Label } from "./styles";

type Props = TouchableOpacityProps & {
  label: string;
  highlightLabel: string;
};

export function TextButton({ label, highlightLabel, ...rest }: Props) {
  return (
    <TouchableOpacity activeOpacity={0.8} {...rest}>
      <Label>
        {label} <HighlightLabel>{highlightLabel}</HighlightLabel>
      </Label>
    </TouchableOpacity>
  );
}
