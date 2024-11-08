import { View, Text, SafeAreaView, TextInput, TouchableOpacity, Modal } from 'react-native';
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import GoBackButton from '../GoBackButton';
import { useUser } from '../profile/UserContext';
import HandleSaveButton from './HandleSaveButton';
import SucessModal from './SucessModal';
import { Ionicons } from '@expo/vector-icons';

const ChangeTelephoneScreen = () => {

    const { userProfile, setUserProfile } = useUser();

    const [isChanged, setIsChanged] = React.useState(false);
    const [modalVisible, setModalVisible] = React.useState(false);

    const {
        control,
        handleSubmit,
        formState: {
            errors,
        },
        setError
    } = useForm({
        defaultValues: {
            phoneNumber: userProfile.phoneNumber || '',
        }
    });

    const checkPhoneNumber = async (phoneNumber: string) => {
        const response = await fetch(``);
        // const response = await fetch(``, {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({ phoneNumber })
        // });
        const data = await response.json();
        return data.isAvailable;
    }

    const onSubmit = async (data: { phoneNumber: string }) => {
        const isPhoneAvailable = await checkPhoneNumber(data.phoneNumber);

        if (!isPhoneAvailable) {
            setError('phoneNumber', {
                type: 'manual',
                message: 'Este número de telefone já está em uso',
            });
            return;
        }
        setUserProfile({ ...userProfile, phoneNumber: data.phoneNumber });
        setIsChanged(false);
        setModalVisible(true);

        setTimeout(() => setModalVisible(false), 2000);
    };

    return (
        <SafeAreaView className='flex-1 mt-4' >
            <GoBackButton title='Telefone' />
            <Text className='text-sm text-[#1F3B4D] ml-9 mt-8 mb-2' style={{ fontFamily: 'poppins-regular' }} >Para alterar o telefone, clique aqui</Text>
            <View className='flex items-center flex-1'>
                <View className='flex-row w-10/12 h-14 items-center border-2 rounded-xl border-[#B0BEC5] pl-2'>

                    <Ionicons name='call' size={30} color={'#B0BEC5'} />

                    <Controller
                        control={control}
                        name='phoneNumber'
                        rules={{
                            required: 'Número de telefone é obrigatório',
                            minLength: {
                                value: 10,
                                message: 'O número de telefone deve ter pelo menos 10 dígitos',
                            },
                            maxLength: {
                                value: 15,
                                message: 'O número de telefone deve ter no máximo 14 dígitos',
                            },
                            pattern: {
                                value: /^\+?[1-9]\d{1,14}$/,
                                message: 'Insira um número de telefone válido',
                            }
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                value={value}
                                placeholder='Digite o novo telefone'
                                keyboardType='phone-pad'
                                onChangeText={(text) => {
                                    onChange(text);
                                    setIsChanged(text !== userProfile.phoneNumber);
                                }}
                                onBlur={onBlur}
                                className='w-11/12 h-full pl-2 text-[#B0B3C5] text-lg'
                                style={{ fontFamily: 'poppins-medium' }}
                            />
                        )}
                    />
                </View>
                {errors.phoneNumber && <Text className='text-red-500 ml-5 text-justify' style={{ fontFamily: 'poppins-regular' }} >{errors.phoneNumber.message}</Text>}

                <HandleSaveButton
                    onPress={handleSubmit(onSubmit)}
                    isChanged={isChanged}
                />
            </View>

            <SucessModal visible={modalVisible} onClose={() => setModalVisible(false)} />
        </SafeAreaView>
    );
}

export default ChangeTelephoneScreen;