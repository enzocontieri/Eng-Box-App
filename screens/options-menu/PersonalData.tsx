import { View, SafeAreaView, Alert, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { useUser } from '../../Components/profile/UserContext';
import * as ImagePicker from 'expo-image-picker';
import Header from '../../Components/PersonalData/Header';
import { BannerPicker, ProfilePhotoPicker } from '../../Components/PersonalData/ImagesPicker';
import PersonalDataButton from '../../Components/PersonalData/PersonalDataButton';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../utils/types/navigation';
import { StackNavigationProp } from '@react-navigation/stack';

type ImageKey = 'bannerUrl' | 'profilePhotoUrl';

type NavigationProp = StackNavigationProp<RootStackParamList>;

const PersonalData: React.FC = () => {

  const navigation = useNavigation<NavigationProp>();

  const { userProfile, setUserProfile } = useUser();
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

            <PersonalDataButton onPress={() => navigation.navigate('ChangeName')} text='Nome' />

            <PersonalDataButton onPress={() => navigation.navigate('ChangeUsername')} text='Nome de Usuário' />

            <PersonalDataButton onPress={() => navigation.navigate('ChangeProfileMedia')} text='Fotos do Perfil' />

            <PersonalDataButton onPress={() => navigation.navigate('ChangeEmail')} text='Email' />

            <PersonalDataButton onPress={() => navigation.navigate('ChangePassword')} text='Senha' />

            <PersonalDataButton onPress={() => navigation.navigate('ChangeTelephone')} text='Telefone' />

          </View>
        </View>
      </ScrollView>
    </SafeAreaView >
  );
}

export default PersonalData;