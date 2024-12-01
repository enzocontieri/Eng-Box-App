import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import GoBackButton from '../../Components/GoBackButton';
import { removeRememberMeData } from '../../utils/async-storage/user-data';
import { removeToken } from '../../utils/session/manager';
import { userStore } from '../../utils/stores/user';
const MoreOptions = () => {
	const navigation = useNavigation();

	const handleLogoutApp = async () => {
		await removeRememberMeData();
		await removeToken();
		userStore.getState().clearUser();
		navigation.navigate('Wellcome');
	};

	return (
		<SafeAreaView>
			<GoBackButton title="Opções" />
			<View className="flex items-center justify-center ">
				{/* <View className="bg-white w-[80%] h-32 my-2 rounded-md shadow flex-row items-center mt-[15%]"></View> */}

				<View className="top-16 w-[90%] items-center gap-5">
					{/* <TouchableOpacity
						className="bg-white w-[90%] h-12 my-2 rounded-md shadow flex-row items-center justify-between px-4"
						onPress={() => navigation.navigate('Notifications')}
					>
						<Ionicons name="notifications-outline" size={30} color="#767676" />

						<View className="flex-1 items-center">
							<Text
								className=" text-[#767676] font-semibold text-[20px]"
								style={{ fontFamily: 'poppins-medium' }}
							>
								Notificações
							</Text>
						</View>

						<Ionicons name="chevron-forward" size={30} color="#767676" />
					</TouchableOpacity> */}

					<TouchableOpacity
						className="bg-white w-[90%] h-12 my-2 rounded-md shadow flex-row items-center justify-between px-4"
						onPress={() => navigation.navigate('PersonalData')}
					>
						<Ionicons name="person" size={30} color="#767676" />

						<View className="flex-1 items-center">
							<Text
								className=" text-[#767676] font-semibold text-[20px]"
								style={{ fontFamily: 'poppins-medium' }}
							>
								Dados Pessoais
							</Text>
						</View>

						<Ionicons name="chevron-forward" size={30} color="#767676" />
					</TouchableOpacity>

					<TouchableOpacity
						className="bg-white w-[90%] h-12 my-2 rounded-md shadow flex-row items-center justify-between px-4"
						onPress={() => navigation.navigate('Sobre')}
					>
						<Ionicons name="alert-circle" size={30} color="#767676" />

						<View className="flex-1 items-center">
							<Text
								className=" text-[#767676] font-semibold text-[20px]"
								style={{ fontFamily: 'poppins-medium' }}
							>
								Sobre
							</Text>
						</View>

						<Ionicons name="chevron-forward" size={30} color="#767676" />
					</TouchableOpacity>

					<TouchableOpacity
						className="bg-white w-[90%] h-12 my-2 rounded-md shadow flex-row items-center justify-between px-4"
						onPress={() => navigation.navigate('Help')}
					>
						<Ionicons name="help-circle-outline" size={30} color="#767676" />

						<View className="flex-1 items-center">
							<Text
								className=" text-[#767676] font-semibold text-[20px]"
								style={{ fontFamily: 'poppins-medium' }}
							>
								Ajuda
							</Text>
						</View>

						<Ionicons name="chevron-forward" size={30} color="#767676" />
					</TouchableOpacity>

					<TouchableOpacity
						className="bg-white w-[90%] h-12 my-2 rounded-md shadow flex-row items-center justify-between px-4"
						onPress={handleLogoutApp}
					>
						<Ionicons name="exit-outline" size={30} color="#767676" />

						<View className="flex-1 items-center">
							<Text
								className=" text-[#767676] font-semibold text-[20px]"
								style={{ fontFamily: 'poppins-medium' }}
							>
								Sair
							</Text>
						</View>

						<Ionicons name="chevron-forward" size={30} color="#767676" />
					</TouchableOpacity>
				</View>
			</View>
		</SafeAreaView>
	);
};

export default MoreOptions;
