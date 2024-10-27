import { AntDesign } from '@expo/vector-icons';
import { TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

const Search = () => {
	const [search, setSearch ] = useState<string[]>()
	return (
		<TouchableOpacity className="w-30 h-35 bg-[#FFFFFF] p-5 mr-6 ml-6 rounded-xl flex-row space-x-2 shadow items-center">
			<AntDesign name="search1" size={16} color="#9B9B9B" />
			<TextInput 
			placeholder="Search" 
			className="text-[#9B9B9B] flex-1" 
			onChangeText={setSearch} 
			value={search}
			/>
			
		</TouchableOpacity>
	);
};

export default Search;
