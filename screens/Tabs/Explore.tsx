import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import {
	SafeAreaView,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from 'react-native';
import 'tailwindcss/tailwind.css';
import CategoryComponent from '../../Components/category';

const Explore = ({ navigation }) => {
	return (
		<SafeAreaView className="bg-[#F8F8F8] h-full">
			<View>
				<View className="mt-8 mb-5">
					<View className="mx-7 mb-3">
						<Text
							className="text-[25px] text-[#4A4A4A]"
							style={{ fontFamily: 'poppins-medium', opacity: 0.6 }}
						>
							Pesquise
						</Text>
					</View>
					<TouchableOpacity className="w-30 h-35 bg-[#FFFFFF] p-5 mr-6 ml-6 rounded-xl flex-row space-x-2 shadow">
						<AntDesign name="search1" size={16} color="#9B9B9B" />
						<TextInput placeholder="Search" className="text-[#9B9B9B] flex-1" />
					</TouchableOpacity>
				</View>
				<View>
					<CategoryComponent />
				</View>
			</View>
		</SafeAreaView>
	);
};

export default Explore;
