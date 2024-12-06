import React, { useState } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import 'tailwindcss/tailwind.css';
import CategoryCard from '../../Components/category/CategoryCard';
import Search from '../../Components/category/searchBar';
import AddHint from '../../Components/Hint/AddHint';
import HintComponent from '../../Components/Hint/HintComponent';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../utils/types/navigation';

type NavigationProp = StackNavigationProp<RootStackParamList>;

const Explore = () => {
	const navigation = useNavigation<NavigationProp>();
	const [search, setSearch ] = useState()
	return (
		<SafeAreaView className="bg-[#F8F8F8] h-full">
			<CategoryCard />
		</SafeAreaView>
	);
};

export default Explore;
