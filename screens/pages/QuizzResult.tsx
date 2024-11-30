import { RouteProp, useFocusEffect, useNavigation, } from '@react-navigation/native';
import React from 'react';
import { Image, Text, TouchableOpacity, View, } from 'react-native';
import { axiosLogin } from '../../services/axios';
import { getConsumerLevel } from '../../utils/getConsumerLevel';
import { NavigationProp, RootStackParamList, } from '../../utils/types/navigation';
import { SafeAreaView } from 'react-native-safe-area-context';

type QuizResultScreenRouteProp = RouteProp<RootStackParamList, 'QuizzResult'>;

type QuizResultProps = {
	route: QuizResultScreenRouteProp;
};

const QuizzResult = ({ route }: QuizResultProps) => {
	const { score } = route.params;
	const navigation = useNavigation<NavigationProp>();

	return (
		<SafeAreaView className="flex-1 items-center ">

			<View className="my-8">
				<Text
					className="text-[#767676] text-3xl text-center"
					style={{ fontFamily: 'poppins-semi-bold' }}
				>
					Parabéns!
				</Text>
			</View>

			<View className="flex w-11/12 items-center">
				<View>
					<Text
						style={{ fontFamily: 'poppins-semi-bold' }}
						className="text-[#767676] text-lg"
					>
						{' '}
						Você é um{' '}
						<Text className="text-[#7CC77F] text-lg">
							{getConsumerLevel(score)}
						</Text>
						!
					</Text>
				</View>

				<View className="my-8">
					<Image
						source={require('../../assets/icons/IconsLevel/arvore1.png')}
						className="w-72 h-72"
					/>
				</View>

				<View>
					<Text
						style={{ fontFamily: 'poppins-semi-bold' }}
						className="text-justify text-[#767676] text-base"
					>
						É importante cuidar do paciente, ser acompanhado pelo cliente, mas eu
						dou um incidente desses ao mesmo tempo que dá muito trabalho e dor.
						Para chegar aos mínimos detalhes.
					</Text>
				</View>

				<TouchableOpacity
					className="w-full h-16 mt-8 justify-center rounded-lg bg-[#767676] shadow-md"
					onPress={() => navigation.navigate('LogIn')}
				>
					<Text
						style={{ fontFamily: 'poppins-semi-bold' }}
						className="text-xl text-white text-center"
					>
						Continuar
					</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
};

export default QuizzResult;