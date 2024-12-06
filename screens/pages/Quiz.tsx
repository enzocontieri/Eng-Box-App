import React, { useState } from 'react';
import { Modal, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import 'tailwindcss/tailwind.css';
import { RouteProp, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { axiosLogin, getApiAxios } from '../../services/axios';
import { getUserDetails } from '../../utils/session/user-data';
import { userStore } from '../../utils/stores/user';
import { RootStackParamList } from '../../utils/types/navigation';

// Define o tipo de navegação para o componente
type NavigationProp = StackNavigationProp<RootStackParamList>;

// Define os tipos das props do componente Option
type OptionProps = {
	option: string;
	index: number;
	selectedOption: number | null;
	setSelectedOption: (index: number) => void;
};

// Componente para renderizar uma opção de resposta
const Option: React.FC<OptionProps> = ({
	option,
	index,
	selectedOption,
	setSelectedOption,
}) => {
	const optionLabel = String.fromCharCode(65 + index); // Gera 'A', 'B', 'C', etc.
	return (
		<TouchableOpacity
			accessible={true}
			accessibilityLabel={`Opção ${optionLabel}`}
			className={`flex-row h-16 w-full items-center rounded-lg mb-4 border border-[#76767650] ${selectedOption === index ? 'bg-[#3c3d3d]' : 'bg-[#767676]'}`}
			onPress={() => setSelectedOption(index)}
		>
			<View
				className={`rounded-xl h-10 w-10 mr-2 justify-center items-center ml-5 border border-[#76767650] ${selectedOption === index ? 'bg-[#767676]' : 'bg-[#3c3d3d]'}`}
			>
				<Text
					style={{ fontFamily: 'poppins-semi-bold' }}
					className="text-white"
				>
					{optionLabel}
				</Text>
			</View>
			<View className="flex-1 mr-14 justify-center items-center">
				<Text
					style={{ fontFamily: 'poppins-semi-bold' }}
					className={`text-center text-lg ${selectedOption === index ? 'text-white' : 'text-white'}`}
				>
					{option}
				</Text>
			</View>
		</TouchableOpacity>
	);
};

// Componente de alerta personalizado
const CustomAlert = ({
	visible,
	title,
	message,
	onClose,
}: {
	visible: boolean;
	title: string;
	message: string;
	onClose: () => void;
}) => (
	<Modal transparent={true} animationType="fade" visible={visible}>
		<View className="flex-1 justify-center items-center bg-[#00000050]">
			<View className="bg-white w-3/4 p-6 rounded-lg shadow-md">
				<Text
					className="text-[#767676] text-lg mb-4 text-center"
					style={{ fontFamily: 'poppins-semi-bold' }}
				>
					{title}
				</Text>
				<Text
					className="text-black text-base mb-6 text-center"
					style={{ fontFamily: 'poppins-regular' }}
				>
					{message}
				</Text>
				<TouchableOpacity
					className="bg-[#767676] w-full py-3 items-center justify-center rounded-md"
					onPress={onClose}
				>
					<Text
						className="text-base text-white"
						style={{ fontFamily: 'poppins-medium' }}
					>
						Fechar
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	</Modal>
);

// Componente principal do Quiz
const Quiz = () => {
	const questions = [
		{
			id: '1',
			question:
				'Qual dos seguintes materiais é mais comumente utilizado na construção de pontes devido à sua alta resistência à tração e compressão?',
			option: ['Concreto', 'Alumínio', 'Aço', 'Madeira'],
			correctOption: 2,
		},
		{
			id: '2',
			question:
				'Qual é a unidade de medida de tensão no Sistema Internacional (SI)?',
			option: ['Newton (N)', 'Pascal (Pa)', 'Joule (J)', 'Watt (W)'],
			correctOption: 1,
		},
		{
			id: '3',
			question:
				'Qual é o principal gás que causa o efeito estufa e está diretamente relacionado às atividades humanas?',
			option: [
				'Oxigênio',
				'Metano',
				'Dióxido de enxofre',
				'Dióxido de carbono',
			],
			correctOption: 3,
		},
		{
			id: '4',
			question: 'Qual é a unidade de medida de resistência elétrica?',
			option: ['Volt', 'Ampère', 'Ohm', 'Watt'],
			correctOption: 2,
		},

		{
			id: '5',
			question:
				'Em um sistema hidráulico, qual componente é utilizado para armazenar energia sob a forma de pressão?',
			option: [
				'Válvula de controle',
				'Cilindro hidráulico',
				'Bomba hidráulica',
				'Acumulador hidráulico',
			],
			correctOption: 3,
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [selectedOption, setSelectedOption] = useState<number | null>(null);
	let [score, setScore] = useState(0);
	const [alertVisible, setAlertVisible] = useState(false);
	const [resultAlertVisible, setResultAlertVisible] = useState(false);

	const navigation = useNavigation<NavigationProp>();

	let user = userStore.getState().user;

	const handleNextQuestion = () => {
		if (selectedOption === null) {
			setAlertVisible(true);
			return;
		}

		if (selectedOption === questions[currentQuestion].correctOption) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
			setSelectedOption(null);
		} else {
			setResultAlertVisible(true); // Mostra o alerta de resultado
		}
	};

	return (
		<SafeAreaView className="flex-1">
			<ScrollView
				contentContainerStyle={{ flexGrow: 1, paddingBottom: 300 }}
				className="flex-1"
			>
				<View className="items-center">
					{/* Alerta de seleção de opção */}
					<CustomAlert
						visible={alertVisible}
						title="Atenção"
						message="Por favor, selecione uma opção antes de continuar."
						onClose={() => setAlertVisible(false)}
					/>

					{/* Alerta de resultado */}
					<CustomAlert
						visible={resultAlertVisible}
						title="Resultado"
						message={`Você acertou ${score} de ${questions.length} perguntas.`}
						onClose={async () => {
							setResultAlertVisible(false);
							try {
								if (score === 0) score += 1;

								if (!user) {
									user = await getUserDetails();
								}

								const api = await getApiAxios();
								const response = await api.put(`/api/usuario/${user?.email}`, {
									nivelConsciencia: score,
								});

								userStore.getState().setUser({
									...user,
									nivelConsciencia: score,
									nome: user?.nome ?? '',
									email: user?.email ?? '',
									fotoUsu: user?.fotoUsu ?? null,
									isMonitor: user?.isMonitor ?? false,
									telefone: user?.telefone ?? '',
								});

								navigation.navigate('QuizzResult', { score: score });
							} catch (error) {
								console.error(error);
							}
						}}
					/>

					<View className="items-center w-10/12 mt-8">
						<Text
							className="text-3xl text-[#767676]"
							style={{ fontFamily: 'poppins-semi-bold' }}
						>
							Eng Box Quiz
						</Text>
						<Text
							className="text-lg text-justify text-[#767676] mt-8"
							style={{ fontFamily: 'poppins-medium' }}
						>
							{questions[currentQuestion].question}
						</Text>

						{/* Renderiza opções */}
						<View className="my-8">
							{questions[currentQuestion].option.map((option, index) => (
								<Option
									key={index}
									option={option}
									index={index}
									selectedOption={selectedOption}
									setSelectedOption={setSelectedOption}
								/>
							))}
						</View>

						<TouchableOpacity
							className={
								'bg-[#767676] rounded-lg w-full h-16 p-4 items-center justify-center border border-[#76767650] shadow-md'
							}
							onPress={handleNextQuestion}
						>
							<Text
								style={{ fontFamily: 'poppins-semi-bold' }}
								className="text-white text-lg"
							>
								{currentQuestion < questions.length - 1
									? 'Próxima Pergunta'
									: 'Concluir'}
							</Text>
						</TouchableOpacity>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default Quiz;
