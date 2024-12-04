import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { SafeAreaView, Text, TextInput, TouchableOpacity, View, } from 'react-native';
import { getApiAxios } from '../../services/axios';
import { userStore } from '../../utils/stores/user';
import GoBackButton from '../GoBackButton';
import HandleSaveButton from './HandleSaveButton';
import SuccessModal from './SuccessModal';

const ChangePasswordScreen = () => {
	const user = userStore.getState().user;

	const {
		control,
		handleSubmit,
		formState: { errors },
		setError,
	} = useForm({
		defaultValues: {
			newPassword: '',
		},
	});

	const [isChanged, setIsChanged] = React.useState(false);
	const [modalVisible, setModalVisible] = React.useState(false);
	const [showNewPassword, setShowNewPassword] = React.useState<boolean>(false);

	const onSubmit = async (data: { newPassword: string }) => {
		try {
			if (user) {
				const api = await getApiAxios();
				const response = await api.put(`/api/usuario/${user.email}`, {
					senha: data.newPassword,
				});
			}

			setIsChanged(false);
			setModalVisible(true);

			setTimeout(() => setModalVisible(false), 2000);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<SafeAreaView className="flex-1 mt-4 justify-center">
			<GoBackButton title="Alterar Senha" />

			<Text className="text-sm text-[#767676] ml-9 mt-8 w-10/12">
				Para alterar sua senha, informe a nova senha desejada.
			</Text>

			<View className="flex items-center flex-1">
				<Text
					className="text-lg text-[#767676] self-start ml-9 mt-6"
					style={{ fontFamily: 'poppins-medium' }}
				>
					Nova senha
				</Text>
				<View className="flex-row w-10/12 h-14 items-center border-2 rounded-xl border-[#767676] pl-2 mt-2">
					<TouchableOpacity
						onPress={() => setShowNewPassword(!showNewPassword)}
						className="h-full items-center justify-center"
					>
						<Ionicons
							name={showNewPassword ? 'eye-off' : 'eye'}
							size={24}
							color={'#76767670'}
						/>
					</TouchableOpacity>
					<Controller
						control={control}
						name="newPassword"
						rules={{
							required: 'Nova senha é obrigatória',
							minLength: {
								value: 8,
								message: 'A nova senha deve ter pelo menos 8 caracteres',
							},
							maxLength: {
								value: 51,
								message: 'A nova senha deve ter no máximo 51 caracteres',
							},
						}}
						render={({ field: { onChange, onBlur, value } }) => (
							<TextInput
								value={value}
								placeholder="Nova senha"
								secureTextEntry={!showNewPassword}
								onChangeText={(text) => {
									onChange(text);
									setIsChanged(true);
								}}
								onBlur={onBlur}
								className="w-full h-full pl-2 text-[#767676] text-base"
								style={{ fontFamily: 'poppins-medium' }}
							/>
						)}
					/>
				</View>
				{errors.newPassword && (
					<Text
						className="text-red-500 text-justify w-10/12"
						style={{ fontFamily: 'poppins-regular' }}
					>
						{errors.newPassword.message}
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

export default ChangePasswordScreen;
