import { View, TouchableOpacity, Alert } from 'react-native';
import React from 'react';
import { Image } from 'expo-image';
import { Ionicons } from '@expo/vector-icons';
import { saveToLibraryAsync } from 'expo-media-library';
import Animated, { FadeIn, FadeOut, LinearTransition } from 'react-native-reanimated';

interface PictureViewProps {
    picture: string;
    setPicture: React.Dispatch<React.SetStateAction<string>>;
}

const PictureView = ({ picture, setPicture }: PictureViewProps) => {
    return (
        <Animated.View
            layout={LinearTransition}
            entering={FadeIn}
            exiting={FadeOut}
            className='bg-black'
        >
            <View className='absolute right-1.5 z-10 pt-12 gap-4' >

                <TouchableOpacity
                    onPress={async () => {
                        saveToLibraryAsync(picture);
                        Alert.alert('✅ Foto salva!')
                    }}
                >
                    <Ionicons name='arrow-down-outline' size={35} color={'#ffffff'} />
                </TouchableOpacity>

            </View>

            <View className='absolute left-1.5 z-10 pt-12' >
                <TouchableOpacity
                    onPress={() => setPicture('')}
                >
                    <Ionicons name='close' size={35} color={'#ffffff'} />
                </TouchableOpacity>
            </View>

            <Image
                source={picture}
                className='h-full w-full rounded-md'
            />
        </Animated.View>
    );
}

export default PictureView;