import {
    View,
    Text,
    TouchableOpacity,
    Image,
    TextInput,
    KeyboardAvoidingView,
    Keyboard,
    Platform,
    ScrollView,
} from 'react-native'
import React, {useState} from 'react'
import {useNavigation} from '@react-navigation/native'
import 'tailwindcss/tailwind.css';
import {useForm, Controller} from 'react-hook-form';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {StackNavigationProp} from "@react-navigation/stack";
import {RootStackParamList} from "../../utils/types/navigation";
import {FormData} from "../../utils/types/form/formData";

type NavigationProp = StackNavigationProp<RootStackParamList>;



export default function LogIn() {
    /* Este código retorna exceção na pagina Entrar */
    const navigation = useNavigation<NavigationProp>();
    const [rememberMe, setRememberMe] = useState(false);
    const {control, handleSubmit} = useForm<FormData>();


    return (

        <KeyboardAvoidingView
            className='flex-1 bg-[#F9F9F9]'
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >


            <ScrollView className='bg-[#F9F9F9]'>
                <View className='bg-[#F9F9F9]  '>
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <View className='relative flex justify-center items-center  w-full h-64 mb-6'>
                            <Image
                                source={require('../../assets/images/login/ImagemDeFundo.png')}
                                className="absolute shadown top-0 left-0 w-full h-full bg-[#F9F9F9] object-cover"
                            />
                            <View className='justify-center items-center'>
                                <Text className='mb-4 text-4xl font-bold text-[#F9F9F9]'>ENG BOX</Text>
                                <Text className='text-[#F9F9F9] text-sm'>PENSE FORA DA CAIXA</Text>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                    <View className='flex justify-center items-center bg-[#F9F9F9]'>

                        {/*Wellcome*/}
                        <Text style={{fontFamily: 'poppins-semi-bold'}}
                              className='text-[#00796B] mb-3 font-bold text-3xl ml-2'>Bem-vindo de Volta!</Text>
                        <Text className='text-base text-[#455A64] mb-2'>Faça login na sua conta</Text>

                        {/*Input User*/}

                        <View className='w-4/5 mb-4'>

                            <View
                                className='flex-row items-center mb-2 mr-5 '
                            >

                                <Ionicons name='person-sharp' size={20}/>

                                <Text className='ml-1 text-[#455A64]'>Usuário</Text>
                            </View>

                            <Controller
                                control={control}
                                name='email'
                                rules={{
                                    required: "O Email ou Nome de Usuario é obrigatorio",
                                    minLength: {
                                        value: 3,
                                        message: "Este campo deve ter no minimo 3 caracteres"
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
                                            placeholder='Nome de Usuário ou Email'
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


                        {/*Input Password*/}
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


                        {/*Remember me and ForgotPassword */}
                        <View className='w-4/5 flex-row justify between mb-6'>

                            <View className='flex-row items-center'>
                                <TouchableOpacity
                                    className={`shadow w-6 h-6 rounded-sm border-2 ${rememberMe ? 'bg-[#455A64]' : 'bg-white border-[#D9D9D9]'}`}
                                    onPress={() => setRememberMe(!rememberMe)}
                                >
                                    {rememberMe && (
                                        <View className="w-full h-full bg-[#00796B]">

                                        </View>
                                    )}
                                </TouchableOpacity>

                                <Text
                                    className='text-gray-700 ml-2'>Lembrar de Mim</Text>
                                <TouchableOpacity
                                    onPress={() => navigation.navigate('ForgotPassword')}>
                                    <Text
                                        className='shadow text-sm text-[#00796B] ml-6 '>Esqueceu sua Senha?</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        {/*Button Enter */}
                        <TouchableOpacity
                            className='w-4/5 bg-[#00796B] shadow-lg py-4 mb-4 rounded-2xl'
                            onPress={handleSubmit((data) => {
                                console.log(data);
                                navigation.navigate('Main');
                            })}>
                            <Text className='text-center text-white text-lg'>Entrar</Text>
                        </TouchableOpacity>

                        {/*Link of Register */}
                        <View className=' flex-row justify-center items-center mb-4'>

                            <View className='flex-row items-center'>
                                <Text
                                    className='text-gray-700 '>Não tem uma Conta?</Text>
                            </View>
                            <TouchableOpacity
                                className='shadow text-[#767676]'
                                onPress={() => navigation.navigate('Register')}>
                                <Text
                                    className='text-sm text-[#00796B] ml-1'>Registre-se</Text>
                            </TouchableOpacity>

                        </View>
                    </View>
                </View>


            </ScrollView>
        </KeyboardAvoidingView>


    )
}

