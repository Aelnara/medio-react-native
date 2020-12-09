import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import Solution1 from './components/Solution1/Solution1'
import Solution2 from './components/Solution2/Solution2'

export default function App() {
  return (
    <ScrollView >
      <Solution1 />
      <Solution2 />
    </ScrollView>
  )
}