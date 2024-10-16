import React from 'react';
import { View, Text, ImageBackground, Image, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const UserDatail  = ({ route }) => {

    const navigation = useNavigation();
    const { username, description, useravatar, icon, title  } = route.params;

  return (
    <SafeAreaView className='flex-1'>
      <View className='h-[250px] w-[100%]'>
        <Image 
          source={useravatar} 
          className='h-[250px] w-[100%] absolute top-0'
          style={{ resizeMode: 'cover' }}
        />
        <TouchableOpacity 
          onPress={() => navigation.goBack()} 
          className='absolute top-10 left-5 bg-white p-2 rounded-full'
        >
          <Ionicons name="chevron-back" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View className='flex-1 mt-[-50px] bg-white rounded-t-3xl p-6'>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View className='flex flex-row justify-between items-center mb-4'>
            <Text className='text-[24px] font-bold'>@{username}</Text>
            <Image source={icon} className='h-10 w-10' />
          </View>
          <View className='mt-5' >
            <Text className='text-[24px] font-bold'>{title}</Text>
            <Text className='text-[14px] mt-3'>{description}</Text>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

export default UserDatail

