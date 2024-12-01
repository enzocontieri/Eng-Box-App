import { Ionicons } from '@expo/vector-icons';
import { useFocusEffect, useNavigation, useRoute } from '@react-navigation/native';
import * as React from 'react';
import { Alert, Image, SafeAreaView, ScrollView, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Menu, PaperProvider } from 'react-native-paper';
import { getApiAxios } from '../../services/axios';
import { getToken } from '../../utils/session/manager';
import { NavigationProp } from '../../utils/types/navigation';
import { useState } from 'react';
const PostDetails = () => {
	const navigation = useNavigation<NavigationProp>();
	const route = useRoute();
	const { id, imageUrl, titulo, conteudo } = route.params; // Parâmetros passados pela navegação
	const [contextMenuVisible, setContextMenuVisible] = React.useState<boolean>(false);

	const removePost = async (postId: number) => {
		try {
			const api = await getApiAxios();
			const response = await api.delete(`/api/receitas/${postId}`);
			console.log('Post removido com sucesso:', response.data);
		} catch (error: any) {
			if (error.response) {
				
				console.error('Erro ao remover o post:', error.response.data);
			} else if (error.request) {
				
				console.error('Erro na requisição:', error.request);
			} else {
				
				console.error('Erro desconhecido:', error.message);
			}
		}
	};
	
	useFocusEffect(
		React.useCallback(() => {
			// Do something when the screen is focused
			(async () => {
				const token = await getToken();
				if (!token) {
					alert('Você precisa realizar o login para acessar!');
					navigation.navigate('LogIn');
					return;
				}
				

			})();
			return () => {
				// Do something when the screen is unfocused
				// Useful for cleanup functions
			};
		}, []),
	);
	// Acao de Teste
	const handleRemovePost = async () => {
		if (!id) {
			Alert.alert("Erro", "ID do post não encontrado.");
			return;
		}
	
		Alert.alert(
			"Confirmar Exclusão",
			"Tem certeza que deseja remover este post?",
			[
				{ text: "Cancelar", style: "cancel" },
				{
					text: "Excluir",
					onPress: async () => {
						try {
							await removePost(id); 
							Alert.alert("Sucesso", "Post removido com sucesso!");
							navigation.goBack(); 
						} catch (error) {
							Alert.alert("Erro", "Não foi possível remover o post.");
						}
					},
				},
			]
		);
	};

	return (
		<PaperProvider>
			<SafeAreaView className="flex-1 bg-[#F9F9F9]">
				<ScrollView
					contentContainerStyle={{ paddingBottom: 45 }}
					showsVerticalScrollIndicator={false}
				>
					{/* Botão Voltar */}
					<View className="absolute top-10 left-5 z-10">
						<TouchableOpacity
							onPress={() => navigation.goBack()}
							className="bg-white p-2 rounded-full shadow-lg "
						>
							<Ionicons name="chevron-back" size={24} color="#767676" />
						</TouchableOpacity>
					</View>

					{/* Container Principal */}
					<View className="flex-1 items-center justify-center mt-10">

						{/* Botão para abrir modal "Opcoes do Post" */}
						<View className="flex self-end mr-2 mt-16">
							<Menu
								visible={contextMenuVisible}
								onDismiss={() => setContextMenuVisible(false)}
								anchor={
									<TouchableOpacity onPress={() => setContextMenuVisible(true)}>
										<Ionicons name='ellipsis-vertical' size={24} color={"#767676"} />
									</TouchableOpacity>
								}
								contentStyle={{ backgroundColor: '#F9F9F9' }}
							>
								<Menu.Item
									onPress={() => {
										setContextMenuVisible(false);
										handleRemovePost();
									}}
									title="Excluir Post"
									leadingIcon={({ size }) => (
										<Ionicons name="trash" size={size} color="#767676" />
									)}
									titleStyle={{ color: '#767676', fontFamily: "poppins-semi-bold" }}
								/>
							</Menu>
						</View>

						{/* Imagem do Post */}
						<Image
							source={{ uri: imageUrl }}
							className="w-full h-[45vh] mt-4"
							resizeMode="cover"
						/>

						{/* Informações do Post */}
						<View className="w-11/12 mt-5">
							{/* Título do Post */}
							<Text
								className="text-2xl mb-2 text-[#767676]"
								style={{ fontFamily: 'poppins-semi-bold' }}
							>
								{titulo}
							</Text>
							{/* Descrição do Post */}
							<Text
								className="text-justify mt-2.5 leading-6 text-[#767676]"
								style={{ fontFamily: 'poppins-medium' }}
							>
								{conteudo}
							</Text>
						</View>
					</View>
				</ScrollView>
			</SafeAreaView>
		</PaperProvider>
	);
};

export default PostDetails;
