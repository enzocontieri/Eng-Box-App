import { View, Text, TouchableOpacity, SafeAreaView,Image } from 'react-native';
import React from 'react';
import 'tailwindcss/tailwind.css';

const WellcomeScreen = ({ navigation }) => {
  return (
    <View className='flex-1 bg-[#F9F9F9] items-center justify-center mt-70'>
                <View className='justify-center items-center mt-[-30] w-full h-64 mb-10'>
                    <Image
                        source={require('../../assets/icons/iconsLogin/ImagemDeWellcome.png')}
                        className="absolute shadown top-0 left-0 w-full h-100 object-cover "
                    />
                    <View className='justify-center items-center mt-[200]'>
                        <Text className='mb-4 text-4xl font-bold text-[#F9F9F9]'>ENG BOX</Text>
                        <Text className='text-[#F9F9F9] text-sm'>PENSE FORA DA CAIXA</Text>
                    </View>
                </View>

                <TouchableOpacity
                  className='w-4/5 bg-[#1F3B4D] shadow-lg py-3.5 mb-4 mt-[200] rounded-2xl'
                    onPress={() => navigation.navigate("Register")}>
                    <Text className='text-center text-[#FFFFFF] text-xl'>Crie seu Perfil</Text>
                </TouchableOpacity>

                <TouchableOpacity
                className='w-4/5 bg-[#FFFFFF] shadow-lg py-3.5 mb-4 rounded-2xl'
                onPress={()=> navigation.navigate("LogIn")}>
                    <Text className='text-center border-[#F9F9F9] text-[#1F3B4D] text-xl'>Entrar</Text>
                </TouchableOpacity>
                <View className='justify-center items-center'> 
                  <TouchableOpacity>
                  <Text className='ml-1 mt-[220] text-[#09090b]'>politica de privacidade | termos e condições</Text>
                  </TouchableOpacity>
                  
                  <Text className='ml-1 mt-[0] text-[#09090b]'>2024 consumo inteligente</Text>


                </View>
            </View>
            
    )
}

export default WellcomeScreen