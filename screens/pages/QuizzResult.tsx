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
                <Text className='font-bold text-[#767676] text-3xl'>Parabéns!</Text>
            </View>

            <View className='mr-2 mt-6 items-center '>
                <Text className='text-[#767676] font-bold text-xl'>
                    Você é um <Text className='text-[#7CC77F] font-bold text-xl'>Consumidor Verde</Text>!
                </Text>
            </View>

            <View>
                <Image
                    source={require("../../assets/icons/IconsLevel/arvore1.png")}
                    style={{ left: 50, width: 300, height: 300, top: 38, }} />
            </View>

            <View className='items-center'>
                <Text className='text-justify mt-[63] ml-[9] text-[#767676] font-bold text-xl w-4/5'>É importante cuidar do paciente, ser acompanhado pelo cliente, mas eu dou um incidente desses ao mesmo tempo que dá muito trabalho e dor. Para chegar aos mínimos detalhes.</Text>
            </View>
            <TouchableOpacity
                className='self-center rounded-3xl bg-[#00796B] w-4/5 py-5 border-solid shadow-lg mt-[16]'
                onPress={() => navigation.navigate('Main')}
            >
                <Text className='text-center text-white font-bold text-xl'>Continuar</Text>
            </TouchableOpacity>
        </SafeAreaView>

    )
}

export default QuizzResult