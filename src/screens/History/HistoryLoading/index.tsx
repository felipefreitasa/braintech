import { View } from "react-native";

import { DateLoading } from "./DateLoading";
import { HistoryItemLoading } from "./HistoryItemLoading";

import { Container } from "./styles";

export function HistoryLoading() {
  return (
    <Container>
      <View style={{ marginBottom: 24 }}>
        <DateLoading />

        <HistoryItemLoading />
        <HistoryItemLoading />
        <HistoryItemLoading />
        <HistoryItemLoading />
      </View>

      <View>
        <DateLoading />

        <HistoryItemLoading />
        <HistoryItemLoading />
        <HistoryItemLoading />
        <HistoryItemLoading />
      </View>
    </Container>
  );
}
