import { useFocusEffect, useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderMenu from '../../Components/buttons/HeaderMenu';
import PostList from '../../Components/profile/PostList';
import ProfileImagesSection from '../../Components/profile/ProfileImagesSection';
import ProfileInfo from '../../Components/profile/ProfileInfo';
import { getToken } from '../../utils/session/manager';
import { getUserDetails } from '../../utils/session/user-data';
import { NavigationProp } from '../../utils/types/navigation';
import { UserResponse } from '../../utils/types/user-response';

const Profile = () => {
	const navigation = useNavigation<NavigationProp>();
	const [userProfile, setUserProfile] = useState<UserResponse | null>(null);

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
				}
			})();
			return () => {
				// Do something when the screen is unfocused
				// Useful for cleanup functions
			};
		}, []),
	);

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

				<ProfileInfo />

				<View className="flex items-center justify-center w-full h-[40px] border-b-2 border-[#B8B8B8] mt-[32px]">
					<Text
						className="text-base text-[#4A4A4A]"
						style={{ fontFamily: 'poppins-medium' }}
					>
						Postagens
					</Text>
				</View>

				<PostList />
			</ScrollView>
		</SafeAreaView>
	);
};

export default Profile;
