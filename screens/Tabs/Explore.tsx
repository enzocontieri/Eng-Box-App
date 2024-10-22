import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import 'tailwindcss/tailwind.css';
import CategoryComponent from '../../Components/category';
import Search from '../../Components/search';

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
					<Search />
				</View>
				<View>
					<CategoryComponent />
				</View>
			</View>
		</SafeAreaView>
	);
};

export default Explore;
