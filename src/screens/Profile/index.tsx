import { useCallback, useState } from "react"
import { View, Switch, Alert } from "react-native"
import { useTheme } from "styled-components/native"
import { useFocusEffect } from "@react-navigation/native"

import { historyGetAll } from "@storage/historyGetAll"
import { HistoryItemProps } from "@storage/historyCreate"

import { findMostPresentTechnology } from "@utils/findMostPresentTechnology"

import { UserPhoto } from "@components/UserPhoto"
import { IconButton } from "@components/IconButton"
import { SettingsItem } from "@components/SettingsItem"
import { StatisticCard } from "@components/StatisticCard"

import { Container, HeaderContainer, UserEmail, UserInformationsContainer, UserName, LeftContainer, StatisticsTitle, StatisticsContainer } from "./styles"

export function Profile() {

  const { COLORS } = useTheme()

  const [isDarkModeEnabled, setIsDarkModeEnabled] = useState(true)
  const [isSoundEffectsEnabled, setIsSoundEffectsEnabled] = useState(true)
  const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(true)

  const toggleDarkModeSwitch = () => setIsDarkModeEnabled(previousState => !previousState)
  const toggleSoundEffectsSwitch = () => setIsSoundEffectsEnabled(previousState => !previousState)
  const toggleNotificationsSwitch = () => setIsNotificationsEnabled(previousState => !previousState)

  const [isLoading, setIsLoading] = useState(false)
  const [mostPresenstTechnology, setMostPresenstTechnology] = useState('')
  const [historyData, setHistoryData] = useState<HistoryItemProps[]>()

  async function fetchHistory(){
    try {
      setIsLoading(true)

      const data = await historyGetAll()

      setMostPresenstTechnology(findMostPresentTechnology(data))

      setHistoryData(data)      

    } catch (error) {
      Alert.alert('Histórico', 'Não foi possível carregar o seu histórico')
      
    } finally {
      setIsLoading(false)
    }
  }

  useFocusEffect(useCallback(() => {
    fetchHistory()
  }, [])) 

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

      <StatisticsContainer>
        <StatisticsTitle>
          Estatísticas 
        </StatisticsTitle>

        <StatisticCard
          icon='code'
          isLoading={isLoading}
          subtitle={mostPresenstTechnology}
          title='Tecnologia favorita'
        />

        <StatisticCard
          icon='git-branch'
          isLoading={isLoading}
          title='Exercícios respondidos'
          subtitle={historyData?.length}
        />
      </StatisticsContainer>

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