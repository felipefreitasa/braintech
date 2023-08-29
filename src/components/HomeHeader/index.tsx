import { Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Animated, { FadeIn } from "react-native-reanimated";

import { getSalutation } from "@utils/getSalutation";

// import { useAuth } from "@hooks/useAuth";

import { HomeTabsNavigatorRoutesProps } from "../../routes/tabs.routes";

import { Salution, UserName, Container, LeftContainer } from "./styles";

export function HomeHeader() {
  // const { loggedUser } = useAuth();

  const { navigate } = useNavigation<HomeTabsNavigatorRoutesProps>();

  return (
    <Pressable onPress={() => navigate("profile")}>
      <Container>
        <Animated.View entering={FadeIn}>
          <LeftContainer>
            <View>
              <Salution>
                Hello,
              </Salution>

              <UserName>
                {getSalutation()}
              </UserName>
            </View>
          </LeftContainer>
        </Animated.View>
      </Container>
    </Pressable>
  );
}
