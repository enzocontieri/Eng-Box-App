import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AboutTextBox } from '../../Components/AboutTextBox';
import { NavigationProp } from '../../utils/types/navigation';

const QuizPresentation = () => {
	const navigation = useNavigation<NavigationProp>();

	return (
		<SafeAreaView>
			<ScrollView>
				<View className="items-center">
					<View className="mt-10 mb-8">
						<Image source={require('../../assets/eng-box-quiz.png')} />
					</View>

					<AboutTextBox
						boxTextContent="O EngBox é uma ferramenta voltada para promover o consumo sustentável 
                    através de práticas e dicas específicas da área de Engenharia. Ele faz parte de uma família de aplicativos
                    que exploram a sustentabilidade em diferentes campos, como Gastronomia, Moda, Farmácia e Engenharia."
					/>

					<AboutTextBox
						boxTextContent="Para conhecermos um pouco mais sobre você e seus hábitos como consumidor, criamos um quiz interativo
                    que avalia suas escolhas e como elas impactam o mundo ao seu redor."
					/>

					<AboutTextBox boxTextContent="E aí, pronto para descobrir qual é o seu nível de consumidor e tornar suas práticas ainda mais sustentáveis?" />

					<View className=" items-center mt-6 w-4/5">
						<TouchableOpacity
							className="w-full h-16 items-center justify-center rounded-lg shadow-md bg-[#767676]"
							onPress={() => navigation.navigate('Quiz')}
						>
							<Text
								className="text-xl text-white"
								style={{ fontFamily: 'poppins-medium' }}
							>
								Ir para o Quiz
							</Text>
						</TouchableOpacity>

						<TouchableOpacity
							className="mt-5 mb-5"
							onPress={() => navigation.navigate('Main')}
						>
							<Text
								className="text-base text-[#767676]"
								style={{ fontFamily: 'poppins-medium' }}
							>
								Deixar para depois
							</Text>
						</TouchableOpacity>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default QuizPresentation;
