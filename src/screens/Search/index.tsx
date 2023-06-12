import { useState } from 'react'
import { Keyboard } from 'react-native'

import { Input } from '@components/Input'
import { Header } from '@components/Header'

import { Container } from './styles'

export function Search() {

  const [search, setSearch] = useState('')

  return (
    <Container onPress={Keyboard.dismiss}>
      <Header 
        title='Buscar tecnologia'
        style={{ marginBottom: 16 }}
      />

      <Input 
        value={search}
        onChangeText={setSearch}
        placeholder='Busque uma tecnologia'
      />
    </Container>
  )
}