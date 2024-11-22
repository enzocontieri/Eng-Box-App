import { useEffect, useState } from "react";
import { Post } from "../../utils/types/post";
import { useNavigation } from "@react-navigation/native";
import { NavigationProp } from "../../utils/types/navigation";
import { getToken } from "../../utils/session/manager";
import { Image, TouchableOpacity, View } from "react-native";
import PostComponent from "../../Components/posts/home";
import { FlatList } from "react-native-gesture-handler";
import { getApiAxios } from "../../services/axios";


	



const Home = () => {
	const [posts, setPosts] = useState<Post[]>([]);
	const [loading, setLoading] = useState(true);
	const navigation = useNavigation<NavigationProp>();

	useEffect(() => {

		
		const fetchPosts = async () => {
			try {

				const api = await getApiAxios()
				const response = await api.get('/api/Enge/receitas');

				console.log(response.data);
				setPosts(response.data);
			} catch (error) {
				console.error('Erro ao buscar posts:', error);
			} finally {
				setLoading(false);
			}
		};
		
		(async () => {
			const token = await getToken();
			if (!token) {
				alert('Você precisa realizar o login para acessar!');
				navigation.navigate('LogIn');
				return 
			}

			fetchPosts();
		})();
		
	}, []);



	useEffect(() => {
		
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
		<View className="px-4 flex flex-row mt-5 items-center gap-x-3 mb-5">
			<View className="bg-black h-full w-full">
				<TouchableOpacity onPress={() => navigation.navigate('Profile')}>
					<Image source={require('../../assets/images/login/LogoDoApp.png')} />
				</TouchableOpacity>
			</View>
			<View className="px-4 flex flex-row my-6 items-center gap-x-3">
				<View>
					<Image
						source={require('../../assets/images/login/LogoAppHome.png')}
					/>
				</View>
			</View>
		</View>
	);
};

export default Home;
