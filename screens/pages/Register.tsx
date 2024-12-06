import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
	Image,
	KeyboardAvoidingView,
	Platform,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from 'react-native';
import 'tailwindcss/tailwind.css';
import { Controller, useForm } from 'react-hook-form';
import { ScrollView } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { axiosLogin } from '../../services/axios';
import { getUserDetailsByEmail } from '../../utils/session/user-data';
import { RegisterFormData } from '../../utils/types/form/formData';
import { NavigationProp } from '../../utils/types/navigation';

export default function Register() {
	/* Este código retorna exceção na pagina Register */
	const navigation = useNavigation<NavigationProp>();
	const { control, handleSubmit, getValues, formState, reset } =
		useForm<RegisterFormData>();
	const { isSubmitting } = formState;

	const [showPassword, setShowPassword] = React.useState<boolean>(false);
	const [showPasswordConfirmation, setShowPasswordConfirmation] =
		React.useState<boolean>(false);

	const handleRegisterFormSubmit = async (data: RegisterFormData) => {
		try {
			const { data: message } = await axiosLogin.post('/api/usuario', {
				email: data.email,
				senha: data.password,
				nome: data.username,
				nivelConsciencia: 1,
				isMonitor: true,
				tokens: `${Math.random()}`,
				telefone: '123232323',
			});

			alert('Conta criada com sucesso!');
			reset();
			navigation.navigate('LogIn');
		} catch (error: any) {
			if (error.response) {
				const { status, data: errorData } = error.response;

				if (
					errorData.errors[0] &&
					errorData.errors[0].trim() ===
						'duplicate key value violates unique constraint "usuarios_pkey"'
				) {
					alert('Email já registrado!');
				} else {
					alert('Erro ao criar conta');
				}
			}
		}
	};

	return (
		<KeyboardAvoidingView
			className="flex-1"
			behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
		>
			<ScrollView className="">
				<View className="flex-1 bg-[#F9F9F9]">
					{/* Logo do App */}
					<View className="relative justify-center h-64 mb-6">
						<Image
							source={require('../../assets/images/login/ImagemDeFundo.png')}
							className="absolute shadown top-0 left-0 w-full h-full object-cover"
						/>
						<View className="justify-center items-center">
							<Image
								source={require('../../assets/images/login/LogoDoApp.png')}
							/>
						</View>
					</View>

					<View className="justify-center items-center">
						<Text
							style={{ fontFamily: 'poppins-semi-bold' }}
							className="text-[#767676] mb-3 font-bold text-3xl ml-2"
						>
							Seja Bem-vindo
						</Text>
						<Text className="text-base text-[#767676] mb-2">
							Crie sua conta
						</Text>

						{/* Input de Usuário */}
						<View className="w-4/5">
							<View className="mb-4">
								<View className="flex-row items-center mb-2">
									<Ionicons name="person-sharp" size={20} color={'#5A5A5A'} />
									<Text
										className="ml-1 text-[#5A5A5A] text-base"
										style={{ fontFamily: 'poppins-medium' }}
									>
										Usuário
									</Text>
								</View>

								<Controller
									control={control}
									name="username"
									rules={{
										required: 'Nome de Usuario é obrigatorio',
										minLength: {
											value: 3,
											message:
												'Nome de Usuario deve ter no minimo 3 caracteres',
										},
										maxLength: {
											value: 51,
											message: 'Limite excedido de caracteres',
										},
										pattern: {
											value: /^[A-Za-zÀ-ÖØ-öø-ÿ\s'-]+$/,
											message:
												'O nome só pode conter letras, acentos e espaços. Caracteres especiais são inválidos.',
										},
									}}
									render={({
										field: { value, onChange },
										fieldState: { error },
									}) => (
										<>
											<TextInput
												className="bg-[#EDEDED] border border-[#767676] shadow px-4 py-4 rounded-2xl "
												placeholder="Nome de Usuário"
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

							{/* Input de email */}
							<View className="mb-4">
								<View className="flex-row items-center mb-2">
									<Ionicons name="mail" size={20} color={'#5A5A5A'} />
									<Text
										className=" ml-1 text-[#5A5A5A] text-base"
										style={{ fontFamily: 'poppins-medium' }}
									>
										Email
									</Text>
								</View>

								<Controller
									control={control}
									name="email"
									rules={{
										required: 'Email é obrigatorio',
										minLength: {
											value: 8,
											message: 'Email deve ter no minimo 8 caracteres',
										},
										maxLength: {
											value: 51,
											message: 'Limite excedido de caracteres',
										},
										pattern: {
											value:
												/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/,
											message: 'Email inválido',
										},
									}}
									render={({
										field: { value, onChange },
										fieldState: { error },
									}) => (
										<>
											<TextInput
												className="bg-[#EDEDED] border border-[#767676] shadow px-4 py-4 rounded-2xl "
												placeholder="Digite seu Email"
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

							{/* Input de senha */}
							<View className="mb-4">
								<View className="flex-row items-center mb-2">
									<Ionicons name="lock-closed" size={20} color={'#5A5A5A'} />
									<Text
										className="ml-1 text-[#5A5A5A] text-base"
										style={{ fontFamily: 'poppins-medium' }}
									>
										Senha
									</Text>
								</View>

								<Controller
									control={control}
									name="password"
									rules={{
										required: 'A senha é obrigatória',
										minLength: {
											value: 8,
											message: 'A senha deve ter pelo menos 8 caracteres',
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
										<View className="w-full">
											<View className="flex-row items-center rounded-2xl pr-2 justify-between bg-[#EDEDED] border border-[#5B5B5B]">
												<TextInput
													className="rounded-2xl px-4 py-4 w-11/12"
													placeholder="Digite sua senha"
													value={value}
													onChangeText={onChange}
													secureTextEntry={!showPassword}
													autoCapitalize="none"
												/>
												<TouchableOpacity
													onPress={() => setShowPassword(!showPassword)}
													className="items-center justify-center"
												>
													<Ionicons
														name={showPassword ? 'eye-off' : 'eye'}
														size={24}
														color={'#5A5A5A'}
													/>
												</TouchableOpacity>
											</View>
											{error && (
												<Text
													style={{ fontFamily: 'poppins-semi-bold' }}
													className="text-[#ff375b] text-xs ml-2"
												>
													{error.message}
												</Text>
											)}
										</View>
									)}
								/>
							</View>

							{/* Input de confirmar senha */}
							<View className="mb-4">
								<View className="flex-row items-center mb-2">
									<Ionicons name="lock-closed" size={20} color={'#5A5A5A'} />
									<Text
										className="ml-1 text-[#5A5A5A] text-base"
										style={{ fontFamily: 'poppins-medium' }}
									>
										Confirmar senha
									</Text>
								</View>
								<Controller
									control={control}
									name="confirmPassword"
									rules={{
										required: 'Por favor, repita a senha',
										validate: (value) =>
											value === getValues('password') ||
											'As senhas não correspondem',
										minLength: {
											value: 8,
											message: 'A senha deve ter pelo menos 8 caracteres',
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
										<View className="w-full">
											<View className="flex-row items-center rounded-2xl pr-2 justify-between bg-[#EDEDED] border border-[#5B5B5B]">
												<TextInput
													className="rounded-2xl px-4 py-4 w-11/12"
													placeholder="Digite sua senha novamente"
													value={value}
													onChangeText={onChange}
													secureTextEntry={!showPasswordConfirmation}
													autoCapitalize="none"
												/>
												<TouchableOpacity
													onPress={() =>
														setShowPasswordConfirmation(
															!showPasswordConfirmation,
														)
													}
													className="items-center justify-center"
												>
													<Ionicons
														name={showPasswordConfirmation ? 'eye-off' : 'eye'}
														size={24}
														color={'#5A5A5A'}
													/>
												</TouchableOpacity>
											</View>
											{error && (
												<Text
													style={{ fontFamily: 'poppins-semi-bold' }}
													className="text-[#ff375b] text-xs ml-2"
												>
													{error.message}
												</Text>
											)}
										</View>
									)}
								/>
							</View>
							<TouchableOpacity
								className="bg-[#767676] shadow-lg py-4 mb-4 rounded-2xl"
								onPress={handleSubmit(handleRegisterFormSubmit)}
								disabled={isSubmitting}
							>
								<Text className="text-center text-white text-lg">
									Registrar
								</Text>
							</TouchableOpacity>
						</View>
					</View>

					<View className="flex-row justify-center items-center mb-4">
						<View className="flex-row justify-center items-center">
							<Text className="text-[#767676] ">Já tem uma Conta?</Text>
						</View>
						<TouchableOpacity
							className="shadow text-[#767676]"
							onPress={() => navigation.navigate('LogIn')}
						>
							<Text className="font-semibold text-sm text-[#767676] ml-1">
								Entrar
							</Text>
						</TouchableOpacity>
					</View>
				</View>
			</ScrollView>
		</KeyboardAvoidingView>
	);
}
