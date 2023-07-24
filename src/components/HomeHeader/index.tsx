import { Feather } from "@expo/vector-icons";
import { useTheme } from "styled-components/native";
import Animated, { FadeIn } from "react-native-reanimated";

import { getSalutation } from "@utils/getSalutation";

import { useAuth } from "@hooks/useAuth";

import { UserPhoto } from "@components/UserPhoto";

import {
  Salution,
  UserName,
  Container,
  TextContent,
  LeftContainer,
  ProfileIconContainer,
} from "./styles";

export function HomeHeader() {
  const { loggedUser } = useAuth();

  const { COLORS } = useTheme();

  return (
    <Container>
      <Animated.View entering={FadeIn}>
        <LeftContainer>
          {loggedUser?.user.photoURL ? (
            <UserPhoto size={40} source={{ uri: loggedUser?.user.photoURL }} />
          ) : (
            <ProfileIconContainer>
              <Feather name="user" size={24} color={COLORS.PRIMARY} />
            </ProfileIconContainer>
          )}

          <TextContent>
            <Salution>{getSalutation()}</Salution>

            <UserName>{loggedUser?.user.displayName}</UserName>
          </TextContent>
        </LeftContainer>
      </Animated.View>
    </Container>
  );
}
