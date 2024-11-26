import React, { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Image, Text, View, TouchableOpacity, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, TextInput, Modal, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Keyboard } from 'react-native';
import { Video } from 'expo-av';
import { getApiAxios, PostApiAxios } from '../../services/axios';
import { getToken } from '../../utils/session/manager';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { NavigationProp } from '../../utils/types/navigation';
import { UploadFormData } from '../../utils/types/form/formData';
import { getUserDetails } from '../../utils/session/user-data';
import { UserResponse } from '../../utils/types/user-response';

const Upload = () => {
  const [media, setMedia] = React.useState<string | null>(null);
  const [mediaType, setMediaType] = React.useState<"image" | "video" | null>(null);
  const [titulo, setTitulo] = React.useState('');
  const [conteudo, setConteudo] = React.useState('');
  const [successfulUploadModalVisible, setSuccessfulUploadModalVisible] = React.useState(false);
  const [loading, setLoading] = useState(false);
  const [user, setUserProfile] = useState<UserResponse| undefined>(undefined);
  
  const navigation = useNavigation<NavigationProp>();

  const fetchUploadPost = async (data: UploadFormData) => {
    try {
      setLoading(true);
      const api = await getApiAxios()
      const response = await api.post('/api/receitas', {
        tema: "Enge",
        idUsuario: user?.email,
        foto: data.fotos,
        titulo: data.titulo,
        conteudo: data.conteudo
      });
      alert('Post criado com sucesso!');
      setSuccessfulUploadModalVisible(true);
      console.log(response.data)
    } catch (error: any) {
			if (error.response) {
				console.error('Erro na resposta:', error.response.data);
				console.error('Status do erro:', error.response.status);
				console.error('Cabeçalhos do erro:', error.response.headers);
			} else if (error.request) {
				// Erro na requisição, mas sem resposta (ex.: problema de rede)
				console.error('Erro na requisição:', error.request);
			} else {
				// Outro tipo de erro
				console.error('Erro geral:', error.message);
			}
			alert('Erro ao atualizar foto de perfil');
		} finally {
      setLoading(false);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      (async () => {
        const token = await getToken();
        if (!token) {
          alert('Você precisa realizar o login para acessar!');
          navigation.navigate('LogIn');
          return;
        } else{
          const user = await getUserDetails();
					setUserProfile(user as UserResponse);
        }
      })();
    },[])
  );

  const pickMedia = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      const selectedAsset = result.assets[0];
      setMedia(selectedAsset.uri);
    }
  }

  const clearMedia = () => {
    setMedia(null);
    setMediaType(null);
  };

  const handlePost = () => {
      setSuccessfulUploadModalVisible(true);
      fetchUploadPost(uploadData)
  }
   
    

    const uploadData: UploadFormData = { 
      titulo: titulo,
      conteudo: conteudo,
      tema: "Enge",
      fotos: [
        {
          uri: media ?? "",
          name: 'uploaded_media.jpg',
          type: mediaType === 'image' ? 'image/jpeg' : 'video/mp4',
        },
      ],
    };

  
  ; 

  const isButtonDisabled = !media || titulo.trim() === '' || conteudo.trim() === '' ;

  return (
    <KeyboardAvoidingView
      className="flex-1 bg-[#F9F9F9]"
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView className="items-center justify-center mt-4 bg-[#F9F9F9]">
          <View className="w-11/12 bg-[#EDEDED] items-center justify-center py-8 rounded-lg shadow-md">
            <View className="w-10/12">
              <View className="bg-[#FFFFFF] w-full h-2/5 items-center justify-center rounded-lg">
                {media ? (
                  <View className="relative flex-1 w-full h-full">
                    {mediaType === 'video' ? (
                      <Video
                        source={{ uri: media }}
                        className="w-full h-full rounded-lg"
                        useNativeControls
                        isLooping
                      />
                    ) : (
                      <Image
                        source={{ uri: media }}
                        className="w-full h-full rounded-lg"
                      />
                    )}
                    <TouchableOpacity
                      onPress={clearMedia}
                      className="absolute top-2 right-2 bg-white rounded-full p-1"
                    >
                      <Ionicons name="trash" size={24} color="red" />
                    </TouchableOpacity>
                  </View>
                ) : (
                  <TouchableOpacity className="items-center" onPress={pickMedia}>
                    <Ionicons name="add-circle" size={60} color="#B0BEC5" />
                    <Text className="text-base text-[#B0BEC5]" style={{ fontFamily: 'poppins-medium' }}>
                      Selecionar arquivo
                    </Text>
                  </TouchableOpacity>
                )}
              </View>

              <TextInput
                placeholder="Escreva o título aqui..."
                value={titulo}
                onChangeText={setTitulo}
                className="text-lg pt-6 pb-6 text-[#455A64]"
                style={{ fontFamily: 'poppins-medium' }}
                scrollEnabled={false}
                maxLength={20}
              />

              <View className="bg-[#FFFFFF] w-full h-52 rounded-lg p-2.5">
                <TextInput
                  placeholder="Escreva sobre o seu post..."
                  value={conteudo}
                  onChangeText={setConteudo}
                  multiline
                  className="w-full text-sm text-[#455A64]"
                  style={{ fontFamily: 'poppins-regular' }}
                />
              </View>

              <TouchableOpacity
                className="w-full h-16 items-center justify-center bg-[#1F3B4D] rounded-lg mt-8"
                onPress={handlePost}
                disabled={isButtonDisabled}
              >
                <Text className="text-lg text-[#FFFFFF]" style={{ fontFamily: 'poppins-medium' }}>
                  Enviar
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <Modal
            transparent={true}
            visible={successfulUploadModalVisible}
            animationType="fade"
            onRequestClose={() => setSuccessfulUploadModalVisible(false)}
          >
            <View className="flex-1 justify-center items-center">
              <View className="bg-white w-4/5 px-6 py-2 rounded-xl items-center shadow-md">
                <View className="my-4">
                  <Ionicons name="checkmark-circle" size={60} color="#50B454" />
                </View>
                <Text className="text-lg text-[#1F3B4D] text-center mb-2" style={{ fontFamily: 'poppins-medium' }}>
                  Post enviado para validação!
                </Text>
                <Text className="text-base text-[#455A64] text-center mb-4" style={{ fontFamily: 'poppins-regular' }}>
                  Você será informado assim que a validação for concluída.
                </Text>

                <TouchableOpacity
                  onPress={() => setSuccessfulUploadModalVisible(false)}
                  className="bg-[#1F3B4D] w-full py-3 items-center justify-center rounded-md mb-4 shadow-md"
                >
                  <Text className="text-white text-base" style={{ fontFamily: 'poppins-medium' }} >Certo</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>

        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView >
  );
}


export default Upload;