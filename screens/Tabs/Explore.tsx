import { View, Text, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'


const Explore = ({ navigation }) => {
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate('User')}>
        <Text>User</Text>
        </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
        <Text>Settings</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Explore
