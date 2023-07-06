import { useState } from "react"
import { View, Switch } from "react-native"
import { useTheme } from "styled-components/native"

import { UserPhoto } from "@components/UserPhoto"
import { IconButton } from "@components/IconButton"
import { SettingsItem } from "@components/SettingsItem"
import { StatisticCard } from "@components/StatisticCard"

import { Container, HeaderContainer, UserEmail, UserInformationsContainer, UserName, LeftContainer, StatisticsTitle } from "./styles"

export function Profile() {

  const { COLORS } = useTheme()

  const [isDarkModeEnabled, setIsDarkModeEnabled] = useState(false)
  const [isSoundEffectsEnabled, setIsSoundEffectsEnabled] = useState(false)
  const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(false)

  const toggleDarkModeSwitch = () => setIsDarkModeEnabled(previousState => !previousState)
  const toggleSoundEffectsSwitch = () => setIsSoundEffectsEnabled(previousState => !previousState)
  const toggleNotificationsSwitch = () => setIsNotificationsEnabled(previousState => !previousState)

  return (
    <Container>
      <HeaderContainer>
        <LeftContainer>
          <UserPhoto
            size={60}
            source={{ uri: 'https://github.com/felipefreitasa.png' }}
          />

          <UserInformationsContainer>
            <UserName numberOfLines={1}>
              Felipe Freitas
            </UserName>

            <UserEmail numberOfLines={1}>
              felipefreitas@gmail.com
            </UserEmail>
          </UserInformationsContainer>
        </LeftContainer>

        <IconButton
          mode="error"
          icon="log-out"
          iconSize={24}
        />
      </HeaderContainer>

      <View style={{ width: '100%', marginBottom: 24 }}>
        <StatisticsTitle>
          Estatísticas 
        </StatisticsTitle>

        <StatisticCard
          icon='code'
          subtitle='React Native'
          title='Tecnologia favorita'
        />

        <StatisticCard
          subtitle='8'
          icon='git-branch'
          title='Exercícios respondidos'
        />
      </View>

      <View style={{ width: '100%' }}>
        <StatisticsTitle>
          Configurações 
        </StatisticsTitle>

        <SettingsItem
          icon="moon"
          title="Modo noturno"
          rightAction={(
            <Switch
              value={isDarkModeEnabled}
              onValueChange={toggleDarkModeSwitch}
              thumbColor={isDarkModeEnabled ? COLORS.PRIMARY : COLORS.WHITE}
              trackColor={{ false: COLORS.GRAY, true: COLORS.PRIMARY_30 }}
            />
          )}
        />

        <SettingsItem
          icon="bell"
          title="Notificações"
          rightAction={(
            <Switch
              value={isNotificationsEnabled}
              onValueChange={toggleNotificationsSwitch}
              thumbColor={isNotificationsEnabled ? COLORS.PRIMARY : COLORS.WHITE}
              trackColor={{ false: COLORS.GRAY, true: COLORS.PRIMARY_30 }}
            />
          )}
        />

        <SettingsItem
          icon="volume-2"
          title="Efeitos sonoros"
          rightAction={(
            <Switch
              value={isSoundEffectsEnabled}
              onValueChange={toggleSoundEffectsSwitch}
              thumbColor={isSoundEffectsEnabled ? COLORS.PRIMARY : COLORS.WHITE}
              trackColor={{ false: COLORS.GRAY, true: COLORS.PRIMARY_30 }}
            />
          )}
        />
      </View>
    </Container>
  )
}