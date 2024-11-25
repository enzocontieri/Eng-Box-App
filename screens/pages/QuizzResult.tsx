import { View, Text, SafeAreaView, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { RootStackParamList } from '../../utils/types/navigation';
import { StackNavigationProp } from '@react-navigation/stack';
type NavigationProp = StackNavigationProp<RootStackParamList>;

const QuizzResult = () => {
    const navigation = useNavigation<NavigationProp>();
    return (
        <SafeAreaView className='h-full'>
            <View className='mt-5 items-center'>
                <Text className='text-gray-500 text-3xl'
                style={{ fontFamily: 'poppins-semi-bold' }}>Parabéns!</Text>
            </View>

            <View className='mr-2 mt-6 items-center '>
                <Text style={{ fontFamily: 'poppins-semi-bold' }}
                className='text-gray-500 text-xl'> Você é um <Text 
                className='text-green-500 text-xl'>Consumidor Verde</Text>!
                </Text>
            </View>

            <View className='items-center mt-10'>
                <Image
                    source={require("../../assets/icons/IconsLevel/arvore1.png")}
                    className='w-72 h-72'/>
            </View>

            <View className='items-center mt-8 px-4'>
                <Text style={{ fontFamily: 'poppins-semi-bold' }}
                className='text-justify text-gray-500 text-xl'>É importante cuidar do paciente, ser acompanhado pelo cliente, mas eu dou um incidente desses ao mesmo tempo que dá muito trabalho e dor. Para chegar aos mínimos detalhes.</Text>
            </View>
            <TouchableOpacity
                className='self-center justify-center rounded-2xl bg-gray-500 w-96 h-16 mt-4'
                onPress={() => navigation.navigate('Main')}
            >
                <Text style={{ fontFamily: 'poppins-semi-bold' }}
                className='text-center text-white text-xl'>Continuar</Text>
            </TouchableOpacity>
        </SafeAreaView>

    )
}

export default QuizzResult