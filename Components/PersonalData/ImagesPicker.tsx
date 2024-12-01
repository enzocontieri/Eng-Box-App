import AntDesign from '@expo/vector-icons/AntDesign';
import * as ImagePicker from 'expo-image-picker';
import React from 'react';
import { Image, Modal, Text, TouchableOpacity, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { getApiAxios } from '../../services/axios';
import { getUserDetails } from '../../utils/session/user-data';
import { userStore } from '../../utils/stores/user';
import ProfileInfo from '../profile/ProfileInfo';
import SuccessModal from './SuccessModal';

const ProfilePhotoPicker: React.FC = () => {
	let user = userStore.getState().user;

	const [modalVisible, setModalVisible] = React.useState<boolean>(false);
	const [succesModalVisible, setSuccessModalVisible] =
		React.useState<boolean>(false);

	const pickImage = async (): Promise<void> => {
		const permissionResult =
			await ImagePicker.requestMediaLibraryPermissionsAsync();
		if (!permissionResult.granted) {
			alert('Permissão para acessa a galeria é necessária.');
			return;
		}

		const result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: 'images',
			allowsEditing: true,
			aspect: [1, 1],
			quality: 1,
		});

		if (!user) {
			user = await getUserDetails();
		} else {
			if (!result.canceled && result.assets?.[0]) {
				const file = result.assets[0];
				const isUpadatedImage = await uploadImage(file);

				if (isUpadatedImage) {
					userStore.getState().setUser({ ...user, fotoUsu: file.uri });
					showSuccessModal();
				}
			}
		}
	};

	const uploadImage = async (image: ImagePicker.ImagePickerAsset) => {
		try {
			if (user) {
				const imageCover: any = {
					uri: image.uri,
					name: image.fileName ?? 'unknown.jpg',
					type: image.mimeType ?? 'image/jpeg',
				};

				const formData = new FormData();
				formData.append('fotoUsu', imageCover);

				const api = await getApiAxios();

				// Faça a requisição para a API
				const response = await api.putForm(
					`/api/usuario/${user.email}`,
					formData,
				);

				if (response.status === 200) {
					return true;
				}

				return null;
			}
		} catch (error: any) {
			if (error.response) {
				console.error('Erro na resposta:', error.response.data);
				console.error('Status do erro:', error.response.status);
				console.error('Cabeçalhos do erro:', error.response.headers);
			} else if (error.request) {
				// Erro na requisição, mas sem resposta (ex.: problema de rede)
				console.error('Erro na requisição:', error.request);
			} else {
				// Outro tipo de erro
				console.error('Erro geral:', error.message);
			}
			alert('Erro ao atualizar foto de perfil');
		}
	};

	const removeImage = async (): Promise<void> => {
		if (!user) {
			user = await getUserDetails();
		} else {
			userStore.getState().setUser({ ...user, fotoUsu: null });
			showSuccessModal();
		}
	};

	const showSuccessModal = (): void => {
		setSuccessModalVisible(true);
		setTimeout(() => setSuccessModalVisible(false), 1000);
	};

	return (
		<View className="flex items-center">
			<View className="relative rounded-full w-40 h-40 items-center justify-center shadow-sm">
				{user?.fotoUsu ? (
					<Image
						source={{ uri: user.fotoUsu }}
						className="w-full h-full rounded-full"
					/>
				) : (
					<Ionicons name="person" size={100} color="#ccc" />
				)}

				<TouchableOpacity
					className="absolute bottom-0 right-[-2px] bg-white rounded-full"
					onPress={() => setModalVisible(true)}
				>
					<AntDesign name="pluscircle" size={45} color="#767676" />
				</TouchableOpacity>
			</View>

			<ProfileInfo user={user} />

			<Modal
				visible={modalVisible}
				transparent={true}
				animationType="fade"
				onRequestClose={() => setModalVisible(false)}
			>
				<View className="w-full h-full flex-1 items-center justify-center bg-[#00000050]">
					<View className="bg-white w-3/4 p-6 rounded-xl shadow-md">
						<TouchableOpacity
							className="absolute top-2 right-2"
							onPress={() => setModalVisible(false)}
						>
							<Ionicons
								name="close-circle-outline"
								size={28}
								color={'#767676'}
							/>
						</TouchableOpacity>
						<Text
							className="text-center text-lg text-[#767676] mt-4"
							style={{ fontFamily: 'poppins-semi-bold' }}
						>
							Deseja alterar a foto de perfil?
						</Text>
						<View className="flex-row justify-center gap-2 my-4">
							<TouchableOpacity
								onPress={() => {
									removeImage();
									setModalVisible(false);
								}}
								className="items-center justify-center rounded-lg w-1/2 py-3"
							>
								<Text
									className="text-base text-[#767676]"
									style={{ fontFamily: 'poppins-medium' }}
								>
									Remover
								</Text>
							</TouchableOpacity>

							<TouchableOpacity
								onPress={() => {
									pickImage();
									setModalVisible(false);
								}}
								className="bg-[#767676] items-center justify-center w-1/2 rounded-lg"
							>
								<Text
									className="text-base text-white"
									style={{ fontFamily: 'poppins-medium' }}
								>
									Alterar
								</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>
			</Modal>

			<SuccessModal
				visible={succesModalVisible}
				onClose={() => setSuccessModalVisible(false)}
			/>
		</View>
	);
};

export default ProfilePhotoPicker;
