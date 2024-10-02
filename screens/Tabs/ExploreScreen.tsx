import { View, Text, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from '@react-navigation/native';

const ExploreScreen = ({ navigation }) => {
  return (
    <View>
      <Text>ExploreScreen</Text>
      <TouchableOpacity onPress={() => navigation.navigate('User')}>
        <Text>User</Text>
        </TouchableOpacity>
    </View>
  )
}

export default ExploreScreen
