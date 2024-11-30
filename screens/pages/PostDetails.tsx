import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as React from 'react';
import { Alert, Image, Modal, SafeAreaView, ScrollView, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const PostDetails = () => {
	const navigation = useNavigation();
	const route = useRoute();

	const { imageUrl, titulo, conteudo } = route.params; // Parâmetros passados pela navegação

	const [modalVisible, setModalVisible] = React.useState<boolean>(false);

	const handleRemovePost = () => {
		setModalVisible(false);
		Alert.alert(
			"Post removido",
			"Voce removeu o post com sucesso!",
			[{ text: "OK", onPress: () => navigation.goBack() }]
		);
	}

	return (
		<SafeAreaView className="flex-1">
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
						<Ionicons name="chevron-back" size={24} color="black" />
					</TouchableOpacity>
				</View>

				{/* Container Principal */}
				<View className="flex-1 items-center justify-center mt-10">

					{/* Botão para abrir modal "Opcoes do Post" */}
					<View className="flex self-end mr-2 mt-16">
						<TouchableOpacity
							onPress={() => setModalVisible(true)}
							className="bg-white p-2 rounded-full"
						>
							<Ionicons name="ellipsis-vertical" size={24} />
						</TouchableOpacity>
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
							className="text-2xl mb-2"
							style={{ fontFamily: 'poppins-medium' }}
						>
							{titulo}
						</Text>
						{/* Descrição do Post */}
						<Text
							className="text-justify mt-2.5 leading-6"
							style={{ fontFamily: 'poppins-regular' }}
						>
							{conteudo}
						</Text>
					</View>
				</View>
			</ScrollView>

			{/* Modal "Opcoes do Post" */}
			<Modal
				visible={modalVisible}
				transparent={true}
				animationType='fade'
				onRequestClose={() => setModalVisible(false)}
			>
				<View className='w-full h-full flex-1 items-center justify-center ' >
					<View className='bg-white w-3/4 p-6 rounded-xl shadow-md' >
						<TouchableOpacity
							className='flex self-end m-1'
							onPress={() => setModalVisible(false)}
						>
							<Ionicons name='close-circle-outline' size={28} color={'#455A64'} />
						</TouchableOpacity>

						<View className='flex items-center gap-5'>
							<Text className='text-lg text-[#1F2B4D]' style={{ fontFamily: 'poppins-medium' }} >Opções do post</Text>
							<TouchableOpacity
								onPress={handleRemovePost}
								className='bg-[#455A64] items-center justify-center px-14 py-2 rounded-lg'
							>
								<Text className='text-base text-white' style={{ fontFamily: 'poppins-medium' }} >Remover Post</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>
			</Modal>
		</SafeAreaView>
	);
};

export default PostDetails;
