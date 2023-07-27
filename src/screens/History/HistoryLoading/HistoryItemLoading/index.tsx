import { Skeleton } from "@components/Skeleton";

import { Container, Content } from "./styles";

export function HistoryItemLoading() {
  return (
    <Container>
      <Skeleton width={37} height={37} style={{ marginRight: 8 }} />

      <Content>
        <Skeleton width={100} height={15} style={{ marginBottom: 4 }} />
        <Skeleton width={160} height={10} />
      </Content>
    </Container>
  );
}
