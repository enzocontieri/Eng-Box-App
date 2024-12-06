import React, { useState } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import 'tailwindcss/tailwind.css';
import CategoryCard from '../../Components/category/CategoryCard';
import Search from '../../Components/category/searchBar';
import AddHint from '../../Components/buttons/AddHint';
import HintComponent from '../../Components/HintComponent';

const Explore = ({ navigation }) => {
	const [search, setSearch ] = useState()
	return (
		<SafeAreaView className="bg-[#F8F8F8] h-full">
			<View className='items-start'>
				<View className='m-6'>
					<Text className="font-bold mb-2 text-2xl text-[#4A4A4A]" style={{ fontFamily: 'poppins-medium' }}>Dicas da Comunidade</Text>
				</View>
				<View className='absolute right-8 top-4 justify-between'>
					<AddHint />
				</View>
				<View className=''>
					<HintComponent />
				</View>
			</View>
		</SafeAreaView>
	);
};

export default Explore;
