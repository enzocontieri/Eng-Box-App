import { View, Text, TouchableOpacity, Image, Modal } from 'react-native';
import React from 'react';
import * as ImagePicker from 'expo-image-picker';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useUser } from '../profile/UserContext';
import SuccessModal from './SuccessModal';
import ProfileInfo from '../profile/ProfileInfo';

const ProfilePhotoPicker: React.FC = () => {

    const { userProfile, setUserProfile } = useUser();

    const [modalVisible, setModalVisible] = React.useState<boolean>(false);
    const [succesModalVisible, setSuccessModalVisible] = React.useState<boolean>(false);

    const pickImage = async (): Promise<void> => {
        const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (!permissionResult.granted) {
            alert('Permissão para acessa a galeria é necessária.');
            return;
        }

        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        });

        if (!result.canceled && result.assets?.[0]?.uri) {
            setUserProfile({ ...userProfile, profilePhotoUrl: result.assets[0].uri });
            showSuccessModal();
        }
    }

    const removeImage = (): void => {
        setUserProfile({ ...userProfile, profilePhotoUrl: null });
        showSuccessModal();
    }

    const showSuccessModal = (): void => {
        setSuccessModalVisible(true);
        setTimeout(() => setSuccessModalVisible(false), 1000);
    }

    return (
        <View className='flex items-center' >
            <View className='relative rounded-full w-40 h-40 items-center justify-center shadow-sm'>
                {userProfile.profilePhotoUrl ? (
                    <Image source={{ uri: userProfile.profilePhotoUrl }} className='w-full h-full rounded-full' />
                ) : (
                    <Ionicons name='person' size={100} color='#ccc' />
                )}

                <TouchableOpacity
                    className="absolute bottom-0 right-[-2px] bg-white rounded-full"
                    onPress={() => setModalVisible(true)}
                >
                    <AntDesign name="pluscircle" size={45} color="#455A64" />
                </TouchableOpacity>
            </View>

            <ProfileInfo />

            <Modal
                visible={modalVisible}
                transparent={true}
                animationType='fade'
                onRequestClose={() => setModalVisible(false)}
            >
                <View className='w-full h-full flex-1 items-center justify-center' >
                    <View className='bg-white w-3/4 p-6 rounded-xl shadow-md' >
                        <TouchableOpacity
                            className='absolute top-2 right-2'
                            onPress={() => setModalVisible(false)}
                        >
                            <Ionicons name='close-circle-outline' size={28} color={'#455A64'} />
                        </TouchableOpacity>
                        <Text className='text-center text-lg text-[#1F2B4D] mt-4' style={{ fontFamily: 'poppins-medium' }} >Deseja alterar a foto de perfil?</Text>
                        <View className='flex-row justify-center gap-2 my-4' >
                            <TouchableOpacity
                                onPress={() => { removeImage(); setModalVisible(false); }}
                                className='bg-[#455A64] items-center justify-center rounded-lg w-1/2 py-3'
                            >
                                <Text className='text-base text-white' style={{ fontFamily: 'poppins-medium' }} >Remover</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={() => { pickImage(); setModalVisible(false); }}
                                className='bg-[#455A64] items-center justify-center w-1/2 rounded-lg'
                            >
                                <Text className='text-base text-white' style={{ fontFamily: 'poppins-medium' }} >Alterar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal >

            <SuccessModal visible={succesModalVisible} onClose={() => setSuccessModalVisible(false)} />
        </View >
    );
}

export default ProfilePhotoPicker;