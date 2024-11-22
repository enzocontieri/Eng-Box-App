import { useEffect } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import 'tailwindcss/tailwind.css';
import { useNavigation } from '@react-navigation/native';
import {
	checkIsRemember,
	getRememberMeData,
} from '../../utils/async-storage/user-data';
import { NavigationProp } from '../../utils/types/navigation';

export default function Wellcome() {
	const navigation = useNavigation<NavigationProp>();

	useEffect(() => {
		(async () => {
			const isRemember = await checkIsRemember();
			if (isRemember) navigation.navigate('Main');
		})();
	}, []);

	return (
		<View className="flex-1 bg-[#F9F9F9]  items-center">
			<View className="justify-center items-center mt-[-30] w-full h-64 mb-10">
				<Image
					source={require('../../assets/images/login/ImagemDeWellcome.png')}
					className="absolute shadown top-0 left-0 w-full h-100 object-cover "
				/>
				<View className="justify-center items-center mt-[200]">
					<Image source={require('../../assets/images/login/LogoDoApp.png')} />
				</View>
			</View>

			<TouchableOpacity
				className="w-4/5 bg-[#1F3B4D] shadow-lg py-3.5 mb-4 mt-[200] rounded-2xl"
				onPress={() => navigation.navigate('Register')}
			>
				<Text className="text-center text-[#FFFFFF] text-xl">
					Crie seu Perfil
				</Text>
			</TouchableOpacity>

			<TouchableOpacity
				className="w-4/5 bg-[#FFFFFF] shadow-lg py-3.5 mb-4 rounded-2xl"
				onPress={() => navigation.navigate('LogIn')}
			>
				<Text className="text-center border-[#F9F9F9] text-[#1F3B4D] text-xl">
					Entrar
				</Text>
			</TouchableOpacity>
			<View className="justify-center items-center">
				<TouchableOpacity onPress={() => navigation.navigate('PrivacyPolicy')}>
					<Text className="ml-1 mt-[150] text-[#09090b]">
						Politica de privacidade | Termos e condições
					</Text>
				</TouchableOpacity>

				<Text className="ml-1 mt-[0] text-[#09090b]">
					2024 consumo inteligente
				</Text>
			</View>
		</View>
	);
}
