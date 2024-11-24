import { useFocusEffect, useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {
	Image,
	KeyboardAvoidingView,
	Platform,
	ScrollView,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from 'react-native';
import 'tailwindcss/tailwind.css';
import { Controller, useForm } from 'react-hook-form';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { axiosLogin } from '../../services/axios';
import {
	checkIsRemember,
	removeRememberMeData,
	storeRememberMeData,
} from '../../utils/async-storage/user-data';
import { getToken, saveToken } from '../../utils/session/manager';
import { LoginFormData } from '../../utils/types/form/formData';
import { NavigationProp } from '../../utils/types/navigation';
import { TokenResponse } from '../../utils/types/token';

export default function LogIn() {
	const navigation = useNavigation<NavigationProp>();
	const [rememberMe, setRememberMe] = useState(false);
	const { control, handleSubmit, formState } = useForm<LoginFormData>();
	const { isSubmitting } = formState;

	const handleLoginFormSubmit = async (data: LoginFormData) => {
		try {
			const { data: tokenObject } = await axiosLogin.post<TokenResponse>(
				'/api/usuario/login',
				{
					email: data.email,
					senha: data.password,
				},
			);

			await saveToken(tokenObject.token);

			if (rememberMe) {
				await storeRememberMeData();
			} else {
				await removeRememberMeData();
			}

			alert('Login realizado com sucesso!');
			navigation.navigate('Main');
		} catch (error: any) {
			console.error(error.response);
		}
	};

	useFocusEffect(
		React.useCallback(() => {
			(async () => {
				const isRemember = await checkIsRemember();
				const token = await getToken();
				if (isRemember && token) navigation.navigate('Main');
			})();
			return () => {
				// Do something when the screen is unfocused
				// Useful for cleanup functions
			};
		}, []),
	);

	return (
		<KeyboardAvoidingView
			className="flex-1 bg-[#F9F9F9]"
			behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
		>
			<ScrollView className="bg-[#F9F9F9]">
				<View className="bg-[#F9F9F9]">
					<View className="relative flex justify-center items-center  w-full h-64 mb-6">
						<Image
							source={require('../../assets/images/login/ImagemDeFundo.png')}
							className="absolute shadown top-0 left-0 w-full h-full bg-[#F9F9F9] object-cover"
						/>
						<View className="justify-center items-center">
							<Image
								source={require('../../assets/images/login/LogoDoApp.png')}
							/>
						</View>
					</View>

					<View className="flex justify-center items-center bg-[#F9F9F9]">
						{/*Wellcome*/}
						<Text
							style={{ fontFamily: 'poppins-semi-bold' }}
							className="text-[#5A5A5A] mb-3 font-bold text-3xl ml-2"
						>
							Bem-vindo de Volta!
						</Text>
						<Text className="text-base text-[#767676] mb-2">
							Faça login na sua conta
						</Text>

						{/*Input User*/}

						<View className="w-4/5 mb-4">
							<View className="flex-row items-center mb-2 mr-5 ">
								<Ionicons name="person-sharp" size={20} />

								<Text className="font-bold ml-1 text-[#5A5A5A]">Email</Text>
							</View>

							<Controller
								control={control}
								name="email"
								rules={{
									required: 'O Email ou Nome de Usuario é obrigatorio',
									minLength: {
										value: 3,
										message: 'Este campo deve ter no minimo 3 caracteres',
									},
									maxLength: {
										value: 51,
										message: 'Limite excedido de caracteres',
									},
								}}
								render={({
									field: { value, onChange },
									fieldState: { error },
								}) => (
									<>
										<TextInput
											className="bg-[#EDEDED] border border-[#5B5B5B] shadow px-4 py-4 rounded-2xl "
											placeholder="Email"
											value={value}
											onChangeText={onChange}
											keyboardType="email-address"
											autoCapitalize="none"
										/>
										{error && (
											<Text
												style={{ fontFamily: 'poppins-semi-bold' }}
												className="text-[#ff375b] text-xs ml-2"
											>
												{error.message}
											</Text>
										)}
									</>
								)}
							/>
						</View>

						{/*Input Password*/}
						<View className="w-4/5 mb-4">
							<View className="flex-row items-center mb-2 mr-5 ">
								<Ionicons name="lock-closed" size={20} />
								<Text className="font-bold ml-1 text-[#5A5A5A] ">Senha</Text>
							</View>

							<Controller
								control={control}
								name="password"
								rules={{
									required: 'A senha é obrigatoria',
									minLength: {
										value: 3,
										message: 'A senha deve ter pelo menos 3 caracteres',
									},
									maxLength: {
										value: 51,
										message: 'Limite excedido de caracteres',
									},
									pattern: {
										value:
											/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
										message:
											'Senha inválida. Por favor, verifique e tente novamente.',
									},
								}}
								render={({
									field: { value, onChange },
									fieldState: { error },
								}) => (
									<>
										<TextInput
											className="bg-[#EDEDED] border border-[#5B5B5B]  shadow rounded-2xl px-4 py-4 "
											placeholder="Digite sua senha"
											value={value}
											onChangeText={onChange}
											secureTextEntry={true}
											autoCapitalize="none"
										/>
										{error && (
											<Text
												style={{ fontFamily: 'poppins-semi-bold' }}
												className="text-[#ff375b] text-xs ml-2"
											>
												{error.message}
											</Text>
										)}
									</>
								)}
							/>
						</View>

						{/*Remember me and ForgotPassword */}
						<View className="w-4/5 flex-row justify between mb-6">
							<View className="flex-row items-center">
								<TouchableOpacity
									className={`shadow w-6 h-6 rounded-sm border-2 $rememberMe ? 'bg-[#D9D9D9]' : 'bg-white border-[#D9D9D9]'`}
									onPress={() => setRememberMe(!rememberMe)}
								>
									{rememberMe && (
										<View className="w-full h-full bg-[#5A5A5A]">
											<Ionicons
												name="checkbox-outline"
												size={20}
												color="white"
											/>
										</View>
									)}
								</TouchableOpacity>

								<Text className="text-gray-700 ml-2">Lembrar de Mim</Text>
								<TouchableOpacity
									onPress={() => navigation.navigate('ForgotPassword')}
								>
									<Text className="font-semibold shadow text-sm text-[#5A5A5A] ml-6 ">
										Esqueceu sua Senha?
									</Text>
								</TouchableOpacity>
							</View>
						</View>

						{/*Button Enter */}
						<TouchableOpacity
							className={'w-4/5 bg-[#5A5A5A] shadow-lg py-4 mb-4 rounded-2xl'}
							onPress={handleSubmit(handleLoginFormSubmit)}
							disabled={isSubmitting}
						>
							<Text className="text-center text-white text-lg">Entrar</Text>
						</TouchableOpacity>

						{/*Link of Register */}
						<View className=" flex-row justify-center items-center mb-4">
							<View className="flex-row items-center">
								<Text className="text-gray-700 ">Não tem uma Conta?</Text>
							</View>
							<TouchableOpacity
								className="shadow text-[#767676]"
								onPress={() => navigation.navigate('Register')}
							>
								<Text className="font-semibold text-sm text-[#5A5A5A] ml-1">
									Registre-se
								</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>
			</ScrollView>
		</KeyboardAvoidingView>
	);
}
