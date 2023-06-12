import GoSvg from '@assets/go.svg'
import VueJsSvg from '@assets/vue.svg'
import NodeJsSvg from '@assets/node.svg'
import ReactJsSvg from '@assets/react.svg'
import FlutterSvg from '@assets/flutter.svg'
import ReactNativeSvg from '@assets/react-native.svg'

export function handleTechnologyIcon(technology: string){
  switch(technology){
    case 'Flutter':
      return <FlutterSvg />

    case 'React Native':
      return <ReactNativeSvg />

    case 'Vue JS':
      return <VueJsSvg />

    case 'Node JS':
      return <NodeJsSvg />

    case 'Go':
      return <GoSvg />

    case 'React JS':
      return <ReactJsSvg /> 
  }
}