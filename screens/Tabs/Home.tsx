import React, { useEffect, useState } from 'react';
import { FlatList, Text, View, Image, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { axiosPostsGet } from '../../services/axios';
import PostComponent from '../../Components/posts/home';
import { Post } from '../../utils/types/post';

const Home = () => {
	const [posts, setPosts] = useState<Post[]>([]);
	const [loading, setLoading] = useState(true);


	useEffect(() => {
		const fetchPosts = async () => {
			try {
				const response = await axiosPostsGet.get('/api/receitas');
				console.log(response.data);
				setPosts(response.data);
			} catch (error) {
				console.error('Erro ao buscar posts:', error);
			} finally {
				setLoading(false);
			}
		};

		fetchPosts();
	}, []);


	const renderPost = ({ item }: { item: Post }) => (
		<View className="mb-8">
			<PostComponent post={item} />
		</View>
	);

	if (loading) {
		return (
			<View className="flex-1 justify-center items-center bg-white">
			</View>
		);
	}

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
		<View className="px-4 flex flex-row my-6 items-center gap-x-3">
			<View>
				<Image
					source={require('../../assets/images/login/LogoAppHome.png')}
				/>
			</View>
		</View>
	);
};

export default Home;
