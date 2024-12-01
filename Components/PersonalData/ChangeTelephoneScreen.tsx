import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { SafeAreaView, Text, TextInput, View } from 'react-native';
import { getApiAxios } from '../../services/axios';
import { getUserDetails } from '../../utils/session/user-data';
import { userStore } from '../../utils/stores/user';
import GoBackButton from '../GoBackButton';
import HandleSaveButton from './HandleSaveButton';
import SuccessModal from './SuccessModal';

const ChangeTelephoneScreen = () => {
	let user = userStore.getState().user;

	const [isChanged, setIsChanged] = React.useState(false);
	const [modalVisible, setModalVisible] = React.useState(false);

	const {
		control,
		handleSubmit,
		formState: { errors },
		setError,
	} = useForm({
		defaultValues: {
			phoneNumber: user?.telefone ?? '',
		},
	});

	const onSubmit = async (data: { phoneNumber: string }) => {
		try {
			if (!user) {
				user = await getUserDetails();
			} else {
				if (data?.phoneNumber) {
					const api = await getApiAxios();
					const response = await api.put(`/api/usuario/${user.email}`, {
						telefone: data.phoneNumber,
					});

					userStore.getState().setUser({ ...user, telefone: data.phoneNumber });
					setIsChanged(false);
					setModalVisible(true);

					setTimeout(() => setModalVisible(false), 1000);
				}
			}

			setIsChanged(false);
			setModalVisible(true);

			setTimeout(() => setModalVisible(false), 2000);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<SafeAreaView className="flex-1 mt-4">
			<GoBackButton title="Telefone" />
			<Text
				className="text-sm text-[#767676] ml-9 mt-8 mb-2"
				style={{ fontFamily: 'poppins-regular' }}
			>
				Para alterar o telefone, clique aqui
			</Text>
			<View className="flex items-center flex-1">
				<View className="flex-row w-10/12 h-14 items-center border-2 rounded-xl border-[#767676] pl-2">
					<Ionicons name="call" size={30} color={'#76767670'} />

					<Controller
						control={control}
						name="phoneNumber"
						rules={{
							required: 'Número de telefone é obrigatório',
							minLength: {
								value: 10,
								message: 'O número de telefone deve ter pelo menos 10 dígitos',
							},
							maxLength: {
								value: 15,
								message: 'O número de telefone deve ter no máximo 14 dígitos',
							},
							pattern: {
								value: /^\+?[1-9]\d{1,14}$/,
								message: 'Insira um número de telefone válido',
							},
						}}
						render={({ field: { onChange, onBlur, value } }) => (
							<TextInput
								value={value}
								placeholder="Digite o novo telefone"
								keyboardType="phone-pad"
								onChangeText={(text) => {
									onChange(text);
									setIsChanged(text !== user?.telefone);
								}}
								onBlur={onBlur}
								className="w-11/12 h-full pl-2 text-[#767676] text-lg"
								style={{ fontFamily: 'poppins-medium' }}
							/>
						)}
					/>
				</View>
				{errors.phoneNumber && (
					<Text
						className="text-red-500 ml-5 text-justify"
						style={{ fontFamily: 'poppins-regular' }}
					>
						{errors.phoneNumber.message}
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

export default ChangeTelephoneScreen;
