import GoSvg from '@assets/go.svg'
import VueJsSvg from '@assets/vue.svg'
import NodeJsSvg from '@assets/node.svg'
import SwiftSvg from '@assets/swift.svg'
import ReactJsSvg from '@assets/react.svg'
import KotlinSvg from '@assets/kotlin.svg'
import SpringSvg from '@assets/spring.svg'
import FlutterSvg from '@assets/flutter.svg'
import AngularSvg from '@assets/angular.svg'
import ReactNativeSvg from '@assets/react-native.svg'

export function handleTechnologyIcon(technology: string){
  switch(technology){
    case 'Flutter':
      return <FlutterSvg />

    case 'Kotlin':
      return <KotlinSvg width={18}/>

    case 'Swift':
      return <SwiftSvg width={24}/>

    case 'React Native':
      return <ReactNativeSvg />

    case 'Vue JS':
      return <VueJsSvg />

    case 'Angular JS':
      return <AngularSvg width={24}/>

    case 'Node JS':
      return <NodeJsSvg />

    case 'Go':
      return <GoSvg />

    case 'Spring':
      return <SpringSvg width={20}/>

    case 'React JS':
      return <ReactJsSvg /> 
  }
}