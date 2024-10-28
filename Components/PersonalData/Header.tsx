import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const Header = () => {
    const navigation = useNavigation();

    return (
        <View className='flex-row items-center justify-center mt-8' >
            <TouchableOpacity
                onPress={() => navigation.goBack()}
                className='absolute left-4 bg-white p-2 rounded-full shadow-lg'
            >
                <Ionicons name='chevron-back' color='black' size={24} />
            </TouchableOpacity>

            <Text className='ml-8 text-3xl text-[#1F3B4D]' style={{ fontFamily: 'poppins-semi-bold' }} >Dados Pessoais</Text>
        </View>
    );
}

export default Header;