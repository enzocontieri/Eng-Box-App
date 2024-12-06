import { getApiAxios } from '../../services/axios';
import { userStore } from '../stores/user';
import { UserResponse } from '../types/user-response';
import { decryptToken, getToken } from './manager';

export const getUserDetails = async () => {
	const token = await getToken();
	if (token) {
		const payloadToken = await decryptToken(token);

		if (userStore.getState().user) {
			return userStore.getState().user;
		}

		const axios = await getApiAxios();
		const { data: user } = await axios.get<UserResponse>(
			`/api/usuario/${payloadToken?.email}`,
		);

		// Chama o gerenciador de estado global do zustand para armazenar o nome do usuário
		userStore.getState().setUser(user);
		return user;
	} else {
		return null;
	}
};

export const getUserDetailsByEmail = async (email: string) => {
	try {
		const axios = await getApiAxios();
		const { data: user } = await axios.get<UserResponse>(
			`/api/usuario/${email}`,
		);

		return user;
	} catch (error: any) {
		if (error.response) {
			const { status, data: errorData } = error.response;
			console.log(errorData);
		}
	}
};
