import { View, Text, SafeAreaView, StatusBar, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';

const PostDetails = () => {

    const navigation = useNavigation();
    const route = useRoute();

    // Estado para o Botão de Curtit
    const [isLiked, setIsLiked] = useState(false);

    // Parâmetros passados pela navegação
    const { imageUrl, title, description } = route.params;

    return (
        <SafeAreaView  >
            <TouchableOpacity
                onPress={() => navigation.goBack()}
                className='absolute top-10 left-5 bg-white p-2 rounded-full'
            >
                <Ionicons name="chevron-back" size={24} color="black" />
            </TouchableOpacity>

            <View className='relative mt-[16] items-center justify-center' >


                {/* Imagem do Post */}
                <Image
                    source={imageUrl}
                    className='w-full h-[430] mt-[100]'
                    resizeMode='cover'
                />

                {/* Informações do Post */}
                <View className='w-[364]' >
                    {/* Título do Post */}
                    <Text className='text-[27px] mt-[10]' style={{ fontFamily: 'poppins-medium' }} >{title}</Text>
                    {/* Descrição do Post */}
                    <View style={{ maxHeight: 150, marginTop: 10 }}>
                        <ScrollView showsVerticalScrollIndicator={false} >
                            <Text className='text-justify mt-[10]' style={{ fontFamily: 'poppins-regular' }}>{description}</Text>
                        </ScrollView>
                    </View>


                    {/* Botões Curtir + Comentários */}
                    <View className='flex-row items-center justify-between mt-[30]' >
                        {/* Botão Curtir */}
                        <TouchableOpacity onPress={() => setIsLiked(!isLiked)} >
                            <Ionicons name={isLiked ? 'heart' : 'heart-outline'} color={isLiked ? 'red' : '#767676'} size={35} />
                        </TouchableOpacity>

                        {/* Botão de Comentário */}
                        <TouchableOpacity className='bg-[#767676] w-[280] h-[50] justify-center items-center rounded-[10px]' >
                            <Text className='text-[18px] text-white' style={{ fontFamily: 'poppins-medium' }} >Comentários</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default PostDetails