import { View, Text, ScrollView, TouchableOpacity, FlatList, ImageBackground, Image, ActivityIndicator } from 'react-native';
import React, { useState, useEffect } from 'react';
import 'tailwindcss/tailwind.css';
import { data } from '../../data/dataEspecialist';
import { useNavigation } from '@react-navigation/native';
import Search from './searchBar';
import { SearchBar } from '@rneui/themed';
import axios from 'axios';
import AddHint from '../Hint/AddHint';
import Icon from 'react-native-vector-icons/Ionicons';

const categories = [
    { label: 'Civil', icon: require('../../assets/icons/iconsFilter/icone-eng.png') },
    { label: 'Quimica', icon: require('../../assets/icons/iconsFilter/quimico.png') },
    { label: 'Arquitetura', icon: require('../../assets/icons/iconsFilter/projeto-da-casa.png') },
    { label: 'Eletrica', icon: require('../../assets/icons/iconsFilter/energia-eletrica.png') },
    { label: 'Mecanica', icon: require('../../assets/icons/iconsFilter/engenharia-mecanica.png') },
    { label: 'Software', icon: require('../../assets/icons/iconsFilter/engenharia-de-software.png') },
    { label: 'Automacao', icon: require('../../assets/icons/iconsFilter/linha-de-montagem.png') },
    { label: 'Producao', icon: require('../../assets/icons/iconsFilter/recursos-humanos.png') },
    { label: 'Computacao', icon: require('../../assets/icons/iconsFilter/computacao-em-nuvem.png') },
];


const CategoryComponent = () => {
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(true)
    const [cards, setCards] = useState(false)
    const [posts, setPosts] = useState<Post[]>([]);
    const navigation = useNavigation();


    useEffect(() => {
        const timeout = setTimeout(() => {
            setLoading(false);
        }, 500);
        return () => clearTimeout(timeout);
    }, [loading]);
    
    
    const updateSearch = (search) => {
        setSearch(search);
      };
      

    const Item = ({ username, description, CategoryIcon, icon, title, useravatar }) => (
        <TouchableOpacity
            className='items-center shadow'
            onPress={() => navigation.navigate('UserDetail', { username, description, CategoryIcon, icon, title, useravatar })}
        >
            <View className='h-[180px] w-[90%] bg-white rounded-2xl mt-5'>
                <ImageBackground
                    source={CategoryIcon}
                    className='h-full w-full absolute rounded-2xl overflow-hidden'
                    resizeMode="cover"
                >
                    <View className="flex-row justify-between px-4 pt-3">
                        <Text className='text-[22px] font-semibold text-black rounded-xl p-2 bg-white' style={{ fontFamily: 'poppins-medium' }}>{title}</Text>
                        <Image
                            source={icon}
                            className='h-8 w-8'
                        />
                    </View>

                    <View className='flex-row items-center px-4 py-3'>
                        <View className="bg-white rounded-full h-12 w-12 overflow-hidden mr-3">
                            <Image
                                source={useravatar}
                                className='h-full w-full'
                                resizeMode="cover"
                            />
                        </View>
                        <Text className='text-black text-[20px] font-medium rounded-lg p-1 bg-white' style={{ fontFamily: 'poppins-medium' }}>@{username}</Text>
                    </View>

                    <View className='px-4 bg-white rounded-md  py-3'>
                        <Text className='text-[#767676] text-[16px] font-normal' style={{ fontFamily: 'poppins-medium' }}>
                            {description.length > 65 ? `${description.substring(0, 65)}...` : description}
                        </Text>
                    </View>
                </ImageBackground>
            </View>
        </TouchableOpacity>
    );

    
    const filteredData = data.filter(item => {
        // Verificar se o item atende à busca ou às categorias selecionadas
        const matchesSearch = search
            ? item.title.toLowerCase().includes(search.toLowerCase())
            : true; 
        const matchesCategory = selectedCategories.length
            ? selectedCategories.includes(item.id)
            : true;
        return matchesSearch && matchesCategory;
    });
    


    // Função para alternar entre categorias
    const toggleCategory = (category) => {
        setSelectedCategories(prevSelected => {
            if (prevSelected.includes(category)) {
                return prevSelected.filter(item => item !== category);
            } else {
                return [...prevSelected, category];
            }
        });
    };

    return (
        <View>
            <View className="mt-8 mb-2">
					<View className="mx-7">
						<View className='flex-row justify-between'>
                            <Text
                                className="text-[25px] text-[#4A4A4A]"
                                style={{ fontFamily: 'poppins-medium', opacity: 0.6 }}
                            >
                                Pesquise
                            </Text>
                            <Icon name="people-outline" size={24} color="#000" onPress={() => {navigation.navigate('HintComunity')}}/>
                        </View>
					    <SearchBar 
                        platform='ios'
                        placeholder="Digite Aqui"
                        cancelButtonTitle=""
                        placeholderTextColor="#000"
                        onChangeText={updateSearch}
                        value={search}
                        containerStyle={{
                            backgroundColor: "#F8F8F8",
                        }} 
                        inputContainerStyle={{
                            backgroundColor: "#FFFFFF",
                        }}
                        clearIcon={{
                            name: 'trash',
                            type: 'ionicon',
                            color: 'red',
                            size: 20,
                        }}
                        searchIcon={{
                            name: 'search',
                            type: 'ionicon',
                            color: '#4A4A4A',
                            size: 20,
                        }}
                        />
                        
					</View>
				</View>
            <View className='mx-7 mb-3'>
                <Text className='text-base text-[#4A4A4A]' style={{ fontFamily: 'poppins-medium', opacity: 0.6 }}>Filtre Por Categoria</Text>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} className='ml-2'>
                {categories.map((category, index) => (
                    <TouchableOpacity
                        key={index}
                        className={`bg-white h-13 mb-2 p-4 mx-3 rounded-xl shadow flex-row items-center justify-between ${selectedCategories.includes(category.label) ? 'bg-[#78CAD2]' : ''}`}
                        onPress={() => {toggleCategory(category.label); setLoading(true); setCards(true) }}
                    >
                        <Text className={`${selectedCategories.includes(category.label) ? 'text-white' : 'text-black'}`} style={{ fontFamily: 'poppins-medium' }}>{category.label}</Text>
                        <Image source={category.icon} className="w-6 h-6 ml-2" />
                    </TouchableOpacity>
                ))}
            </ScrollView>
            {cards ? (
                <>
                <ScrollView showsVerticalScrollIndicator={false}>
                {loading ? (
                    <ActivityIndicator className="my-48" size="large" color="#4A4A4A" />
                ) : (
                    <FlatList
                        data={filteredData}
                        renderItem={({ item }) => (
                            <Item
                                username={item.username}
                                description={item.description}
                                CategoryIcon={item.CategoryIcon}
                                icon={item.icon}
                                title={item.title}
                                useravatar={item.useravatar}
                            />
                        )}
                        keyExtractor={(item) => item.id}
                        scrollEnabled={false}
                        contentContainerStyle={{ paddingBottom: 800 }}
                    />
                )}
                </ScrollView>
                </>
            ) : (
                <>
                    <View className='items-center justify-center flex'>
                        <Text className='text-base mt-32 text-[#4A4A4A]' style={{ fontFamily: 'poppins-medium', opacity: 0.6 }}>Nenhum Resultado</Text>
                    </View>
                    {console.log(cards)}
                </>
            )}
            
        </View>
    );
}

export default CategoryComponent;
