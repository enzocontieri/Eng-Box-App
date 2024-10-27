import {
    View,
    TextInput,
    Image,
    TouchableOpacity,
    Text,
    KeyboardAvoidingView,
    Platform,
} from 'react-native'
import React from 'react'
import {useNavigation} from '@react-navigation/native'
import 'tailwindcss/tailwind.css';
import {useForm, Controller} from 'react-hook-form';
import {ScrollView} from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {StackNavigationProp} from "@react-navigation/stack";
import {RootStackParamList} from "../../utils/types/navigation";

type NavigationProp = StackNavigationProp<RootStackParamList>;

type FormData = {
    UserName: string,
    email: string,
    password: string
}
export default function Register() {
    /* Este código retorna exceção na pagina Register */
    const navigation = useNavigation<NavigationProp>();
    const {control, handleSubmit} = useForm<FormData>();
    return (

        <KeyboardAvoidingView
            className='flex-1 bg-[#F9F9F9]'
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >

            <ScrollView className='bg-[#F9F9F9]'>

                <View className='flex-1 bg-[#F9F9F9]  '>
                    <View className='relative flex justify-center items-center  w-full h-64 mb-6'>
                        <Image
                            source={require('../../assets/icons/iconsLogin/ImagemDeFundo.png')}
                            className="absolute shadown top-0 left-0 w-full h-full bg-[#F9F9F9] object-cover"
                        />
                        <View className='justify-center items-center'>
                            <Text className='mb-4 text-4xl font-bold text-[#F9F9F9]'>ENG BOX</Text>
                            <Text className='text-[#F9F9F9] text-sm'>PENSE FORA DA CAIXA</Text>
                        </View>
                    </View>

                    <View className=' justify-center items-center bg-[#F9F9F9]'>

                        <Text style={{fontFamily: 'poppins-semi-bold'}}
                              className='text-[#00796B] mb-3 font-bold text-3xl ml-2'>Seja Bem-vindo</Text>
                        <Text className='text-base text-[#455A64] mb-2 '>Crie sua conta</Text>

                        <View className='w-4/5 mb-4'>
                            <View
                                className='flex-row items-center mb-2 mr-5 '
                            >
                                <Ionicons name='person-sharp' size={20}/>
                                <Text className='ml-1 text-[#455A64]'>Usuário</Text>
                            </View>

                            <Controller
                                control={control}
                                name='UserName'
                                rules={{
                                    required: "Nome de Usuario é obrigatorio",
                                    minLength: {
                                        value: 3,
                                        message: "Nome de Usuario deve ter no minimo 3 caracteres"
                                    },
                                    maxLength: {
                                        value: 51,
                                        message: "Limite excedido de caracteres"
                                    }
                                }}
                                render={({field: {value, onChange}, fieldState: {error}}) => (
                                    <>
                                        <TextInput
                                            className='bg-[#EDEDED] border border-[#B0BEC5] shadow px-4 py-4 rounded-2xl '
                                            placeholder='Nome de Usuário'
                                            value={value}
                                            onChangeText={onChange}
                                            keyboardType='email-address'
                                            autoCapitalize='none'
                                        />
                                        {error && <Text
                                            style={{fontFamily: 'poppins-semi-bold'}}
                                            className='text-[#ff375b] text-xs ml-2'>{error.message}</Text>}
                                    </>
                                )}

                            />
                        </View>

                        <View className='w-4/5 mb-4'>
                            <View
                                className='flex-row items-center mb-2 mr-5 '
                            >
                                <Ionicons name='mail' size={20}/>
                                <Text className='ml-1 text-[#455A64]'>Email</Text>
                            </View>

                            <Controller
                                control={control}
                                name='email'
                                rules={{
                                    required: "Email é obrigatorio",
                                    minLength: {
                                        value: 3,
                                        message: "Email deve ter no minimo 3 caracteres"
                                    },
                                    maxLength: {
                                        value: 51,
                                        message: "Limite excedido de caracteres"
                                    },
                                    pattern: {
                                        value: /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/,
                                        message: 'Email inválido'
                                    }
                                }}
                                render={({field: {value, onChange}, fieldState: {error}}) => (
                                    <>
                                        <TextInput
                                            className='bg-[#EDEDED] border border-[#B0BEC5] shadow px-4 py-4 rounded-2xl '
                                            placeholder='Digite seu Email'
                                            value={value}
                                            onChangeText={onChange}
                                            keyboardType='email-address'
                                            autoCapitalize='none'
                                        />
                                        {error && <Text
                                            style={{fontFamily: 'poppins-semi-bold'}}
                                            className='text-[#ff375b] text-xs ml-2'>{error.message}</Text>}
                                    </>
                                )}

                            />
                        </View>
                        <View className='w-4/5 mb-4'>
                            <View className='flex-row items-center mb-2 mr-5 '
                            >
                                <Ionicons name='lock-closed' size={20}/>
                                <Text className='ml-1 text-[#455A64] '>Senha</Text>
                            </View>

                            <Controller
                                control={control}
                                name='password'
                                rules={{
                                    required: "A senha é obrigatoria",
                                    minLength: {
                                        value: 3,
                                        message: "A senha deve ter pelo menos 3 caracteres"
                                    },
                                    maxLength: {
                                        value: 51,
                                        message: "Limite excedido de caracteres"
                                    }
                                }}
                                render={({field: {value, onChange}, fieldState: {error}}) => (
                                    <>
                                        <TextInput
                                            className='bg-[#EDEDED] border border-[#B0BEC5]  shadow rounded-2xl px-4 py-4 '
                                            placeholder='Digite sua senha'
                                            value={value}
                                            onChangeText={onChange}
                                            secureTextEntry={true}
                                            autoCapitalize='none'
                                        />
                                        {error && <Text
                                            style={{fontFamily: 'poppins-semi-bold'}}
                                            className='text-[#ff375b] text-xs ml-2'>{error.message}</Text>}
                                    </>
                                )}
                            />

                        </View>
                        <View className='w-4/5 mb-4'>
                            <View className='flex-row items-center mb-2 mr-5 '
                            >
                                <Ionicons name='lock-closed' size={20}/>
                                <Text className='ml-1 text-[#455A64] '>Confirmar senha</Text>
                            </View>

                            <Controller
                                control={control}
                                name='password'
                                rules={{
                                    required: "A senha é obrigatoria",
                                    minLength: {
                                        value: 3,
                                        message: "A senha deve ter pelo menos 3 caracteres"
                                    },
                                    maxLength: {
                                        value: 51,
                                        message: "Limite excedido de caracteres"
                                    }
                                }}
                                render={({field: {value, onChange}, fieldState: {error}}) => (
                                    <>
                                        <TextInput
                                            className='bg-[#EDEDED] border border-[#B0BEC5]  shadow rounded-2xl px-4 py-4 '
                                            placeholder='Digite sua senha novamente'
                                            value={value}
                                            onChangeText={onChange}
                                            secureTextEntry={true}
                                            autoCapitalize='none'
                                        />
                                        {error && <Text
                                            style={{fontFamily: 'poppins-semi-bold'}}
                                            className='text-[#ff375b] text-xs ml-2'>{error.message}</Text>}
                                    </>
                                )}
                            />
                        </View>
                        <TouchableOpacity
                            className='w-4/5 bg-[#00796B] shadow-lg py-4 mb-4 rounded-2xl'
                            onPress={handleSubmit((data) => {
                                console.log(data);
                            })}>
                            <Text className='text-center text-white text-lg'>Registrar</Text>
                        </TouchableOpacity>
                    </View>

                    <View className='flex-row justify-center items-center mb-4'>

                        <View className='flex-row justify-center items-center'>
                            <Text
                                className='text-gray-700 '>Já tem uma Conta?</Text>
                        </View>
                        <TouchableOpacity
                            className='shadow text-[#767676]'
                            onPress={() => navigation.navigate('LogIn')}>
                            <Text
                                className='text-sm text-[#00796B] ml-1'>Entrar</Text>
                        </TouchableOpacity>

                    </View>


                </View>
            </ScrollView>
        </KeyboardAvoidingView>

    )
}