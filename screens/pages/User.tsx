import { View, Text, Image } from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

const User = () => {
  return (

    <View>

      {/* Botão para o Menu de Opções */}
      <View className='flex-row justify-end m-2 ' >
        <TouchableOpacity /* onPress={menu de opções}*/ >
          <Ionicons name="menu-outline" size={30} color="#303030" />
        </TouchableOpacity>
      </View>


      {/* Banner */}
      <View className='relative w-full h-[200]' >
        <Image
          source={require('../../assets/icons/user-pages-icons/background-images/ex-background-img-2.webp')}
          className='z-[-1] w-full h-[200] '
          resizeMode='cover'
        />
      </View>

      {/* Foto do Perfil + Nível da Conta */}
      <View className='items-center mt-[-100px]'>

        {/* Foto do Perfil */}
        <View className='relative' >
          <Image
            source={require('../../assets/icons/user-pages-icons/user-photo/ex-user-photo.png')}
            className='w-[150] h-[150] rounded-full border-black '
          />

          {/* Icone do nível da conta */}
          <View className='absolute bottom-[-5] right-[-5] bg-[#444443] rounded-full w-[50] h-[50]' >
            <Image
              source={require('../../assets/icons/user-pages-icons/account-level-icons/ex-level-icon.png')}
              className='w-[50] h-[50]'
            />
          </View>
        </View>
      </View>

      {/* Informações do Perfil */}
      <View className='ml-4 mt-4' >

        {/* Nome do usuário + @ */}
        <Text className='text-base text-[#4A4A4A] ' style={{ fontFamily: 'poppins-medium' }} >John Doe <Text>(@john.doe)</Text></Text>

        {/* Cidade + Estado */}
        <View className='flex-row items-center mt-2' >
          <Ionicons name="location-outline" size={25} color="#303030" />
          <Text className='text-[#4A4A4A] ml-1 text-base ' style={{ fontFamily: 'poppins-medium' }}>São Paulo, SP</Text>
        </View>

        {/* Nível da Conta do Usuário */}
        <View className='flex-row items-center mt-2' >
          <Image
            source={require('../../assets/icons/user-pages-icons/user-info/level-icon.png')}
            className='w-[25] h-[25] mr-2'
          />
          <Text className='text-[#50B454] text-[16px]' style={{ fontFamily: 'poppins-medium' }}>Consumidor Verde</Text>
        </View>

      </View>

      {/* Lista de Posts */}
      <View className='flex items-center justify-center w-full h-[40] border-b-2 border-[#B8B8B8] mt-[32] ' >
        <Text
          className='text-base text-[#4A4A4A] '
          style={{ fontFamily: 'poppins-medium' }}
        >Postagens</Text>

        {/* Componente dos Posts */}
      </View>

      {/* Icones do Dispositivo são Realçados */}
      <StatusBar style='dark' />
    </View>

  )
}

export default User