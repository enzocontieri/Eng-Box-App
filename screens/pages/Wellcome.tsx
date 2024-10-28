import {View, Text, TouchableOpacity, SafeAreaView, Image} from 'react-native';
import React from 'react';
import 'tailwindcss/tailwind.css';
import {StackNavigationProp} from "@react-navigation/stack";
import {RootStackParamList} from "../../utils/types/navigation";
import {useNavigation} from '@react-navigation/native'

type NavigationProp = StackNavigationProp<RootStackParamList>;
export default function WellcomeScreen() {
    const navigation = useNavigation<NavigationProp>();
    return (

            <View className='flex-1 bg-[#F9F9F9] items-center justify-center mt-20'>
                <View className='relative flex justify-center items-center  w-full h-64 mb-6'>
                    <Image
                        source={require('../../assets/icons/iconsLogin/ImagemDeWellcome.png')}
                        className="absolute shadown top-0 left-0 w-full h-full object-cover"
                    />
                    <View className='justify-center items-center'>
                        <Text className='mb-4 text-4xl font-bold text-[#F9F9F9]'>ENG BOX</Text>
                        <Text className='text-[#F9F9F9] text-sm'>PENSE FORA DA CAIXA</Text>
                    </View>
                </View>

                <TouchableOpacity
                  className='w-4/5 bg-[#1F3B4D] shadow-lg py-4 mb-4 rounded-2xl'
                    onPress={() => navigation.navigate("Register")}>
                    <Text className='text-center text-[#FFFFFF] text-lg'>Crie seu Perfil</Text>
                </TouchableOpacity>

                <TouchableOpacity
                className='w-4/5 bg-[#FFFFFF] shadow-lg py-4 mb-4 rounded-2xl'
                onPress={()=> navigation.navigate("LogIn")}>
                    <Text className='text-center border border-[#F9F9F9] text-[#1F3B4D] text-lg'>Entrar</Text>
                </TouchableOpacity>
            </View>

    )
}

