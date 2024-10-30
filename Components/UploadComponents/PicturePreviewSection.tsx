import { View, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { CameraCapturedPicture } from 'expo-camera';

const PicturePreviewSection = ({
    picture,
    handleRetakePicture
}: {
    picture: CameraCapturedPicture;
    handleRetakePicture: () => void;
}) => (
    <SafeAreaView className='flex-1 items-center justify-center'>
        <View className='w-full h-[70%] p-px justify-center items-center' >
            <Image
                className='w-[95%] h-[85%] rounded-2xl bg-contain'
                source={{ uri: `data:image/jpg;base64,${picture.base64}`}}
            />
        </View>

        <View className='mt-[4%] flex-row justify-center w-full' >
            <TouchableOpacity
                className='items-center justify-center p-4 rounded-2xl bg-gray-500'
                onPress={handleRetakePicture}
            >
                <Ionicons name='trash' size={60} color={'red'} />
            </TouchableOpacity>
        </View>
    </SafeAreaView>
);


export default PicturePreviewSection;