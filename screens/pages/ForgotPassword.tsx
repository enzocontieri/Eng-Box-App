import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput
} from 'react-native'
import React from 'react'

export default function ForgotPassword() {
  return (
    <View className='flex-1 bg-[#F9F9F9]  items-center' >
      <View className='relative flex justify-center items-center  w-full h-64 mb-8'>
        <Image
          source={require('../../assets/icons/iconsLogin/ImagemDeFundo.png')}
          className="absolute shadown top-0 left-0 w-full h-full bg-[#F9F9F9] object-cover"
        />
        <View className='justify-center items-center'>
          <Image
            source={require('../../assets/icons/iconsLogin/NomeDoApp.png')}
          />
        </View>
      </View>

      <View className='flex justify-center items-center'>
        <Text style={{fontFamily:'poppins-semi-bold'}}className='text-[#1F3B4D] mb-4 font-bold text-3xl ml-1'>Esqueceu sua senha?</Text>
        <Text className='text-[#455A64] ml-1 mb-8 text-justify w-[322px] font-bold  '>Digite o endereço de e-mail para o qual deseja que suas informações de redefinição de senha sejam enviadas.</Text>
      </View>

      <View className='w-4/5 mb-10'>
        <View className='flex-row items-center mb-4 mr-5 '
        >
          <Image
            className='mr-1'
            source={require('../../assets/icons/iconsLogin/IconeEmail.png')}
          />
          <Text className='ml-1 text-[#455A64] '>Email</Text>
        </View>
        <TextInput
          className='bg-[#EDEDED] border border-[#B0BEC5] shadow rounded-2xl px-4 py-4 w-335 h-70 '
          placeholder='Digite seu Email'
          scrollEnabled={true}
        />
      </View>

      <TouchableOpacity className='w-4/5 bg-[#1F3B4D] shadow-lg py-4 mb-5 rounded-2xl'>
        <Text className='text-center text-white text-lg'>Enviar</Text>
      </TouchableOpacity>
    </View>
  )
}