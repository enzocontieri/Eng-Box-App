import { View, Text, SafeAreaView, StatusBar, Image, ScrollView, Dimensions } from 'react-native';
import React, { useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';

const PostDetails = () => {

    const navigation = useNavigation();
    const route = useRoute();

    const [isLiked, setIsLiked] = useState(false); // Estado para o Botão de Curtit
    const { imageUrl, title, description } = route.params; // Parâmetros passados pela navegação

    return (
        <SafeAreaView className='flex-1'>
            <ScrollView contentContainerStyle={{ paddingBottom: 20 }} showsVerticalScrollIndicator={false}>

                {/* Botão Voltar */}
                <View className='absolute top-10 left-5 z-10' >
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        className='bg-white p-2 rounded-full shadow-lg '
                    >
                        <Ionicons name="chevron-back" size={24} color="black" />
                    </TouchableOpacity>
                </View>

                {/* Container Principal */}
                <View className='flex-1 items-center justify-center mt-10' >

                    {/* Imagem do Post */}
                    <Image
                        source={imageUrl}
                        className='w-11/12 h-[45vh] rounded-lg mt-16'
                        resizeMode='cover'
                    />

                    {/* Informações do Post */}
                    <View className='w-11/12 mt-5' >
                        {/* Título do Post */}
                        <Text className='text-2xl mb-2' style={{ fontFamily: 'poppins-medium' }} >{title}</Text>
                        {/* Descrição do Post */}
                        <Text className='text-justify mt-2.5 leading-6' style={{ fontFamily: 'poppins-regular' }}>{description}</Text>

                        {/* Botões Curtir + Comentários */}
                        <View className='flex-row items-center justify-between mt-8' >
                            {/* Botão Curtir */}
                            <TouchableOpacity onPress={() => setIsLiked(!isLiked)} className='ml-6' >
                                <Ionicons name={isLiked ? 'heart' : 'heart-outline'} color={isLiked ? 'red' : '#767676'} size={35} />
                            </TouchableOpacity>

                            {/* Botão de Comentário */}
                            <TouchableOpacity className='bg-[#767676] w-60 h-12 justify-center items-center rounded-lg' >
                                <Text className='text-[18px] text-white' style={{ fontFamily: 'poppins-medium' }} >Comentários</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default PostDetails