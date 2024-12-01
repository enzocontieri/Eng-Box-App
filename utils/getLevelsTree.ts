import { ConsumerOptions } from './enums/consumer';

export const getLevesTree = (consumer: ConsumerOptions) => {
	switch (consumer) {
		case ConsumerOptions.reckless:
			return {
				imageSource: require('@assets/icons/IconsLevel/arvore1.1.png'),
				levelName: 'Consumidor Imprudente',
				description:
					'Seus hábitos de consumo acabam que por prejudicar a natureza em graus bem negativos.',
			};

		case ConsumerOptions.beginner:
			return {
				imageSource: require('@assets/icons/IconsLevel/arvore0.png'),
				levelName: 'Consumidor Iniciante',
				description:
					'Você ainda não têm muita noção de gasto e consumo, ainda está desenvolvendo seus hábitos!',
			};

		case ConsumerOptions.green:
			return {
				imageSource: require('@assets/icons/IconsLevel/arvore1.png'),
				levelName: 'Consumidor Verde',
				description:
					'Você é alguém com noções de impacto ambiental, que toma decisões de consumo cautelosas',
			};

		case ConsumerOptions.responsible:
			return {
				imageSource: require('@assets/icons/IconsLevel/arvore2.png'),
				levelName: 'Consumidor Responsável',
				description:
					'Muitas de suas escolhas levam em consideração o reaproveitamento de materiais e descarte adequado!',
			};

		case ConsumerOptions.expert:
			return {
				imageSource: require('@assets/icons/IconsLevel/arvore3.png'),
				levelName: 'Consumidor Expert',
				description:
					'Você é um exemplo de consciência ambiental, nunca falhando com a sustentabilidade ecológica em sua vida.',
			};

		default:
			return null;
	}
};
