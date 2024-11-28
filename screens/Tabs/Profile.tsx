import { useFocusEffect, useNavigation } from '@react-navigation/native';
import React, { useEffect, useState, useTransition } from 'react';
import { ActivityIndicator, Alert, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderMenu from '../../Components/buttons/HeaderMenu';
import PostList from '../../Components/profile/PostList';
import ProfileImagesSection from '../../Components/profile/ProfileImagesSection';
import ProfileInfo from '../../Components/profile/ProfileInfo';
import Spinner from '../../Components/spinner';
import { getApiAxios } from '../../services/axios';
import { getToken } from '../../utils/session/manager';
import { getUserDetails } from '../../utils/session/user-data';
import { NavigationProp } from '../../utils/types/navigation';
import { Post } from '../../utils/types/post';
import { UserResponse } from '../../utils/types/user-response';

const Profile = () => {
	const navigation = useNavigation<NavigationProp>();
	const [userProfile, setUserProfile] = useState<UserResponse | null>(null);
	const [userPostagens, setUserPostagens] = useState<Post[]>([]);
	const [loading, setLoading] = useState(true);

	const fetchUserPosts = async (userEmail: string) => {
		try {
			const api = await getApiAxios();
			const response = await api.get('/api/Enge/receitas');
			const userPosts = response.data.filter(
				(posts: Post) => posts.idUsuario === userEmail
			);
			setUserPostagens(userPosts);
			console.log('Postagens filtradas', userPosts)

		} catch (error) {
			console.error('Erro ao carregar as postagens:', error);
			Alert.alert('Erro', 'Não foi possível carregar os dados do perfil.');

		}
	};


	useFocusEffect(
		React.useCallback(() => {
			// Do something when the screen is focused
			(async () => {
				const token = await getToken();
				if (!token) {
					alert('Você precisa realizar o login para acessar!');
					navigation.navigate('LogIn');
					return;
				} else {
					const user = await getUserDetails();
					setUserProfile(user);

					if (user) {
						console.log("Buscando postagens...");
						await fetchUserPosts(user.email);
					}
				}
				setLoading(false)

			})();
			return () => {
				setLoading(true);
			};
		}, []),
	);

	if (loading) return <Spinner />;

	return (
		<SafeAreaView className="flex-1">
			<ScrollView
				showsVerticalScrollIndicator={false}
				contentContainerStyle={{ paddingBottom: 45 }}
			>
				<View className="flex-row justify-end m-2">
					<HeaderMenu />
				</View>

				<ProfileImagesSection user={userProfile} />

				<ProfileInfo user={userProfile} />

				<View className="flex items-center justify-center w-full h-[40px] border-b-2 border-[#B8B8B8] mt-[32px]">
					<Text
						className="text-base text-[#4A4A4A]"
						style={{ fontFamily: 'poppins-medium' }}
					>
						Postagens
					</Text>
				</View>

				<PostList posts={userPostagens} key={userPostagens.length} />
			</ScrollView>
		</SafeAreaView>
	);
};

export default Profile;
