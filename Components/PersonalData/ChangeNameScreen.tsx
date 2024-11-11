import { View, Text, SafeAreaView, TextInput } from 'react-native';
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import GoBackButton from '../GoBackButton';
import { useUser } from '../profile/UserContext';
import HandleSaveButton from './HandleSaveButton';
import SuccessModal from './SuccessModal';
import { Ionicons } from '@expo/vector-icons';

const ChangeNameScreen = () => {

    const { userProfile, setUserProfile } = useUser();

    const [isChanged, setIsChanged] = React.useState(false);
    const [modalVisible, setModalVisible] = React.useState(false);

    const {
        control,
        handleSubmit,
        formState: {
            errors,
        }
    } = useForm({
        defaultValues: {
            name: userProfile.name,
        }
    });

    const capitalizeName = (name: string) => {
        return name
            .split(' ')
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
            .join(' ');
    }

    const onSubmit = (data: { name: string }) => {
        const formattedName = capitalizeName(data.name);
        setUserProfile({ ...userProfile, name: formattedName });
        setIsChanged(false);
        setModalVisible(true);

        setTimeout(() => setModalVisible(false), 1000);
    };

    return (
        <SafeAreaView className='flex-1 mt-4' >
            <GoBackButton title='Nome' />
            <Text className='text-sm text-[#1F3B4D] ml-9 mt-8 mb-2' style={{ fontFamily: 'poppins-regular' }} >Para alterar o nome, clique aqui</Text>
            <View className='flex items-center flex-1'>
                <View className='flex-row w-10/12 h-14 items-center border-2 rounded-xl border-[#B0BEC5] pl-2'>

                    <Ionicons name='text' size={30} color={'#B0BEC5'} />

                    <Controller
                        control={control}
                        name='name'
                        rules={{
                            required: 'Nome é obrigatório',
                            minLength: {
                                value: 3,
                                message: 'O nome deve ter pelo menos três letras',
                            },
                            maxLength: {
                                value: 51,
                                message: 'O nome deve ter no máximo 51 letras',
                            },
                            pattern: {
                                value: /^[A-Za-zÀ-ÖØ-öø-ÿ\s'-]+$/,
                                message: 'O nome só pode conter letras, acentos e espaços. Caracteres especiais são inválidos.'
                            }
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                value={value}
                                placeholder='Digite seu nome'
                                onChangeText={(text) => {
                                    onChange(text);
                                    setIsChanged(text !== userProfile.name);
                                }}
                                onBlur={onBlur}
                                className='w-11/12 h-full pl-2 text-[#B0B3C5] text-lg'
                                style={{ fontFamily: 'poppins-medium' }}
                            />
                        )}
                    />
                </View>
                {errors.name && <Text className='text-red-500 ml-5 text-justify' style={{ fontFamily: 'poppins-regular' }} >{errors.name.message}</Text>}


                <HandleSaveButton
                    onPress={handleSubmit(onSubmit)}
                    isChanged={isChanged}
                />
            </View>

            <SuccessModal visible={modalVisible} onClose={() => setModalVisible(false)} />
        </SafeAreaView>
    );
}

export default ChangeNameScreen;