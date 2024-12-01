import { View, SafeAreaView, ScrollView } from 'react-native';
import React from 'react';
import ProfilePhotoPicker from '../../Components/PersonalData/ImagesPicker';
import PersonalDataButton from '../../Components/PersonalData/PersonalDataButton';
import { useNavigation } from '@react-navigation/native';
import GoBackButton from '../../Components/GoBackButton';
import { NavigationProp } from '../../utils/types/navigation';


const PersonalData: React.FC = () => {

  const navigation = useNavigation<NavigationProp>();

  return (
    <SafeAreaView className='flex mt-4' >
      <ScrollView>

        <GoBackButton title='Dados Pessoais' />

        {/* Banner + Foto do Perfil */}
        <View className='mt-14 justify-center'>

          <ProfilePhotoPicker />

          <View className='mt-14 justify-center items-center' >

            <PersonalDataButton onPress={() => navigation.navigate('ChangeName')} text='Nome' />

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