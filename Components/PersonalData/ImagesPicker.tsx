import { View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';

interface PickerProps {
    bannerUrl?: string;
    profilePhotoUrl?: string;
    isEditing?: boolean;
    onPickImage: (key: ImageKey) => void;
}

type ImageKey = 'bannerUrl' | 'profilePhotoUrl';

export const BannerPicker: React.FC<PickerProps> = ({ bannerUrl, isEditing, onPickImage }) => {
    return (
        <View className='relative' >
            <Image
                source={{ uri: bannerUrl }}
                className='w-full h-48 boder-b-2 border-[#B0BEC5] shadow-lg'
            />
            {isEditing && (
                <TouchableOpacity
                    onPress={() => onPickImage('bannerUrl')}
                    className='absolute top-2 right-3'
                >
                    <AntDesign name='pluscircle' size={40} color='#455A64' />
                </TouchableOpacity>
            )}
        </View>
    );
}

export const ProfilePhotoPicker: React.FC<PickerProps> = ({ profilePhotoUrl, isEditing, onPickImage }) => {
    return (
        <View className='flex justify-center items-center mt-[-100px]' >
            <View className='relative' >
                <Image
                    source={{ uri: profilePhotoUrl }}
                    className='w-[150px] h-[150px] rounded-full border-2 border-[#B0BEC5] shadow-lg'
                />
                {isEditing && (
                    <TouchableOpacity
                        onPress={() => onPickImage('profilePhotoUrl')}
                        className='absolute bottom-[-5px] right-[-5px]'
                    >
                        <AntDesign name='pluscircle' size={40} color='#455A64' />
                    </TouchableOpacity>
                )}
            </View>
        </View>
    )
}