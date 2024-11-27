import {
	RouteProp,
	useFocusEffect,
	useNavigation,
} from '@react-navigation/native';
import React from 'react';
import {
	Image,
	SafeAreaView,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
import { axiosLogin } from '../../services/axios';
import { getConsumerLevel } from '../../utils/getConsumerLevel';
import {
	NavigationProp,
	RootStackParamList,
} from '../../utils/types/navigation';

type QuizResultScreenRouteProp = RouteProp<RootStackParamList, 'QuizzResult'>;

type QuizResultProps = {
	route: QuizResultScreenRouteProp;
};

const QuizzResult = ({ route }: QuizResultProps) => {
	let { score, user } = route.params;
	const navigation = useNavigation<NavigationProp>();

	useFocusEffect(
		React.useCallback(() => {
			// Do something when the screen is focused
			(async () => {
				try {
					if (score === 0) score += 1;

					const { data: message } = await axiosLogin.post('/api/usuario', {
						email: user.email,
						senha: user.password,
						nome: user.username,
						nivelConsciencia: score,
						isMonitor: true,
						tokens: `${Math.random()}`,
						telefone: '123232323',
					});
				} catch (error) {
					navigation.navigate('Register');
					alert('Erro ao criar usuário!');
					console.error(error);
				}
			})();
			return () => {
				// Do something when the screen is unfocused
				// Useful for cleanup functions
			};
		}, []),
	);

	return (
		<SafeAreaView className="h-full">
			<View className="mt-5 items-center">
				<Text
					className="text-gray-500 text-3xl"
					style={{ fontFamily: 'poppins-semi-bold' }}
				>
					Parabéns! Perfil criado com sucesso!
				</Text>
			</View>

			<View className="mr-2 mt-6 items-center ">
				<Text
					style={{ fontFamily: 'poppins-semi-bold' }}
					className="text-gray-500 text-xl"
				>
					{' '}
					Você é um{' '}
					<Text className="text-green-500 text-xl">
						{getConsumerLevel(score)}
					</Text>
					!
				</Text>
			</View>

			<View className="items-center mt-10">
				<Image
					source={require('../../assets/icons/IconsLevel/arvore1.png')}
					className="w-72 h-72"
				/>
			</View>

			<View className="items-center mt-8 px-4">
				<Text
					style={{ fontFamily: 'poppins-semi-bold' }}
					className="text-justify text-gray-500 text-xl"
				>
					É importante cuidar do paciente, ser acompanhado pelo cliente, mas eu
					dou um incidente desses ao mesmo tempo que dá muito trabalho e dor.
					Para chegar aos mínimos detalhes.
				</Text>
			</View>
			<TouchableOpacity
				className="self-center justify-center rounded-2xl bg-gray-500 w-96 h-16 mt-4"
				onPress={() => navigation.navigate('LogIn')}
			>
				<Text
					style={{ fontFamily: 'poppins-semi-bold' }}
					className="text-center text-white text-xl"
				>
					Continuar
				</Text>
			</TouchableOpacity>
		</SafeAreaView>
	);
};

export default QuizzResult;
