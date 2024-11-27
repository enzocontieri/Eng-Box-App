import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { SafeAreaView, Text, TextInput, View } from 'react-native';
import { userStore } from '../../utils/stores/user';
import GoBackButton from '../GoBackButton';
import { useUser } from '../profile/UserContext';
import HandleSaveButton from './HandleSaveButton';
import SuccessModal from './SuccessModal';

const ChangeEmailScreen = () => {
	const user = userStore.getState().user;

	const {
		control,
		handleSubmit,
		formState: { errors },
		setError,
	} = useForm({
		defaultValues: {
			email: user?.email ?? '',
		},
	});

	const [isChanged, setIsChanged] = React.useState(false);
	const [modalVisible, setModalVisible] = React.useState(false);

	const isEmailTaken = async (email: string) => {
		const response = await fetch(``);
		const data = await response.json();
		return data.isTaken;
	};

	const onSubmit = async (data: { email: string }) => {
		const emailInUse = await isEmailTaken(data.email);

		if (emailInUse) {
			setError('email', {
				type: 'manual',
				message: 'Este email já está em uso por outro usuário',
			});
			return;
		}

		userStore.getState().setUser({
			...user,
			email: data.email,
			nome: user?.nome ?? '',
			fotoUsu: user?.fotoUsu ?? null,
			isMonitor: user?.isMonitor ?? false,
			nivelConsciencia: user?.nivelConsciencia ?? 0,
			telefone: user?.telefone ?? '',
		});
		setIsChanged(false);
		setModalVisible(true);

		setTimeout(() => setModalVisible(false), 2000);
	};

	return (
		<SafeAreaView className="flex-1 mt-4">
			<GoBackButton title="Email" />
			<Text
				className="text-sm text-[#1F3B4D] ml-9 mt-8 mb-2"
				style={{ fontFamily: 'poppins-regular' }}
			>
				Para alterar o email, clique aqui
			</Text>
			<View className="flex items-center flex-1">
				<View className="flex-row w-10/12 h-14 items-center border-2 rounded-xl border-[#B0BEC5] pl-2">
					<Ionicons name="mail" size={30} color={'#B0BEC5'} />
					<Controller
						control={control}
						name="email"
						rules={{
							required: 'Email é obrigatório',
							minLength: {
								value: 3,
								message: 'O email deve ter pelo menos três letras',
							},
							maxLength: {
								value: 51,
								message: 'O email deve ter no máximo 51 letras',
							},
							pattern: {
								value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
								message: 'Formato de email inválido',
							},
						}}
						render={({ field: { onChange, onBlur, value } }) => (
							<TextInput
								value={value}
								placeholder="Digite o email"
								onChangeText={(text) => {
									onChange(text);
									setIsChanged(text !== user?.email);
								}}
								onBlur={onBlur}
								className="w-11/12 h-full pl-2 text-[#B0B3C5] text-base"
								style={{ fontFamily: 'poppins-medium' }}
							/>
						)}
					/>
				</View>

				{errors.email && (
					<Text
						className="text-red-500 text-justify"
						style={{ fontFamily: 'poppins-regular' }}
					>
						{errors.email.message}
					</Text>
				)}

				<HandleSaveButton
					onPress={handleSubmit(onSubmit)}
					isChanged={isChanged}
				/>
			</View>

			<SuccessModal
				visible={modalVisible}
				onClose={() => setModalVisible(false)}
			/>
		</SafeAreaView>
	);
};

export default ChangeEmailScreen;
