import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { Video } from 'expo-av';
import * as ImagePicker from 'expo-image-picker';
import React, { useState } from 'react';
import {
	Alert,
	Image,
	KeyboardAvoidingView,
	Modal,
	Platform,
	Text,
	TextInput,
	TouchableOpacity,
	TouchableWithoutFeedback,
	View,
	ScrollView,
} from 'react-native';
import { Keyboard } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Spinner from '../../Components/spinner';
import { getApiAxios } from '../../services/axios';
import { getToken } from '../../utils/session/manager';
import { getUserDetails } from '../../utils/session/user-data';
import { UploadFormData } from '../../utils/types/form/formData';
import { NavigationProp } from '../../utils/types/navigation';
import { UserResponse } from '../../utils/types/user-response';

const Upload = () => {
	const [media, setMedia] = React.useState<string | null>(null);
	const [mediaType, setMediaType] = React.useState<'image' | 'video' | null>(null);
	const [titulo, setTitulo] = React.useState('');
	const [conteudo, setConteudo] = React.useState('');
	const [successfulUploadModalVisible, setSuccessfulUploadModalVisible] =
		React.useState(false);
	const [loading, setLoading] = useState(true);
	const [user, setUserProfile] = useState<UserResponse | undefined>(undefined);
	const [imageErrorModalVisible, setImageErrorModalVisible] = React.useState<boolean>(false);

	const navigation = useNavigation<NavigationProp>();

	const fetchUploadPost = async (data: UploadFormData) => {
		try {
			setLoading(true);
			const imageCover: any = {
				uri: data.fotos[0].uri,
				name: data.fotos[0].name ?? 'unknown.jpg',
				type: data.fotos[0].type ?? 'image/jpeg',
			};

			const formData = new FormData();
			formData.append('files', imageCover);
			formData.append('tema', 'Enge');
			formData.append('subtema', 'Enge');
			formData.append('idUsuario', user?.email ?? '');
			formData.append('titulo', data.titulo);
			formData.append('conteudo', data.conteudo);

			const api = await getApiAxios();
			await api.postForm('/api/receitas', formData);

			setSuccessfulUploadModalVisible(true);
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
		} finally {
			setLoading(false);
		}
	};

	useFocusEffect(
		React.useCallback(() => {
			(async () => {
				const token = await getToken();
				if (!token) {
					alert('Você precisa realizar o login para acessar!');
					navigation.navigate('LogIn');
					return;
				} else {
					const user = await getUserDetails();
					setUserProfile(user as UserResponse);
				}
				setLoading(false);
			})();
			return () => {
				setLoading(true);
			};
		}, []),
	);

	const pickMedia = async () => {
		const result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.Images,
			allowsEditing: true,
			quality: 1,
		});

		if (!result.canceled) {
			const selectedAsset = result.assets[0];
			const fileSizeInMB = selectedAsset.fileSize / (1024 * 1024);

			if (fileSizeInMB > 5) {
				setImageErrorModalVisible(true);
				return;
			}

			setMedia(selectedAsset.uri);
			setMediaType('image');
		}
	};

	const clearMedia = () => {
		setMedia(null);
		setMediaType(null);
	};

	const handlePost = async () => {
		try {
			await fetchUploadPost(uploadData);

			setMedia(null);
			setMediaType(null);
			setTitulo('');
			setConteudo('');
		} catch (error) {
			console.log(error);
		}
	};

	const uploadData: UploadFormData = {
		titulo: titulo,
		conteudo: conteudo,
		tema: 'Enge',
		subtemas: 'Enge',
		fotos: [
			{
				uri: media ?? '',
				name: 'uploaded_media.jpg',
				type: mediaType === 'image' ? 'image/jpeg' : 'video/mp4',
			},
		],
	};

	const isButtonDisabled = !media || titulo.trim() === '' || conteudo.trim() === '';

	if (loading) return <Spinner />;

	return (
		<KeyboardAvoidingView
			className="flex-1"
			behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
		>
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				<SafeAreaView className="flex-1 bg-[#F9F9F9]">
					<ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom: 300 }} className="flex-1">
						<View className="items-center mt-4">
							<View className="w-11/12 bg-[#EDEDED] py-8 rounded-lg shadow-md">
								{/* Upload Section */}
								<View className="w-10/12 mx-auto">
									<View className="bg-[#FFFFFF] w-full h-2/5 items-center justify-center rounded-lg">
										{media ? (
											<View className="relative flex-1 w-full h-full">
												<Image
													source={{ uri: media }}
													className="w-full h-full rounded-lg"
												/>
												<TouchableOpacity
													onPress={clearMedia}
													className="absolute top-2 right-2 bg-[#F9F9F9] rounded-full p-1"
												>
													<Ionicons name="trash" size={24} color="#00000090" />
												</TouchableOpacity>
											</View>
										) : (
											<TouchableOpacity
												className="items-center"
												onPress={pickMedia}
											>
												<Ionicons name="add-circle" size={60} color="#00000050" />
												<Text
													className="text-base text-[#767676]"
													style={{ fontFamily: 'poppins-medium' }}
												>
													Selecionar arquivo
												</Text>
											</TouchableOpacity>
										)}
									</View>

									{/* Text Inputs */}
									<TextInput
										placeholder="Escreva o título aqui..."
										value={titulo}
										onChangeText={setTitulo}
										className="text-lg pt-6 pb-6 text-[#767676]"
										style={{ fontFamily: 'poppins-medium' }}
										scrollEnabled={false}
										maxLength={30}
									/>
									<View className="bg-[#FFFFFF] w-full h-52 rounded-lg p-2.5">
										<TextInput
											placeholder="Escreva sobre o seu post..."
											value={conteudo}
											onChangeText={setConteudo}
											multiline
											className="w-full text-sm text-[#767676]"
											style={{ fontFamily: 'poppins-regular' }}
										/>
									</View>

									{/* Submit Button */}
									<TouchableOpacity
										className="w-full h-16 items-center justify-center bg-[#767676] rounded-lg mt-8"
										onPress={handlePost}
										disabled={isButtonDisabled}
									>
										<Text
											className="text-lg text-[#FFFFFF]"
											style={{ fontFamily: 'poppins-medium' }}
										>
											Enviar
										</Text>
									</TouchableOpacity>
								</View>
							</View>
						</View>

					</ScrollView >
					{/* Modal de sucesso */}
					<Modal
						transparent={true}
						visible={successfulUploadModalVisible}
						animationType="fade"
						onRequestClose={() => setSuccessfulUploadModalVisible(false)}
					>
						<View className="flex-1 justify-center items-center bg-[#00000050]">
							<View className="bg-white w-4/5 px-6 py-2 rounded-xl items-center shadow-md">
								<View className="my-4">
									<Ionicons name="checkmark-circle" size={60} color="#50B454" />
								</View>
								<Text
									className="text-lg text-[#767676] text-center mb-2"
									style={{ fontFamily: 'poppins-medium' }}
								>
									Post enviado para validação!
								</Text>
								<Text
									className="text-base text-[#767676] text-center mb-4"
									style={{ fontFamily: 'poppins-regular' }}
								>
									Você será informado assim que a validação for concluída.
								</Text>
								<TouchableOpacity
									onPress={() => setSuccessfulUploadModalVisible(false)}
									className="bg-[#767676] w-full py-3 items-center justify-center rounded-md mb-4 shadow-md"
								>
									<Text
										className="text-white text-base"
										style={{ fontFamily: 'poppins-medium' }}
									>
										Certo
									</Text>
								</TouchableOpacity>
							</View>
						</View>
					</Modal>
					{/* Modal de "Error na imagem" */}
					<Modal transparent={true} visible={imageErrorModalVisible} animationType="fade" onRequestClose={() => setImageErrorModalVisible(false)}>
						<View className="flex-1 justify-center items-center bg-[#00000050]">
							<View className="bg-white w-4/5 px-6 py-4 rounded-xl items-center shadow-md">
								<Ionicons name="alert-circle" size={60} color="#E53E3E" />
								<Text className="text-lg text-[#767676] text-center mt-4" style={{ fontFamily: 'poppins-medium' }}>
									Imagem muito grande!
								</Text>
								<Text className="text-base text-[#767676] text-center my-4" style={{ fontFamily: 'poppins-regular' }}>
									Por favor, selecione uma imagem com menos de 5MB.
								</Text>
								<TouchableOpacity
									onPress={() => setImageErrorModalVisible(false)}
									className="bg-[#767676] w-full py-3 items-center justify-center rounded-md shadow-md"
								>
									<Text className="text-white text-base" style={{ fontFamily: 'poppins-medium' }}>
										Entendi
									</Text>
								</TouchableOpacity>
							</View>
						</View>
					</Modal>
				</SafeAreaView>
			</TouchableWithoutFeedback>
		</KeyboardAvoidingView >
	);
};

export default Upload;
