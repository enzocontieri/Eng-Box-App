import { View, Image } from 'react-native';
import React from 'react';
import { useUser } from './UserContext';

const ProfileImagesSection = () => {

    const { userProfile } = useUser();

    return (
        <View>
            {/* Banner */}
            <View className='relative w-full h-[200px]' >
                <Image
                    source={{ uri: userProfile.bannerUrl }}
                    className='w-full h-full'
                    resizeMode='cover'
                />
            </View>

            {/* Photo + Level Icon */}
            <View className='items-center mt-[-100px]' >
                <View className='relative' >
                    <Image
                        source={{ uri: userProfile.profilePhotoUrl }}
                        className='w-[150px] h-[150px] rounded-full'
                    />
                    <View className='absolute bottom-[-5px] right-[-5px] bg-[#444443] rounded-full w-[50px] h-[50px]' >
                        <Image
                            source={require('../../assets/icons/user-pages-icons/account-level-icons/ex-level-icon.png')}
                            className='w-[50px] h-[50px]'
                        />
                    </View>
                </View>
            </View>
        </View>
    );
}

export default ProfileImagesSection;