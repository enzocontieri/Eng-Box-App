import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput
} from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import 'tailwindcss/tailwind.css';



export default function LogIn() {
  const navigation = useNavigation()
  const [rememberMe, setRememberMe] = useState(false);
  return (
    <View className='flex-1 bg-[#F9F9F9] ' >
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

      <View className='flex justify-center items-center bg-[#F9F9F9]'>

        {/*Wellcome*/}
        <Text style={{fontFamily:'poppins-semi-bold'}} className='text-[#00796B] mb-3 font-bold text-3xl ml-2'>Bem-vindo de Volta!</Text>
        <Text className='text-base text-[#455A64] mb-2'>Faça login na sua conta</Text>

        {/*Input User*/}
        <View className='w-4/5 mb-4'>
          <View
            className='flex-row items-center mb-2 mr-5 '
          >
            <Image
              className='mr-1'
              source={require('../../assets/icons/iconsLogin/IconeUser.png')}
            />
            <Text className='ml-1 text-[#455A64]'>Usuário</Text>
          </View>
          <TextInput
            scrollEnabled={true}
            className='bg-[#EDEDED] border border-[#B0BEC5] shadow px-4 py-4 rounded-2xl '
            placeholder='Nome de Usuário ou Email'
          />
        </View>

        {/*Input Password*/}
        <View className='w-4/5 mb-4'>
          <View className='flex-row items-center mb-2 mr-5 '
          >
            <Image
              className='mr-1'
              source={require('../../assets/icons/iconsLogin/IconeDeCadeado.png')}
            />
            <Text className='ml-1 text-[#455A64] '>Senha</Text>
          </View>
          <TextInput
            className='bg-[#EDEDED] border border-[#B0BEC5] shadow rounded-2xl px-4 py-4 '
            placeholder='Digite sua senha'
            secureTextEntry={true}
            scrollEnabled={true}
          />
        </View>

        {/*Remember me and ForgotPassword */}
        <View className='w-4/5 flex-row justify between mb-6'>

          <View className='flex-row items-center'>
            <TouchableOpacity
              className={`shadow w-6 h-6 rounded-sm border-2 ${rememberMe ? 'bg-[#455A64]' : 'bg-white border-[#D9D9D9]'}`}
              onPress={() => setRememberMe(!rememberMe)}
            >
              {rememberMe && (
                <View className="w-full h-full bg-[#00796B]">

                </View>
              )}
            </TouchableOpacity>

            <Text
              className='text-gray-700 ml-2'>Lembrar de Mim</Text>
            <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
              <Text
                className='shadow text-sm text-[#00796B] ml-6 '>Esqueceu sua Senha?</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/*Button Enter */}
        <TouchableOpacity onPress={() => navigation.navigate('Main')} className='w-4/5 bg-[#00796B] shadow-lg py-4 mb-4 rounded-2xl'>
          <Text className='text-center text-white text-lg'>Entrar</Text>
        </TouchableOpacity>

        {/*Link of Register */}
        <View className='w-4/5 flex-row justify between mb-4'>

          <View className='flex-row items-center'>
            <Text
              className='text-gray-700 ml-10'>Não tem uma Conta?</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('Register')} className='shadow text-[#767676]'>
            <Text
              className='text-sm text-[#00796B] ml-1'>Registre-se</Text>
          </TouchableOpacity>

        </View>
      </View>
    </View>
  )
}

