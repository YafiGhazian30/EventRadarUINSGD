import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

const _layout = () => {
  return (
    <Tabs.Screen 
        name="index"
        options={{
            title: 'Home',
            headerShown: false
        }}
    />
  )
}

export default _layout