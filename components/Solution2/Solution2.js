import React, { useEffect, useState } from 'react'
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import medio from '../../assets/medio.png'
import styles from './Solution2Styles'

export default function Solution2() {
  const [inputText, setInputText] = useState('')
  const [name, setName] = useState('')

  useEffect(() => {
     if(!name) setName('idegen')
  }, [name])
  
  const handleClick = () => {
    setName(inputText)
    setInputText('')
  }

  return (
    <View style={styles.container}>
      <Image source={medio}/>
      <Text style={styles.text}>Üdv, {name}!</Text>
      <TextInput style={styles.input} onChangeText={text => setInputText(text)} value={inputText} placeholder='Hogy hívnak?' />
      <TouchableOpacity onPress={handleClick} style={styles.btn}>
         <Text style={styles.btnText}>Küldés</Text>
      </TouchableOpacity>
    </View>
  )
}