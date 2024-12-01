import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import GoBackButton from '../../Components/GoBackButton';

interface Answer {
	title?: string;
	description: string;
}

interface FAQData {
	question: string;
	answer: Answer;
}

interface TreeLevel {
	imageSource: any;
	levelName: string;
	description: string;
}

const TreeLevelItem = ({ imageSource, levelName, description }: TreeLevel) => {
	return (
		<View className="flex items-center justify-center ">
			<View className="flex-row items-center relative w-11/12 h-36 my-2 rounded-lg shadow bg-white pr-4">
				<Image
					source={imageSource}
					className="h-28 w-28 mx-1"
				/>
				<Text
					className="absolute top-3 left-28 text-base text-[#7CC77F]"
					style={{ fontFamily: 'poppins-medium' }}
				>
					{levelName}
				</Text>

				<View className="flex-1">
					<Text
						className="text-xs text-justify mt-3 text-[#767676] break-words "
						style={{ fontFamily: 'poppins-medium' }}
					>
						{description}
					</Text>
				</View>
			</View>
		</View>
	);
};

interface FAQItemProps {
	question: string;
	answer: Answer;
	treeLevels: TreeLevel[];
}

type UsageTopicProps = {
	title: string;
	description: string;
};

const treeLevels: TreeLevel[] = [
	{
		imageSource: require('../../assets/icons/IconsLevel/arvore1.1.png'),
		levelName: "Consumidor Imprudente",
		description: "Seus hábitos de consumo acabam que por prejudicar a natureza em graus bem negativos."
	},
	{
		imageSource: require('../../assets/icons/IconsLevel/arvore0.png'),
		levelName: "Consumidor Iniciante",
		description: "Você ainda não têm muita noção de gasto e consumo, ainda está desenvolvendo seus hábitos!"
	},
	{
		imageSource: require('../../assets/icons/IconsLevel/arvore1.png'),
		levelName: "Consumidor Verde",
		description: "Você é alguém com noções de impacto ambiental, que toma decisões de consumo cautelosas"
	},
	{
		imageSource: require('../../assets/icons/IconsLevel/arvore2.png'),
		levelName: "Consumidor Responsável",
		description: "Muitas de suas escolhas levam em consideração o reaproveitamento de materiais e descarte adequado!"
	},
	{
		imageSource: require('../../assets/icons/IconsLevel/arvore3.png'),
		levelName: "Consumidor Expert",
		description: "Você é um exemplo de consciência ambiental, nunca falhando com a sustentabilidade ecológica em sua vida."
	}
];

const UsageTopic = ({ title, description }: UsageTopicProps) => {
	return (
		<View className="my-2">
			<Text className="text-sm text-justify" style={{ fontFamily: 'poppins-medium' }}>
				{title}
			</Text>
			<Text className="text-sm text-[#767676] text-justify mt-1" style={{ fontFamily: 'poppins-regular' }}>
				{description}
			</Text>
		</View>
	);
};

const FAQItem = ({ question, answer, treeLevels }: FAQItemProps) => {
	const [isExpanded, setIsExpanded] = React.useState(false);

	const toggleExpansion = () => {
		setIsExpanded(!isExpanded);
	};

	return (
		<View className="items-center">
			<TouchableOpacity
				onPress={toggleExpansion}
				className="flex-row justify-between items-center h-14 w-11/12 px-4 mt-4 rounded-md bg-[#D9D9D9]"
			>
				<Text className="text-base text-justify" style={{ fontFamily: 'poppins-medium' }}>
					{question}
				</Text>
				<Ionicons
					name={isExpanded ? 'chevron-up' : 'chevron-down'}
					size={24}
					color="#767676"
				/>
			</TouchableOpacity>

			{isExpanded && (
				<View className="w-11/12 mt-1 p-3 rounded-md bg-[#D9D9D9]">
					{answer.title && (
						<Text className="text-sm text-justify" style={{ fontFamily: 'poppins-medium' }}>
							{answer.title}
						</Text>
					)}
					<Text className="text-sm text-justify mx-1 my-1 text-[#767676]" style={{ fontFamily: 'poppins-medium' }}>
						{answer.description}
					</Text>

					{question === "O que são essas árvores?" && (
						<View className="mt-4">
							{treeLevels.map((item, index) => (
								<TreeLevelItem key={index} {...item} />
							))}
						</View>
					)}
					{question === "Como utilizo este aplicativo?" && (
						<View className="mt-4">
							<UsageTopic
								title="Acesse conteúdos educacionais"
								description="Explore artigos, vídeos e outros materiais informativos sobre sustentabilidade e boas práticas."
							/>
							<UsageTopic
								title="Descubra iniciativas sustentáveis"
								description="Utilize o mapa na aba “Especialistas” para visualizar dicas de engenharia sustentável e conectar-se com iniciativas próximas a você."
							/>
							<UsageTopic
								title="Colabore com outros usuários"
								description="Participe de fóruns e compartilhe suas próprias sugestões."
							/>
						</View>
					)}
				</View>
			)}

		</View>
	);
};

const Help = () => {

	const faqData: FAQData[] = [
		{
			question: "O que são essas árvores?",
			answer: {
				description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry..."
			}
		},
		{
			question: "Para quem é este aplicativo?",
			answer: {
				description: "Este aplicativo é direcionado a todas as pessoas que desejam adotar práticas mais sustentáveis. Ele é ideal para quem busca reduzir impactos ambientais, melhorar processos produtivos e alcançar metas de sustentabilidade através de métodos das diferentes áreas de engenharias."
			}
		},
		{
			question: "Como posso compartilhar dicas com outras pessoas?",
			answer: {
				description: 'Você pode compartilhar dicas diretamente na tela de "Upload" do aplicativo. É lá que você cria e publica seus posts para que outros usuários do app possam visualizar e interagir com suas ideias. A funcionalidade foi projetada para ser simples e eficiente, permitindo que você contribua com a comunidade com apenas alguns toques.'
			}
		},
		{
			question: "Como utilizo este aplicativo?",
			answer: {
				description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry..."
			}
		},
		{
			question: "Vocês têm outros aplicativos?",
			answer: {
				description: "Sim! Este aplicativo faz parte de uma família de apps voltados para práticas sustentáveis. Além do app para engenharia, temos apps específicos para as áreas de Gastronomia, Farmácia e Veterinária. Cada um deles traz dicas práticas e personalizadas para promover a sustentabilidade em suas respectivas áreas. Juntos, eles oferecem um ecossistema completo para quem deseja adotar hábitos mais conscientes."
			}
		}
	];

	return (
		<ScrollView
			showsVerticalScrollIndicator={false}
			contentContainerStyle={{ paddingBottom: 800, paddingTop: 20 }}
		>

			<GoBackButton title="Ajuda" />

			<View className="items-center justify-center mt-8">
				<Text className="text-xl text-[#767676] p-1 mb-4" style={{ fontFamily: 'poppins-semi-bold' }}>
					Perguntas Frequentes
				</Text>

				{faqData.map((item, index) => (
					<FAQItem
						key={index}
						question={item.question}
						answer={item.answer}
						treeLevels={treeLevels}
					/>
				))}
			</View>
		</ScrollView>
	);
};

export default Help;