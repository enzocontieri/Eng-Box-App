import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput
} from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';
import 'tailwindcss/tailwind.css';



export default function LogIn() {
  //const navigation = useNavigation()
  const [rememberMe, setRememberMe] = useState(false);
  return (
    <View className='flex-1 bg-white  ' >
      <View className='relative flex justify-center items-center  w-full h-64'>
        <Image
          source={require('../../assets/icons/iconsLogin/ImagemDeFundo.png')}
          className="absolute shadown top-0 left-0 w-full h-full bg-white object-cover"
        />
        <View className='justify-center items-center'>
          <Image
            source={require('../../assets/icons/iconsLogin/NomeDoApp.png')}
          />
        </View>
      </View>

      <View className='flex justify-center items-center bg-white'>

        {/*Wellcome*/}
        <Text className='text-gray-600 mb-5 font-bold text-3xl ml-2'>Bem-vindo de Volta!</Text>
        <Text className='text-base text-gray-600 mb-5'>Faça login na sua conta</Text>

        {/*Input User*/}
        <View className='w-4/5 mb-4'>
          <View
            className='flex-row items-center mb-2 mr-5 '
          >
            <Image
              className='mr-1'
              source={require('../../assets/icons/iconsLogin/IconeUser.png')}
            />
            <Text className='ml-1 text-gray-700'>Usuário</Text>
          </View>
          <TextInput
            className='bg-[#D9D9D9] shadow px-4 py-4 rounded w-335 h-70'
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
            <Text className='ml-1 text-gray-700 '>Senha</Text>
          </View>
          <TextInput
            className='bg-[#D9D9D9] shadow rounded px-4 py-4 w-335 h-70'
            placeholder='Digite sua senha'
            secureTextEntry={true}
          />
        </View>

        {/*Remember me and ForgotPassword */}
        <View className='w-4/5 flex-row justify between mb-6'>

          <View className='flex-row items-center'>
            <TouchableOpacity
              className={`shadow w-6 h-6 rounded-sm border-2 ${rememberMe ? 'bg-red-700' : 'bg-white border-gray-400'}`}
              onPress={() => setRememberMe(!rememberMe)}
            >
              {rememberMe && (
                <View className="w-full h-full bg-[#767676]">

                </View>
              )}
            </TouchableOpacity>

            <Text
              className='text-gray-700 ml-2'>Lembrar de Mim</Text>
            <TouchableOpacity>
              <Text
                className='shadow text-sm text-gray-500 ml-4 '>Esqueceu sua Senha?</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/*Button Enter */}
        <TouchableOpacity className='w-4/5 bg-[#767676] shadow-lg py-4 mb-4 rounded'>
          <Text className='text-center text-white text-lg'>Entrar</Text>
        </TouchableOpacity>

        {/*Link of Register */}
        <View className='w-4/5 flex-row justify between mb-4'>

          <View className='flex-row items-center'>
            <Text
              className='text-gray-700 ml-10'>Não tem uma Conta?</Text>
          </View>
          <TouchableOpacity className='shadow text-[#767676]'>
            <Text
              className='text-sm text-gray-500 ml-1'>Registre-se</Text>
          </TouchableOpacity>

        </View>
      </View>
    </View>
  )
}

