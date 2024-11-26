import { ConsumerOptions } from './enums/consumer';

export const getConsumerLevel = (nivelConsciencia: number | undefined) => {
	if (nivelConsciencia) {
		switch (nivelConsciencia) {
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
