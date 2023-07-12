import { useCallback, useState } from "react"
import Animated, { FadeInLeft } from "react-native-reanimated"
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

const AnimatedHeaderContainer = Animated.createAnimatedComponent(HeaderContainer)
const AnimatedStatisticsContainer = Animated.createAnimatedComponent(StatisticsContainer)

export function Profile() {

  const { COLORS } = useTheme()

  const [isSoundEffectsEnabled, setIsSoundEffectsEnabled] = useState(true)
  const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(true)

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
      <AnimatedHeaderContainer entering={FadeInLeft}>
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
      </AnimatedHeaderContainer>

      <AnimatedStatisticsContainer entering={FadeInLeft.delay(250)}>
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
      </AnimatedStatisticsContainer>

      <Animated.View 
        style={{ width: '100%' }}
        entering={FadeInLeft.delay(500)}
      >
        <StatisticsTitle>
          Configurações 
        </StatisticsTitle>

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
      </Animated.View >
    </Container>
  )
}