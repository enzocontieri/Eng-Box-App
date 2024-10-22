import { useState } from 'react';
import { Image, ImageSourcePropType, Text, View } from 'react-native';
import { Post } from '../../utils/types/post';
import CommentButton from '../buttons/comment';
import LikeButton from '../buttons/like';

type PostProps = {
	post: Post;
};

const PostComponent = ({ post }: PostProps) => {
	const [isLiked, setIsLiked] = useState(false);

	return (
		<>
			{/* Area da imagem e cabeçalho do post */}
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
						<Text style={{ fontFamily: 'poppins-medium' }}>{post.author}</Text>
					</View>
				</View>

				<View className="h-[430px] w-[430px] self-center">
					<Image
						source={post.imageUrl as ImageSourcePropType}
						className="w-full h-full"
						resizeMode="cover"
					/>
				</View>
			</View>

			{/* Área pra ver descrição do post  */}
			<View className="mx-3 space-y-1">
				<Text className="font-medium text-2xl">{post.title}</Text>
				<Text className="whitespace-normal w-80">{post.description}</Text>
			</View>

			{/* Área pra ver comentários e realizar curtida do post  */}
			<View className="mt-8 flex-row items-center justify-around">
				<LikeButton isLiked={isLiked} setIsLiked={setIsLiked} />
				<CommentButton />
			</View>
		</>
	);
};

export default PostComponent;
