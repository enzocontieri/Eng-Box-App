import { View, Image } from 'react-native';
import React from 'react';
import { useUser } from './UserContext';
import { Ionicons } from '@expo/vector-icons';

const ProfileImagesSection = () => {

    const { userProfile } = useUser();

    return (
        <View className='items-center justify-center'>
            <View className='relative w-40 h-40 rounded-full items-center justify-center shadow-sm' >
                {userProfile.profilePhotoUrl ? (
                    <Image
                        source={{ uri: userProfile.profilePhotoUrl }}
                        className='w-full h-full '
                    />
                ) : (
                    <Ionicons name="person" size={100} color="#ccc" />
                )}
                <View className='absolute bottom-0 right-[-2px] bg-white rounded-full' >
                    <Image
                        source={require('../../assets/icons/user-pages-icons/account-level-icons/ex-level-icon.png')}
                        className='w-12 h-12'
                    />
                </View>
            </View>
        </View>
    );
}

export default ProfileImagesSection;