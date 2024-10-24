import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderMenu from '../../Components/buttons/HeaderMenu';
import ProfileImagesSection from '../../Components/profile/ProfileImagesSection';
import ProfileInfo from '../../Components/profile/ProfileInfo';
import PostList from '../../Components/profile/PostList';

const Profile = () => {
  return (
    <SafeAreaView className='flex-1'>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 45 }} >

        <View className='flex-row justify-end m-2' >
          <HeaderMenu />
        </View>

        <ProfileImagesSection />

        <ProfileInfo />

        <View className='flex items-center justify-center w-full h-[40px] border-b-2 border-[#B8B8B8] mt-[32px]' >
          <Text className='text-base text-[#4A4A4A]' style={{ fontFamily: 'poppins-medium'}} >Postagens</Text>
        </View>

        <PostList />
      </ScrollView>
    </SafeAreaView>
  )
}

export default Profile