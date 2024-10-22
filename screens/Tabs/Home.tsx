import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
	Button,
	Image,
	ScrollView,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
import CommentButton from '../../Components/buttons/comment';
import LikeButton from '../../Components/buttons/like';

const Home = () => {
	const [isLiked, setIsLiked] = useState(false);

	const navigation = useNavigation();
	return (
		<View className="flex-1 space-y-2 pt-4 bg-white">
			<ScrollView
				className="flex-1"
				showsVerticalScrollIndicator={false}
				contentContainerStyle={{ paddingBottom: 45 }}
			>
				<View className="px-4 flex flex-row mt-5 items-center gap-x-3 mb-5">
					<View className="h-icon w-icon">
						<TouchableOpacity onPress={() => navigation.navigate('Profile')}>
							<Image
								source={require('../../assets/icons/user-pages-icons/user-photo/ex-user-photo.png')}
								className="w-full h-full"
								resizeMode="cover"
							/>
						</TouchableOpacity>
					</View>
					<Text
						className="text-lg font-medium"
						style={{ fontFamily: 'poppins-medium' }}
					>
						john.doe
					</Text>
				</View>

				<View>
					<View className="bg-primaryGray px-4 py-1 rounded-tl-xl rounded-tr-xl">
						<View className="flex flex-row items-center gap-x-3">
							<View className="h-11 w-11">
								<Image
									source={require('../../assets/icons/user-pages-icons/user-photo/ex-user-photo.png')}
									className="w-full h-full"
									resizeMode="cover"
								/>
							</View>
							<Text style={{ fontFamily: 'poppins-medium' }}>mike.myers</Text>
						</View>
					</View>

					<View className="h-[430px] w-[430px] self-center">
						<Image
							source={require('../../assets/images/posts/examples/image.png')}
							className="w-full h-full"
							resizeMode="cover"
						/>
					</View>
				</View>

				<View className="mx-3 space-y-1">
					<Text className="font-medium text-2xl">Documento</Text>

					<Text className="whitespace-normal w-80">
						Você sabia que pequenas mudanças no dia a dia podem fazer uma grande
						diferença? Experimente usar sacolas reutilizáveis em vez de
						plásticas...
					</Text>
				</View>

				<View className="mt-8 flex-row items-center justify-around">
					<LikeButton isLiked={isLiked} setIsLiked={setIsLiked} />
					<CommentButton />
				</View>
			</ScrollView>
		</View>
	);
};

export default Home;
