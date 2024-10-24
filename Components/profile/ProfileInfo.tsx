import { View, Text, Image } from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ProfileInfo = () => {
    return (
        <View className='ml-4 mt-4'>
            <View className='flex-row items-center'>
                <Ionicons name='person-sharp' size={25} color="#303030" />
                <Text className='text-base text-[#4A4A4A] ml-2' style={{ fontFamily: 'poppins-medium' }} >
                    John Doe <Text>(@john.doe)</Text>
                </Text>
            </View>

            <View className='flex-row items-center mt-2' >
                <Ionicons name='location-sharp' size={25} color="#303030" />
                <Text className='text-base text-[#4A4A4A] ml-2' style={{ fontFamily: 'poppins-medium' }} >
                    São Paulo, SP
                </Text>
            </View>

            <View className='flex-row items-center mt-2' >
                <Image
                    source={require('../../assets/icons/user-pages-icons/user-info/level-icon.png')}
                    className="w-[25px] h-[25px] mr-2"
                />
                <Text className='text-base text-[#50B454]' >
                    Consumidor Verde
                </Text>
            </View>
        </View>
    );
}

export default ProfileInfo;