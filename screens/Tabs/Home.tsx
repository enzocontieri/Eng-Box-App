import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import PostComponent from '../../Components/posts/home';
import posts from '../../data/posts';
import { Post } from '../../utils/types/post';

const Home = () => {
	const renderPost = ({ item }: { item: Post }) => (
		<View className="mb-8">
			<PostComponent post={item} />
		</View>
	);

	return (
		<View className="flex-1 space-y-2 pt-4 bg-white">
			<FlatList
				data={posts}
				keyExtractor={(item) => item.id.toString()}
				renderItem={renderPost}
				ListHeaderComponent={<HomeHeader username="john.doe" />}
				contentContainerStyle={{ paddingBottom: 45 }}
			/>
		</View>
	);
};

type HomeHeaderProps = {
	username: string;
};

const HomeHeader = ({ username }: HomeHeaderProps) => {
	const navigation = useNavigation();

	return (
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
				{username}
			</Text>
		</View>
	);
};

export default Home;
