import React from 'react';
import * as ImagePicker from 'expo-image-picker';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Image, Text, View, TouchableOpacity, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import { Keyboard } from 'react-native';
import { Video } from 'expo-av';

const Upload = () => {

  const [media, setMedia] = React.useState<string | null>(null);
  const [mediaType, setMediaType] = React.useState<"image" | "video" | null>(null);
  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');

  const pickMedia = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      const selectedAsset = result.assets[0];
      setMedia(result.assets[0].uri);
      setMediaType(selectedAsset.type ?? null)
    }
  }

  const clearMedia = () => {
    setMedia(null);
    setMediaType(null);
  }

  const handlePost = () => {
    console.log('Media:', media);
    console.log('Title:', title);
    console.log('Description:', description);
  }

  return (
    <KeyboardAvoidingView
      className="flex-1 bg-[#F9F9F9]"
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

        <SafeAreaView className='items-center justify-center mt-4 bg-[#F9F9F9]' >
          <View className='w-11/12 bg-[#EDEDED] items-center justify-center py-8 rounded-lg shadow-md' >
            <View className='w-10/12' >
              <View className='bg-[#FFFFFF] w-full h-2/5 items-center justify-center rounded-lg ' >
                {media ? (
                  <View className='relative flex-1 w-full h-full ' >
                    {mediaType === 'video' ? (
                      <Video
                        source={{ uri: media }}
                        className='w-full h-full rounded-lg'
                        useNativeControls
                        isLooping
                      />
                    ) : (
                      <Image
                        source={{ uri: media }}
                        className='w-full h-full rounded-lg'
                      />
                    )}
                    <TouchableOpacity
                      onPress={clearMedia}
                      className='absolute top-2 right-2 bg-white rounded-full p-1'
                    >
                      <Ionicons name='trash' size={24} color={'red'} />
                    </TouchableOpacity>
                  </View>
                ) : (
                  <TouchableOpacity
                    className='items-center'
                    onPress={pickMedia}
                  >
                    <Ionicons name='add-circle' size={60} color={"#B0BEC5"} />
                    <Text className='text-base text-[#B0BEC5]' style={{ fontFamily: 'poppins-medium' }} >Selecionar arquivo</Text>
                  </TouchableOpacity>
                )}
              </View>

              <TextInput
                placeholder='Escreva o título aqui...'
                value={title}
                onChangeText={setTitle}
                className='text-lg pt-6 pb-6 text-[#455A64]'
                style={{ fontFamily: 'poppins-medium' }}
                scrollEnabled={false}
                maxLength={20}
              />

              <View className='bg-[#FFFFFF] w-full h-52 rounded-lg p-2.5' >
                <TextInput
                  placeholder='Escreva sobre o seu post...'
                  value={description}
                  onChangeText={setDescription}
                  multiline
                  className='w-full text-sm text-[#455A64]'
                style={{ fontFamily: 'poppins-regular' }}

                />
              </View>

              <TouchableOpacity
                className='w-full h-16 items-center justify-center bg-[#1F3B4D] rounded-lg mt-8'
              >
                <Text className='text-lg text-[#FFFFFF]' style={{ fontFamily: 'poppins-medium' }} >Enviar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

export default Upload;