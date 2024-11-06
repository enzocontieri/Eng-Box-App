import { View, Text, Image } from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useUser } from './UserContext';

const ProfileInfo = () => {

    const { userProfile } = useUser();


    return (
        <View className='ml-4 mt-4'>
            <View className='flex-row items-center'>
                <Ionicons name='person-sharp' size={25} color="#303030" />
                <Text className='text-base text-[#4A4A4A] ml-2' style={{ fontFamily: 'poppins-medium' }} >
                    {userProfile.name}
                </Text>
            </View>

            <View className='flex-row items-center mt-2' >
                <Image
                    source={require('../../assets/icons/user-pages-icons/user-info/level-icon.png')}
                    className="w-[25px] h-[25px] mr-2"
                />
                <Text className='text-base text-[#50B454]' style={{ fontFamily: 'poppins-medium' }}>
                    Consumidor Verde
                </Text>
            </View>
        </View>
    );
}

export default ProfileInfo;