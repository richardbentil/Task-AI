import { StyleSheet } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen name='index' options={{headerShown: false}} />
      <Stack.Screen name='signin' options={{headerShown: false}} />
      <Stack.Screen name='signup' options={{headerShown: false}} />
      <Stack.Screen name='forgot-password' options={{headerShown: false}} />
      <Stack.Screen name='reset-password' options={{headerShown: false}} />
      <Stack.Screen name='otp-verification' options={{headerShown: false}} />
      <Stack.Screen name='home' options={{headerShown: false}} />
      <Stack.Screen name='add-task' />
      <Stack.Screen name='not-found' options={{headerShown: false}} />
    </Stack>
  )
}

export default Layout

const styles = StyleSheet.create({})