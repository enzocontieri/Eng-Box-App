import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import GoBackButton from '../../Components/GoBackButton';
import { removeRememberMeData } from '../../utils/async-storage/user-data';
import { ConsumerOptions } from '../../utils/enums/consumer';
import { getConsumerLevel } from '../../utils/getConsumerLevel';
import { getLevesTree } from '../../utils/getLevelsTree';
import { removeToken } from '../../utils/session/manager';
import { getUserDetails } from '../../utils/session/user-data';
import { userStore } from '../../utils/stores/user';
import { UserResponse } from '../../utils/types/user-response';
const MoreOptions = () => {
	const navigation = useNavigation();
	const [userProfile, setUserProfile] = useState<UserResponse | null>(null);
	const [consumerLevel, setConsumerLevel] = useState<ConsumerOptions | null>(
		null,
	);

	const handleLogoutApp = async () => {
		await removeRememberMeData();
		await removeToken();
		userStore.getState().clearUser();
		navigation.navigate('Wellcome');
	};

	useFocusEffect(
		React.useCallback(() => {
			// Do something when the screen is focused
			(async () => {
				const user = await getUserDetails();
				setUserProfile(user);
				const consumer = getConsumerLevel(user?.nivelConsciencia);
				setConsumerLevel(consumer);
			})();
			return () => {
				// Do something when the screen is unfocused
				// Useful for cleanup functions
			};
		}, []),
	);

	return (
		<SafeAreaView className='flex-1'>
			<ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom: 300 }} className="flex-1">

				<GoBackButton title="Opções" />
				<View className="flex items-center justify-center ">
					<View className="bg-white w-80 h-32 my-2 rounded-md shadow flex-row items-center justify-center mt-[15%]">
						<LinearGradient
							colors={['#A7D9A9', '#FFFFFF']}
							start={{ x: 0, y: 0 }}
							end={{ x: 0, y: 1 }}
							className="w-full h-3 absolute top-0 left-0 rounded-t-md"
						/>
						<View className="w-28 h-24 justify-center items-center">
							<Image
								source={
									getLevesTree(consumerLevel ?? ConsumerOptions.beginner)
										?.imageSource
								}
								className="w-full h-full"
								resizeMode="contain"
							/>
						</View>

						<View className="flex-1">
							<View className="flex flex-row items-center">
								<Text
									className="text-primaryGreen text-[12px] font-semibold"
									style={{ fontFamily: 'poppins-medium' }}
								>
									{consumerLevel}
								</Text>
								<Image
									source={require('@assets/icons/user-pages-icons/user-info/level-icon-2.png')}
									className="w-6 h-6 mr-2"
								/>
							</View>
							<Text
								className="text-[10px] flex-wrap"
								style={{
									fontFamily: 'poppins-medium',
								}}
							>
								{
									getLevesTree(consumerLevel ?? ConsumerOptions.beginner)
										?.description
								}
							</Text>
						</View>
					</View>

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
			</ScrollView>
		</SafeAreaView>
	);
};

export default MoreOptions;
