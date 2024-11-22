import React, { useEffect, useState } from 'react';
import { FlatList, Text, View, Image, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
<<<<<<< HEAD
import React, { useEffect } from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import PostComponent from '../../Components/posts/home';
import posts from '../../data/posts';
import { getToken } from '../../utils/session/manager';
import { NavigationProp } from '../../utils/types/navigation';
import { Post } from '../../utils/types/post';

const Home = () => {
	const navigation = useNavigation<NavigationProp>();

	useEffect(() => {
		(async () => {
			const token = await getToken();
			if (!token) {
				alert('Você precisa realizar o login para acessar!');
				navigation.navigate('LogIn');
			}
		})();
	}, []);

=======
import { axiosPostsGet } from '../../services/axios';
import PostComponent from '../../Components/posts/home';
import { Post } from '../../utils/types/post';

const Home = () => {
	const [posts, setPosts] = useState<Post[]>([]);
	const [loading, setLoading] = useState(true);


	useEffect(() => {
		const fetchPosts = async () => {
			try {
				const response = await axiosPostsGet.get('/api/Enge/receitas');
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


>>>>>>> ad6e051ba9f4f09138326309f87ad93ff1471f69
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
<<<<<<< HEAD
		<View className="px-4 flex flex-row mt-5 items-center gap-x-3 mb-5">
			<View className="bg-black h-full w-full">
				<TouchableOpacity onPress={() => navigation.navigate('Profile')}>
					<Image source={require('../../assets/images/login/LogoDoApp.png')} />
				</TouchableOpacity>
=======
		<View className="px-4 flex flex-row my-6 items-center gap-x-3">
			<View>
				<Image
					source={require('../../assets/images/login/LogoAppHome.png')}
				/>
>>>>>>> ad6e051ba9f4f09138326309f87ad93ff1471f69
			</View>
		</View>
	);
};

export default Home;
