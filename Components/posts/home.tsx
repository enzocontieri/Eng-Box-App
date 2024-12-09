import { useFocusEffect } from '@react-navigation/native';
import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { getUserDetailsByEmail } from '../../utils/session/user-data';
import { Post } from '../../utils/types/post';
import { UserResponse } from '../../utils/types/user-response';
import { Ionicons } from '@expo/vector-icons';
type PostProps = {
	post: Post;
};

const PostComponent = ({ post }: PostProps) => {
	const imageUrl =
		post.fotos && post.fotos.length > 0 ? post.fotos[0] : "";
	const [userPost, setUserPost] = useState<UserResponse | null>(null);
	const [isExpanded, setIsExpanded] = useState<boolean>(false);
	const MAX_LINES = 3;

	useFocusEffect(
		React.useCallback(() => {
			// Do something when the screen is focused
			(async () => {
				const user = await getUserDetailsByEmail(post.idUsuario);
				setUserPost(user);
			})();
			return () => {
				// Do something when the screen is unfocused
				// Useful for cleanup functions
			};
		}, []),
	);

	return (
		<View>
			<View className="bg-primaryGray px-4 py-1 rounded-tl-xl rounded-tr-xl">
				<View className="flex flex-row items-center gap-x-3">
					<View className="h-11 w-11">
						<Image
							source={
								userPost?.fotoUsu
									? { uri: userPost?.fotoUsu }
									: require('../../assets/icons/iconsLogin/blank-user-photo.jpg')
							}
							className="w-full h-full rounded-full"
							resizeMode="cover"
						/>
					</View>

					<View className="gap-x-1 flex-row justify-between items-center">
						<Text
							className="text-sm"
							style={{ fontFamily: "poppins-semi-bold" }}>
							{userPost?.nome || 'Autor desconhecido'}
						</Text>

						{userPost?.isMonitor && (
							<View className="flex-row gap-x-1">
								<Ionicons
									name="diamond-outline"
									size={14}
									color="black"
								/>
								<Text
									className="text-xs"
									style={{
										fontFamily: 'poppins-semi-bold',
									}}
								>
									Especialista
								</Text>
							</View>
						)}
					</View>

				</View>
			</View>

			<View className="h-[430px] w-[430px] self-center">
				{imageUrl ? (
					<Image
						source={{ uri: imageUrl as any }}
						className="w-full h-full"
						resizeMode="cover"
					/>
				) : (
					<Text className="text-center">Imagem não disponível</Text>
				)}
			</View>

			<View className="mx-3 mt-4 space-y-1">
				<Text
					className="text-2xl text-[#767676]"
					style={{ fontFamily: 'poppins-semi-bold' }}
				>
					{post.titulo || 'Sem título'}
				</Text>

				<Text
					numberOfLines={isExpanded ? undefined : MAX_LINES}
					className="whitespace-normal w-full text-justify mt-2.5 leading-6 text-[#767676]"
					style={{ fontFamily: 'poppins-medium' }}
				>
					{post.conteudo || 'Sem descrição'}
				</Text>

				{post.conteudo && post.conteudo.length > 100 && (
					<TouchableOpacity onPress={() => setIsExpanded(!isExpanded)}>
						<Text className="mt-2" style={{ fontFamily: 'poppins-medium' }}>
							{isExpanded ? 'Ver menos' : 'Ver mais'}
						</Text>
					</TouchableOpacity>
				)}
			</View>
		</View>
	);
};

export default PostComponent;
