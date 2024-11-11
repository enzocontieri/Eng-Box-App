import { View, Text, SafeAreaView, TextInput } from 'react-native';
import React from 'react';
import GoBackButton from '../GoBackButton';
import { Controller, useForm } from 'react-hook-form';
import HandleSaveButton from './HandleSaveButton';
import SuccessModal from './SuccessModal';
import { useUser } from '../profile/UserContext';
import { Ionicons } from '@expo/vector-icons';

const ChangeUsernameScreen = () => {

    const { userProfile, setUserProfile } = useUser();

    const {
        control,
        handleSubmit,
        formState: { errors, },
        setError,
    } = useForm({
        defaultValues: {
            username: userProfile.username,
        }
    });

    const [isChanged, setIsChanged] = React.useState(false);
    const [modalVisible, setModalVisible] = React.useState(false);

    const existingUsernames = ['johndoe', 'johnathandoe', 'john123'];

    const checkUsernameExists = async (username: string) => {
        return existingUsernames.includes(username.toLocaleLowerCase());
    }

    const onSubmit = async (data: { username: string }) => {

        const usernameExists = await checkUsernameExists(data.username);

        if (usernameExists) {
            setError('username', {
                type: 'manual',
                message: 'Esse nome de usuário já está em uso',
            });
        } else {
            setUserProfile({ ...userProfile, username: data.username });
            setIsChanged(false);
            setModalVisible(true);

            setTimeout(() => setModalVisible(false), 1000);
        }
    }

    return (
        <SafeAreaView className='flex-1 mt-4' >
            <GoBackButton title='Nome de Usuário' />
            <Text className='text-sm text-[#1F3B4D] ml-9 mt-8 mb-2' style={{ fontFamily: 'poppins-regular' }} >Para alterar o nome de usuário, clique aqui</Text>
            <View className='flex items-center flex-1'>
                <View className='flex-row w-10/12 h-14 items-center border-2 rounded-xl border-[#B0BEC5] pl-2'>

                    <Ionicons name='at' size={30} color={'#B0BEC5'} />
                    <Controller
                        control={control}
                        name='username'
                        rules={{
                            required: 'Nome de usuário é obrigatório',
                            minLength: {
                                value: 3,
                                message: 'O nome de usuário deve ter pelo menos três letras',
                            },
                            maxLength: {
                                value: 51,
                                message: 'O nome de usuário deve ter no máximo 51 letras',
                            },
                            validate: {
                                noSpecialCharsStart: (value) => !/^[._]/.test(value) || 'Não deve começar com caracteres especiais',
                                noSpecialCharsEnd: (value) => !/[._]$/.test(value) || 'Não deve terminar com caracteres especiais',
                                onlyAllowedSpecialChars: (value) => /^[a-zA-Z0-9._]*$/.test(value) || 'Use apenas . e _ como caracteres especiais',
                                notAllUppercase: (value) => value !== value.toUpperCase() || 'O nome de usuário não pode ser totalmente em maiúsculo',
                                usernameExists: async (value) => {
                                    const exists = await checkUsernameExists(value);
                                    return !exists || 'Esse nome de usuário já está em uso.';
                                },
                            },
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                value={value}
                                placeholder='Digite o nome de usuário'
                                onChangeText={(text) => {
                                    onChange(text);
                                    setIsChanged(text !== userProfile.username);
                                }}
                                onBlur={onBlur}
                                className='w-11/12 h-full pl-2 text-[#B0B3C5] text-base'
                                style={{ fontFamily: 'poppins-medium' }}
                            />
                        )}
                    />
                </View>

                {errors.username && <Text className='text-red-500 text-justify' style={{ fontFamily: 'poppins-regular' }} >{errors.username.message}</Text>}

                <HandleSaveButton
                    onPress={handleSubmit(onSubmit)}
                    isChanged={isChanged}
                />
            </View>

            <SuccessModal visible={modalVisible} onClose={() => setModalVisible(false)} />
        </SafeAreaView>
    );
}

export default ChangeUsernameScreen;