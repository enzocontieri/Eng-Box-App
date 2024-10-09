import React from 'react';
import { View, Text, ImageBackground, Image } from 'react-native';

const UserDatail  = ({ route }) => {

    const { username, description, useravatar, icon } = route.params;

  return (
    <View className='flex-1 items-center justify-center'>
            <ImageBackground source={useravatar} className='h-[200px] w-[200px]' />
            <Text className='text-[24px] font-bold'>{username}</Text>
            <Text className='text-[16px]'>{description}</Text>
            <Image source={icon} className='h-10 w-10 mt-4' />
        </View>
  )
}

export default UserDatail