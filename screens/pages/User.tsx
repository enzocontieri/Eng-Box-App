import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
	Dimensions,
	FlatList,
	Image,
	ScrollView,
	Text,
	View,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import postsData from '../../data/postsData';

const User = () => {
	const navigation = useNavigation();
	const { width } = Dimensions.get('window'); // largura da Tela do dispositivo

	// Função que renderiza cada post
	const renderPostItem = ({ item }: any) => (
		<TouchableOpacity
			className="border-r border-b border-[#B8B8B8]"
			onPress={() =>
				navigation.navigate('PostDetails', {
					imageUrl: item.imageUrl,
					title: item.title,
					description: item.description,
				})
			}
			style={{ width: width / 3 - 1 }}
		>
			<Image
				source={item.imageUrl}
				resizeMode="cover"
				className="w-[140.33px] h-[140.33px]"
			/>
		</TouchableOpacity>
	);

	return (
		<View className="flex-1">
			<ScrollView
				showsVerticalScrollIndicator={false}
				contentContainerStyle={{ paddingBottom: 45 }}
			>
				{/* Botão para o Menu de Opções */}
				<View className="flex-row justify-end m-2">
					<TouchableOpacity onPress={() => navigation.navigate('MoreOptions')}>
						<Ionicons name="menu-outline" size={30} color="#303030" />
					</TouchableOpacity>
				</View>

				{/* Banner */}
				<View className="relative w-full h-[200px]">
					<Image
						source={require('../../assets/icons/user-pages-icons/background-images/ex-background-img-2.webp')}
						className="w-full h-full"
						resizeMode="cover"
					/>
				</View>

				{/* Foto do Perfil + Nível da Conta */}
				<View className="items-center mt-[-100px]">
					{/* Foto do Perfil */}
					<View className="relative">
						<Image
							source={require('../../assets/icons/user-pages-icons/user-photo/ex-user-photo.png')}
							className="w-[150px] h-[150px] rounded-full border-black "
						/>

						{/* Icone do nível da conta */}
						<View className="absolute bottom-[-5px] right-[-5px] bg-[#444443] rounded-full w-[50px] h-[50px]">
							<Image
								source={require('../../assets/icons/user-pages-icons/account-level-icons/ex-level-icon.png')}
								className="w-[50px] h-[50px]"
							/>
						</View>
					</View>
				</View>

				{/* Informações do Perfil */}
				<View className="ml-4 mt-4">
					{/* Nome do usuário + @ */}
					<Text
						className="text-base text-[#4A4A4A]"
						style={{ fontFamily: 'poppins-medium' }}
					>
						John Doe <Text>(@john.doe)</Text>
					</Text>

					{/* Cidade + Estado */}
					<View className="flex-row items-center mt-2">
						<Ionicons name="location-outline" size={25} color="#303030" />
						<Text
							className="text-[#4A4A4A] ml-1 text-base "
							style={{ fontFamily: 'poppins-medium' }}
						>
							São Paulo, SP
						</Text>
					</View>

					{/* Nível da Conta do Usuário */}
					<View className="flex-row items-center mt-2">
						<Image
							source={require('../../assets/icons/user-pages-icons/user-info/level-icon.png')}
							className="w-[25px] h-[25px] mr-2"
						/>
						<Text
							className="text-[#50B454] text-[16px]"
							style={{ fontFamily: 'poppins-medium' }}
						>
							Consumidor Verde
						</Text>
					</View>
				</View>

				{/* Lista de Posts */}
				<View className="flex items-center justify-center w-full h-[40px] border-b-2 border-[#B8B8B8] mt-[32px] ">
					<Text
						className="text-base text-[#4A4A4A] "
						style={{ fontFamily: 'poppins-medium' }}
					>
						Postagens
					</Text>
				</View>
				{/* Componente dos Posts */}
				<View>
					<FlatList
						data={postsData}
						keyExtractor={(item) => item.id.toString()}
						renderItem={renderPostItem}
						numColumns={3}
						scrollEnabled={false}
					/>
				</View>

				{/* Icones do Dispositivo são Realçados */}
				<StatusBar style="dark" />
			</ScrollView>
		</View>
	);
};

export default User;
