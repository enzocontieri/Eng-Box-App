import {
    View,
    Text,
    TouchableOpacity,
    Image,
    TextInput,
    KeyboardAvoidingView,
    Platform,
    ScrollView
} from 'react-native'
import React from 'react'
import { useForm, Controller } from 'react-hook-form';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../utils/types/navigation";
import { ForgotFormData } from "../../utils/types/form/formData";

type NavigationProp = StackNavigationProp<RootStackParamList>;



export default function ForgotPassword() {
    /* Este código retorna exceção na pagina Esqueceu sua Senha */
    const { control, handleSubmit } = useForm<ForgotFormData>();
    const navigation = useNavigation<NavigationProp>();

    return (
        <KeyboardAvoidingView
            className='flex-1 bg-[#F9F9F9]'
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <ScrollView className='bg-[#F9F9F9]'>

                <View className='bg-[#F9F9F9]  items-center'>

                    <View className='relative flex justify-center items-center  w-full h-64 mb-6'>
                        <Image
                            source={require('../../assets/images/login/ImagemDeFundo.png')}
                            className="absolute shadown top-0 left-0 w-full h-full bg-[#F9F9F9] object-cover"
                        />
                        <View className='justify-center items-center'>
                            <Image
                                source={require('../../assets/images/login/LogoDoApp.png')}

                            />
                        </View>
                    </View>


                    {/*ForgotPassword */}
                    <View className='flex justify-center items-center'>
                        <Text style={{ fontFamily: 'poppins-semi-bold' }}
                            className='text-[#5A5A5A] mb-4 font-bold text-3xl ml-1'>Esqueceu sua senha?</Text>
                        <Text className='text-[#5B5B5B] ml-1 mb-8 text-justify w-[322px] font-bold  '>
                            Digite o endereço de e-mail para o qual deseja que suas informações de redefinição de senha
                            sejam enviadas.</Text>
                    </View>


                    {/*Email*/}
                    <View className='w-4/5 mb-10'>
                        <View className='flex-row items-center mb-4 mr-5 '
                        >
                            <Ionicons name='mail' size={20} />
                            <Text className='ml-1 text-[#5B5B5B] '>Email</Text>
                        </View>

                        <Controller
                            control={control}
                            name='email'
                            rules={{
                                required: "O Email é obrigatorio",
                                maxLength: {
                                    value: 51,
                                    message: "Limite excedido de caracteres"
                                },
                                pattern: {
                                    value: /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/,
                                    message: 'Email inválido'
                                }
                            }}
                            render={({ field: { value, onChange }, fieldState: { error } }) => (
                                <>
                                    <TextInput
                                        className='bg-[#EDEDED] border border-[#5B5B5B] shadow rounded-2xl px-4 py-4  '
                                        placeholder='Digite seu Email'
                                        onChangeText={onChange}
                                        value={value}
                                        keyboardType='email-address'
                                        autoCapitalize='none'

                                    />
                                    {error && <Text
                                        style={{ fontFamily: 'poppins-semi-bold' }}
                                        className='text-[#ff375b] text-xs ml-2'>{error.message}</Text>}
                                </>
                            )}

                        />

                    </View>

                    {/*Button Send*/}
                    <TouchableOpacity
                        className='w-4/5 bg-[#5A5A5A] shadow-lg py-4 mb-5 rounded-2xl'
                        onPress={handleSubmit((data) => {
                            console.log(data);
                        })}>
                        <Text className='text-center text-white text-lg'>Enviar</Text>
                    </TouchableOpacity>
                </View>
                <View className='flex-row justify-center items-center mb-4'>


                    <TouchableOpacity
                        className='shadow text-[#5A5A5A]'
                        onPress={() => navigation.navigate('LogIn')}>
                        <Text
                            className='text-sm text-[#5A5A5A] ml-1'>Aperte Para Voltar</Text>
                    </TouchableOpacity>

                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}