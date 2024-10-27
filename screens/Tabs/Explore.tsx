import React, { useState } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import 'tailwindcss/tailwind.css';
import CategoryCard from '../../Components/category/CategoryCard';
import Search from '../../Components/category/searchBar';

const Explore = ({ navigation }) => {
	const [search, setSearch ] = useState()
	return (
		<SafeAreaView className="bg-[#F8F8F8] h-full">
			<View>
				<View>
					<CategoryCard />
				</View>
			</View>
		</SafeAreaView>
	);
};

export default Explore;
