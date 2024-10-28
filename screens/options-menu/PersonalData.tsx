import { View, Text, SafeAreaView, TouchableOpacity, Alert, TextInput, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useUser } from '../../Components/profile/UserContext';
import * as ImagePicker from 'expo-image-picker';
import Header from '../../Components/PersonalData/Header';
import { BannerPicker, ProfilePhotoPicker } from '../../Components/PersonalData/ImagesPicker';
import UserInfoInput from '../../Components/PersonalData/UserInfoInput';

type ImageKey = 'bannerUrl' | 'profilePhotoUrl';

const PersonalData: React.FC = () => {
  const { userProfile, setUserProfile } = useUser();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const pickImage = async (key: ImageKey): Promise<void> => {
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

  const toggleEditMode = (): void => setIsEditing(!isEditing);

  const handleSave = (): void => {
    setIsEditing(false);
    Alert.alert('Sucesso', 'As informações foram salvas com sucesso!');
  }

  return (
    <SafeAreaView>
      <ScrollView>

        <Header />

        {/* Banner + Foto do Perfil */}
        <View className='mt-8 fixed'>

          <BannerPicker bannerUrl={userProfile.bannerUrl} isEditing={isEditing} onPickImage={pickImage} />

          <ProfilePhotoPicker profilePhotoUrl={userProfile.profilePhotoUrl} isEditing={isEditing} onPickImage={pickImage} />

          {/* Inputs das Informações do Usuário */}
          <View className='mt-8 justify-center items-center' >
            <UserInfoInput
              label='Nome'
              value={userProfile.name}
              editable={isEditing}
              placeholder={userProfile.name}
              onChangeText={(text: string) => setUserProfile({ ...userProfile, name: text })}
            />

            <UserInfoInput
              label='Email'
              value={userProfile.email}
              editable={isEditing}
              placeholder={userProfile.email}
              onChangeText={(text: string) => setUserProfile({ ...userProfile, name: text })}
            />

            {/* Input de Senha */}
            <View className='mb-4 relative' >
              <Text className='text-xl text-[#B0B3C5]' style={{ fontFamily: 'poppins-regular' }} >Senha</Text>
              <TextInput
                editable={isEditing}
                placeholder='Digite sua senha'
                secureTextEntry={!showPassword}
                value={userProfile.password}
                onChangeText={(text: string) => setUserProfile({ ...userProfile, password: text })}
                className='border-2 rounded-xl pl-2 pr-10 border-[#B0BEC5] w-80 h-12 text-[#B0B3C5] text-base'
                style={{ fontFamily: 'poppins-medium' }}
              />
              {isEditing && (
                <TouchableOpacity
                  onPress={() => setShowPassword(!showPassword)}
                  className='absolute right-4 top-[50%] transform -translate-y-1/2'
                >
                  <Ionicons name={showPassword ? 'eye-off' : 'eye'} size={24} color={'#B0BEC5'} />
                </TouchableOpacity>
              )}
            </View>

            <UserInfoInput
              label='Localização'
              value={userProfile.location}
              editable={isEditing}
              placeholder={userProfile.location}
              onChangeText={(text: string) => setUserProfile({ ...userProfile, name: text })}
            />

            <UserInfoInput
              label='Gênero'
              value={userProfile.gender}
              editable={isEditing}
              placeholder={userProfile.gender}
              onChangeText={(text: string) => setUserProfile({ ...userProfile, name: text })}
            />

            <TouchableOpacity
              onPress={isEditing ? handleSave : toggleEditMode}
              className='mt-4 mb-8 bg-[#1F3B4D] w-80 h-16 items-center justify-center rounded-xl shadow-xl'
            >
              <Text
                className='text-white text-lg'
                style={{ fontFamily: 'poppins-medium' }}
              >
                {isEditing ? 'Salvar' : 'Editar'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView >
  );
}

export default PersonalData;