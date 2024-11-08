import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { removeRememberMeData } from '../../utils/async-storage/user-data';

const MoreOptions = () => {
	const navigation = useNavigation();

	const handleLogoutApp = async () => {
		await removeRememberMeData();
		navigation.navigate('Wellcome');
	};

	return (
		<SafeAreaView>
			<View className="flex items-center justify-center ">
				<View className="bg-white w-[80%] h-32 my-2 rounded-md shadow flex-row items-center mt-[25%]"></View>

				<TouchableOpacity
					onPress={() => navigation.goBack()}
					className="absolute top-10 left-5 bg-white p-2 rounded-full"
				>
					<Ionicons name="chevron-back" size={18} color="#767676" />
				</TouchableOpacity>

				<View className="top-16 w-[90%] items-center gap-5">
					<TouchableOpacity
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
					</TouchableOpacity>

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
						onPress={() => navigation.navigate('Info')}
					>
						<Ionicons name="alert-circle" size={30} color="#767676" />

						<View className="flex-1 items-center">
							<Text
								className=" text-[#767676] font-semibold text-[20px]"
								style={{ fontFamily: 'poppins-medium' }}
							>
								Info
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
