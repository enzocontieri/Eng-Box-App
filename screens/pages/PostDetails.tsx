import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as React from 'react';
import { Alert, Image, SafeAreaView, ScrollView, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Menu, PaperProvider } from 'react-native-paper';

const PostDetails = () => {
	const navigation = useNavigation();
	const route = useRoute();
	const { imageUrl, titulo, conteudo } = route.params; // Parâmetros passados pela navegação
	const [contextMenuVisible, setContextMenuVisible] = React.useState<boolean>(false);

	// Acao de Teste
	const handleRemovePost = () => {
		Alert.alert(
			"Post removido",
			"Voce removeu o post com sucesso!",
			[{ text: "OK", onPress: () => navigation.goBack() }]
		);
	}

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
