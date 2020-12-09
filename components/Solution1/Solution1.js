import React, { useState } from 'react'
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import medio from '../../assets/medio.png'
import styles from './Solution1Styles'

export default function Solution1() {
  const [inputText, setInputText] = useState('')
  const [name, setName] = useState('')
  
  const handleClick = () => {
    setName(inputText)
    setInputText('')
  }

  return (
    <View style={styles.container}>
      <Image source={medio}/>
      <Text style={styles.text}>Üdv, {name}!</Text>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} onChangeText={text => setInputText(text)} value={inputText} placeholder='Név'/>
        <TouchableOpacity onPress={handleClick} style={styles.btn}>
          <Text style={styles.btnText}>Küldés</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}