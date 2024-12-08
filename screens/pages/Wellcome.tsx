import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import 'tailwindcss/tailwind.css';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { checkIsRemember } from '../../utils/async-storage/user-data';
import { getToken } from '../../utils/session/manager';
import { NavigationProp } from '../../utils/types/navigation';
import { StatusBar } from 'expo-status-bar';

export default function Wellcome() {
	const navigation = useNavigation<NavigationProp>();

	useFocusEffect(
		React.useCallback(() => {
			// Do something when the screen is focused
			(async () => {
				const isRemember = await checkIsRemember();
				const token = await getToken();
				if (isRemember && token) navigation.navigate('Main');
			})();
			return () => {
				// Do something when the screen is unfocused
				// Useful for cleanup functions
			};
		}, []),
	);

	return (
		<ScrollView>
			<View className="flex-1 bg-[#F9F9F9]  items-center">
				<View className="mb-8">
					<Image source={require("../../assets/images/Eng-Box-Image.png")} />
				</View>

				<TouchableOpacity
					className="w-4/5 bg-[#767676] shadow-lg py-3.5 mb-4 rounded-2xl"
					onPress={() => navigation.navigate('Register')}
				>
					<Text className="text-center text-[#FFFFFF] text-xl">
						Crie seu Perfil
					</Text>
				</TouchableOpacity>

				<TouchableOpacity
					className="border border-[#5A5A5A] w-4/5 bg-[#FFFFFF] shadow-lg py-3.5 mb-4 rounded-2xl"
					onPress={() => navigation.navigate('LogIn')}
				>
					<Text className=" text-center border-[#F9F9F9] text-[#5A5A5A] text-xl">
						Entrar
					</Text>
				</TouchableOpacity>
				<View className="justify-center items-center my-4">
					<TouchableOpacity onPress={() => navigation.navigate('PrivacyPolicy')}>
						<Text className="font-semibold ml-1  text-[#09090b]">
							Politica de privacidade | Termos e condições
						</Text>
					</TouchableOpacity>

					<Text className="ml-1 text-[#09090b]">
						2024 Consumo Inteligente ©
					</Text>
				</View>
			</View>
			<StatusBar  />
		</ScrollView>
	);
}
