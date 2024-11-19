import * as SecureStore from 'expo-secure-store';

export const saveToken = async (token: string) => {
    await SecureStore.setItemAsync('token-session', token);
};

export const getToken = async () => {
    const token = await SecureStore.getItemAsync('token-session');
    return token;
};