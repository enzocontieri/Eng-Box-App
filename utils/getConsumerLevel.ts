import { ConsumerOptions } from './enums/consumer';

export const getConsumerLevel = (nivelConsciencia: number | undefined) => {
	let nivel = nivelConsciencia;
	if (nivel === 0) nivel++;

	if (nivel) {
		switch (nivel) {
			case 0:
				return ConsumerOptions.reckless;
			case 1:
				return ConsumerOptions.reckless;
			case 2:
				return ConsumerOptions.beginner;
			case 3:
				return ConsumerOptions.green;
			case 4:
				return ConsumerOptions.responsible;
			case 5:
				return ConsumerOptions.expert;

			default:
				return null;
		}
	} else {
		return null;
	}
};
