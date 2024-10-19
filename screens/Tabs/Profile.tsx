import { View, Text } from 'react-native'
import React from 'react'
import User from '../pages/User'
import { SafeAreaView } from 'react-native-safe-area-context'
import MoreOptions from '../pages/MoreOptions'

const Profile = () => {
  return (
    <SafeAreaView>
      <User />
    </SafeAreaView>
  )
}

export default Profile