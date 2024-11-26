import React from 'react';
import { Image, Text, View } from 'react-native';
import { Post } from '../../utils/types/post';

type PostProps = {
	post: Post;
};

const PostComponent = ({ post }: PostProps) => {
	const imageUrl =
		post.fotos && post.fotos.length > 0 ? post.fotos[0].url : null;

	return (
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
					<Text className="font-medium">
						{post.idUsuario || 'Autor desconhecido'}
					</Text>
				</View>
			</View>

			<View className="h-[430px] w-[430px] self-center">
				{imageUrl ? (
					<Image
						source={{ uri: imageUrl }}
						className="w-full h-full"
						resizeMode="cover"
					/>
				) : (
					<Text className="text-center">Imagem não disponível</Text>
				)}
			</View>

			<View className="mx-3 space-y-1">
				<Text className="font-medium text-2xl">
					{post.titulo || 'Sem título'}
				</Text>
				<Text className="whitespace-normal w-80">
					{post.conteudo || 'Sem descrição'}
				</Text>
			</View>
		</View>
	);
};

export default PostComponent;
