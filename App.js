import { StyleSheet, Text, View,StatusBar } from 'react-native'
import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import Navigator from '../Designs/src/navigation/Navigator'

const App = () => {
  return (
   <NavigationContainer>
    <StatusBar backgroundColor="white" />
    <Navigator/>
   </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})