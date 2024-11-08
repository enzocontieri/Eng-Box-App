import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../utils/types/navigation';
import { useNavigation } from '@react-navigation/native';

import { Ionicons } from '@expo/vector-icons';

interface GoBackButtonProps {
    title?: string;
}

type NavigationProp = StackNavigationProp<RootStackParamList>;

const GoBackButton = ({ title }: GoBackButtonProps) => {

    const navigation = useNavigation<NavigationProp>();

    return (
        <View className='flex-row items-center justify-center mt-8' >
            <TouchableOpacity
                onPress={() => navigation.goBack()}
                className='absolute left-4 bg-white p-2 rounded-full shadow-lg'
            >
                <Ionicons name='chevron-back' color='black' size={24} />
            </TouchableOpacity>

            {title && (
                <Text className='text-3xl text-[#1F3B4D]' style={{ fontFamily: 'poppins-semi-bold' }} >{title}</Text>
            )}
        </View>
    );
}

export default GoBackButton;