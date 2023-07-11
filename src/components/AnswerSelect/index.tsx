import { useEffect } from 'react'
import { PressableProps } from 'react-native'
import { useTheme } from 'styled-components/native'
import { Canvas, Path, Skia, Circle, useValue, runTiming } from '@shopify/react-native-skia'
import { interpolateColor, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'

import { Container, Title } from './styles'

type Props = PressableProps & {
  title: string;
  isSelected: boolean;
}

const CHECK_SIZE = 28
const CHECK_STROKE = 2
const RADIUS = (CHECK_SIZE - CHECK_STROKE) / 3

export function AnswerSelect({ title, isSelected, ...rest }: Props) {

  const { COLORS } = useTheme()

  const selected = useSharedValue(0)

  const circle = useValue(0)

  const selectedAnimatedStyles = useAnimatedStyle(() => {
    return {
      borderColor: interpolateColor(
        selected.value,
        [0, 1],
        ['transparent', COLORS.PRIMARY]
      ),
      backgroundColor: interpolateColor(
        selected.value,
        [0, 1],
        [COLORS.CARD, COLORS.CARD_ACTIVE]
      )
    }
  })

  const path = Skia.Path.Make()
  path.addCircle(CHECK_SIZE, CHECK_SIZE, RADIUS)

  useEffect(() => {
    selected.value = withTiming(isSelected ? 1 : 0, { duration: 200})
    runTiming(circle, isSelected ? (RADIUS / 2) : 0, { duration: 200 })
  }, [isSelected])

  return (
    <Container 
      style={selectedAnimatedStyles}
      {...rest}
    >
      <Canvas style={{  height: CHECK_SIZE * 2, width: CHECK_SIZE * 2 }}>
        <Path
          path={path}
          style='stroke'
          color={COLORS.PRIMARY}
          strokeWidth={CHECK_STROKE}
        />

        <Circle
          cx={CHECK_SIZE}
          cy={CHECK_SIZE}
          r={circle}
          color={COLORS.PRIMARY}
        />
      </Canvas>

      <Title>
        {title}
      </Title>
    </Container>
  )
}