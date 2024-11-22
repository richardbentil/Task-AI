import { StyleSheet } from 'react-native'
import React from 'react'
import { Stack, useNavigation } from 'expo-router'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const Layout = () => {
  const navigation = useNavigation()
  return (
    <Stack>
      <Stack.Screen name='index' options={{ headerShown: false }} />
      <Stack.Screen name='signin' options={{ headerShown: false }} />
      <Stack.Screen name='signup' options={{ headerShown: false }} />
      <Stack.Screen name='forgot-password' options={{ headerShown: false }} />
      <Stack.Screen name='reset-password' options={{ headerShown: false }} />
      <Stack.Screen name='otp-verification' options={{ headerShown: false }} />
      <Stack.Screen name='home' options={{ headerShown: false }} />
      <Stack.Screen name='add-task' />
      <Stack.Screen
        name="add-member"
        options={{
          presentation: 'modal',
          title: 'Add Member',
          headerLeft: () => (
            <MaterialCommunityIcons
              name="close"
              size={24}
              color="primary" // Replace 'primary' with a valid color code or theme variable
              onPress={() => navigation.goBack()} // Handle back navigation
            />
          ),
        }}
      />

      <Stack.Screen name='chat' options={{ presentation: 'modal', title: "Comment(s)" }} />
      <Stack.Screen name='not-found' options={{ headerShown: false }} />
    </Stack>
  )
}

export default Layout

const styles = StyleSheet.create({})