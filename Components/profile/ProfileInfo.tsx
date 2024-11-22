import { useFocusEffect } from '@react-navigation/native';
import React, { useState } from 'react';
import { Image, Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { userStore } from '../../utils/stores/user';
import { User } from '../../utils/types/user';

const ProfileInfo = () => {
	const [userProfile, setUserProfile] = useState<User>();

	useFocusEffect(
		React.useCallback(() => {
			// Do something when the screen is focused
			const user = userStore.getState().user;
			if (user) {
				setUserProfile(user);
			}

			return () => {
				// Do something when the screen is unfocused
				// Useful for cleanup functions
			};
		}, []),
	);

	return (
		<View className="ml-4 mt-4 self-start ">
			<View className="flex-row items-center">
				<Ionicons name="person-sharp" size={25} color="#303030" />
				<Text
					className="text-base text-[#4A4A4A] ml-2"
					style={{ fontFamily: 'poppins-medium' }}
				>
					{userProfile?.nome} | @{userProfile?.nome}
				</Text>
			</View>

			<View className="flex-row items-center mt-2">
				<Image
					source={require('../../assets/icons/user-pages-icons/user-info/level-icon.png')}
					className="w-6 h-6 mr-2"
				/>
				<Text
					className="text-base text-[#50B454]"
					style={{ fontFamily: 'poppins-medium' }}
				>
					Consumidor Verde
				</Text>
			</View>
		</View>
	);
};

export default ProfileInfo;
