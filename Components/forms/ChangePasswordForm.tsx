import { View, Text, TextInput, SafeAreaView, TouchableOpacity, TouchableWithoutFeedback, Platform, KeyboardAvoidingView, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { newPasswordFormData } from '../../utils/types/form/formData';
import Ionicons from 'react-native-vector-icons/Ionicons';
import GoBackButton from '../GoBackButton';

const ChangePasswordForm = () => {
    const [token, setToken] = useState('');
    const { control, handleSubmit, getValues, formState } = useForm<newPasswordFormData>();
    const { errors, isSubmitting } = formState;
    const [showPassword, setShowPassword] = React.useState<boolean>(false);
    const handleViewPress = () => {

    };

    const handlePasswordChange = async (data: newPasswordFormData) => {

    };

    return (
        <SafeAreaView className='bg-white h-full'>
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <ScrollView contentContainerStyle={{ paddingBottom: 200 }} >
                    <View className='m-[5%] justify-center h-full'>
                        <GoBackButton title='Alterar Senha' />
                        {/* <View className='items-center justify-center'>
                            <Text className="text-3xl text-[#4A4A4A]" style={{ fontFamily: 'poppins-medium' }}>Alterar Senha</Text>
                        </View> */}

                        {/* New Password */}
                        <View>
                            <Text className='mx-[5%] mt-[10%] text-[#4A4A4A] text-base' style={{ fontFamily: 'poppins-medium' }}>Nova Senha</Text>
                            <TouchableWithoutFeedback onPress={handleViewPress}>
                                <View className='bg-[#F8F8F8] p-3 mx-[5%]'>
                                    <Controller
                                        control={control}
                                        name="password"
                                        rules={{
                                            required: 'A nova senha é obrigatória',
                                            minLength: { value: 8, message: 'A senha deve ter pelo menos 8 caracteres' },
                                        }}
                                        render={({ field: { value, onChange } }) => (
                                            <TextInput
                                                placeholder="Digite aqui..."
                                                onChangeText={onChange}
                                                value={value}
                                                secureTextEntry={true}
                                            />
                                        )}

                                    />
                                    {/* <TouchableOpacity
                                    onPress={() => setShowPassword(!showPassword)}
                                    className="items-center justify-center"
                                >

                                </TouchableOpacity>
                                <Ionicons
                                    name={showPassword ? 'eye-off' : 'eye'}
                                    size={24}
                                    color={'#5A5A5A'}
                                /> */}
                                </View>
                            </TouchableWithoutFeedback>
                            {errors.password && (
                                <Text className="mx-[5%] mt-2 text-red-500 text-base" style={{ fontFamily: 'poppins-medium' }}>
                                    {errors.password.message}
                                </Text>
                            )}
                        </View>

                        {/* Confirm Password */}
                        <View>
                            <Text className='mx-[5%] mt-[10%] text-[#4A4A4A] text-base' style={{ fontFamily: 'poppins-medium' }}>Repetir Nova Senha</Text>
                            <TouchableWithoutFeedback onPress={handleViewPress}>
                                <View className='bg-[#F8F8F8] p-3 mx-[5%]'>
                                    <Controller
                                        control={control}
                                        name="confirmPassword"
                                        rules={{
                                            required: 'A confirmação de senha é obrigatória',
                                            validate: (value) => value === getValues('password') || 'As senhas não correspondem',
                                        }}
                                        render={({ field: { value, onChange } }) => (
                                            <TextInput
                                                placeholder="Digite aqui..."
                                                secureTextEntry={true}
                                                onChangeText={onChange}
                                                value={value}
                                            />

                                        )}
                                    />
                                    {/* <TouchableOpacity
                                    onPress={() => setShowPassword(!showPassword)}
                                    className="items-center justify-center"
                                >

                                </TouchableOpacity>
                                <Ionicons
                                    name={showPassword ? 'eye-off' : 'eye'}
                                    size={24}
                                    color={'#5A5A5A'}
                                /> */}
                                </View>
                            </TouchableWithoutFeedback>
                            {errors.confirmPassword && (
                                <Text className="mx-[5%] mt-2 text-red-500 text-base" style={{ fontFamily: 'poppins-medium' }}>
                                    {errors.confirmPassword.message}
                                </Text>
                            )}
                        </View>

                        {/* Token View */}
                        <View>
                            <Text className='mx-[5%] mt-[10%] text-[#4A4A4A] text-base' style={{ fontFamily: 'poppins-medium' }}>Inserir Token</Text>
                            <TouchableWithoutFeedback onPress={handleViewPress}>
                                <View className='bg-[#F8F8F8] p-3 mx-[5%]'>
                                    <TextInput
                                        placeholder="Digite aqui..."
                                        onChangeText={setToken}
                                        value={token}
                                        secureTextEntry={true}
                                    />
                                </View>
                            </TouchableWithoutFeedback>
                        </View>

                        {/* Submit Button */}
                        <View className='mx-[4%]'>
                            <TouchableOpacity
                                className="w-full h-12 items-center justify-center bg-[#767676] rounded-lg mt-8"
                                onPress={handleSubmit(handlePasswordChange)}
                                disabled={isSubmitting}
                            >
                                <Text className="text-lg text-[#FFFFFF]" style={{ fontFamily: 'poppins-medium' }}>
                                    Enviar
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

export default ChangePasswordForm;
