import { View, Text, SafeAreaView, TouchableOpacity, Alert, Image, TextInput, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useUser } from '../../Components/profile/UserContext';
import * as ImagePicker from 'expo-image-picker';
import AntDesign from '@expo/vector-icons/AntDesign';

const PersonalData = () => {
  const { userProfile, setUserProfile } = useUser();
  const navigation = useNavigation();
  const [isEditing, setIsEditing] = useState(false);

  const pickImage = async (key: 'bannerUrl' | 'profilePhotoUrl') => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permissão necessária', 'Precisamos da sua permissão para acessar a galeria.');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: key === 'bannerUrl' ? [16, 9] : [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setUserProfile({ ...userProfile, [key]: result.assets[0].uri });
    }
  };

  const toggleEditMode = () => {
    setIsEditing(!isEditing);
  }

  const handleSave = () => {
    setIsEditing(false);
    Alert.alert('Sucesso', 'As informações foram salvas com sucesso!');
  }

  return (
    <SafeAreaView>
      <ScrollView>
        {/* Título + Botão Voltar */}
        <View className='flex-row items-center justify-center mt-8 '>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className='absolute left-4 bg-white p-2 rounded-full shadow-lg'
          >
            <Ionicons name='chevron-back' color='black' size={24} />
          </TouchableOpacity>

          <Text className=' ml-8 text-3xl text-[#1F3B4D]' style={{ fontFamily: 'poppins-semi-bold' }}>Dados Pessoais</Text>
        </View>

        {/* Banner + Foto do Perfil */}
        <View className='mt-8 fixed'>
          {/* Banner */}
          <View className='relative'>
            <Image
              source={{ uri: userProfile.bannerUrl }}
              className='w-full h-48 border-b-2 border-[#B0BEC5] shadow-lg'
            />

            {isEditing && (
              <TouchableOpacity
                onPress={() => pickImage('bannerUrl')}
                className='absolute top-2 right-3'
              >
                <AntDesign name='pluscircle' size={40} color={'#455A64'} />
              </TouchableOpacity>
            )}
          </View>

          {/* Foto de Perfil */}
          <View className='flex justify-center items-center mt-[-100px]'>
            <View className='relative'>
              <Image
                source={{ uri: userProfile.profilePhotoUrl }}
                className='w-[150px] h-[150px] rounded-full border-2 border-[#B0BEC5] shadow-lg'
              />

              {isEditing && (
                <TouchableOpacity
                  onPress={() => pickImage('profilePhotoUrl')}
                  className='absolute bottom-[-5px] right-[-5px]'
                >
                  <AntDesign name='pluscircle' size={40} color={'#455A64'} />
                </TouchableOpacity>
              )}
            </View>
          </View>

          {/* Inputs das Informações do Usuário */}
          <View className='mt-8 justify-center items-center' >
            {/* Nome */}
            <View className='mb-4'>
              <Text className='text-xl text-[#B0BEC5]' style={{ fontFamily: 'poppins-regular' }} >Nome</Text>
              <TextInput
                editable={isEditing}
                value={userProfile.name}
                placeholder={userProfile.name}
                onChangeText={(text) => setUserProfile({ ...userProfile, name: text })}
                className='border-2 rounded-xl pl-2 border-[#B0BEC5] w-80 h-12 text-[#B0BEC5] text-base'
                style={{ fontFamily: 'poppins-medium' }}
              />
            </View>

            {/* Email */}
            <View className='mb-4'>
              <Text className='text-xl text-[#B0B3C5]' style={{ fontFamily: 'poppins-regular' }}>Email</Text>
              <TextInput
                editable={isEditing}
                placeholder={userProfile.email}
                value={userProfile.email}
                onChangeText={(text) => setUserProfile({ ...userProfile, email: text })}
                className='border-2 rounded-xl pl-2 border-[#B0BEC5] w-80 h-12 text-[#B0B3C5] text-base'
                style={{ fontFamily: 'poppins-medium' }}
              />
            </View>

            {/* Senha */}
            <View className='mb-4'>
              <Text className='text-xl text-[#B0B3C5]' style={{ fontFamily: 'poppins-regular' }}>Senha</Text>
              <TextInput
                editable={isEditing}
                placeholder="Digite sua senha"
                secureTextEntry
                value={userProfile.password}
                onChangeText={(text) => setUserProfile({ ...userProfile, password: text })}
                className='border-2 rounded-xl pl-2 border-[#B0BEC5] w-80 h-12 text-[#B0B3C5] text-base'
                style={{ fontFamily: 'poppins-medium' }}
              />
            </View>

            {/* Localização */}
            <View className='mb-4'>
              <Text className='text-xl text-[#B0B3C5]' style={{ fontFamily: 'poppins-regular' }}>Localização</Text>
              <TextInput
                editable={isEditing}
                placeholder={userProfile.location}
                value={userProfile.location}
                onChangeText={(text) => setUserProfile({ ...userProfile, location: text })}
                className='border-2 rounded-xl pl-2 border-[#B0BEC5] w-80 h-12 text-[#B0B3C5] text-base'
                style={{ fontFamily: 'poppins-medium' }}
              />
            </View>

            {/* Gênero */}
            <View className='mb-4'>
              <Text className='text-xl text-[#B0B3C5]' style={{ fontFamily: 'poppins-regular' }}>Gênero</Text>
              <TextInput
                editable={isEditing}
                placeholder={userProfile.gender}
                value={userProfile.gender}
                onChangeText={(text) => setUserProfile({ ...userProfile, gender: text })}
                className='border-2 rounded-xl pl-2 border-[#B0BEC5] w-80 h-12 text-[#B0B3C5] text-base'
                style={{ fontFamily: 'poppins-medium' }}
              />
            </View>
            <TouchableOpacity
              className='mt-4 mb-8 bg-[#1F3B4D] w-80 h-16 items-center justify-center rounded-xl shadow-xl'
              onPress={isEditing ? handleSave : toggleEditMode}
            >
              <Text className='text-xl text-white' style={{ fontFamily: 'poppins-medium' }} >{isEditing ? 'Salvar' : 'Editar'}</Text>
            </TouchableOpacity>
          </View>

          <View>

          </View>
        </View>
      </ScrollView>
    </SafeAreaView >
  );
}

export default PersonalData;