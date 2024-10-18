import { View, Text, ScrollView, TouchableOpacity, FlatList, ImageBackground, Image } from 'react-native';
import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';
import { data } from '../../data/dataEspecialist';
import { useNavigation } from '@react-navigation/native';

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
    const navigation = useNavigation();

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
                        <Text className='text-[22px] font-semibold text-black rounded p-1'>{title}</Text>
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
                        <Text className='text-black text-[20px] font-medium'>@{username}</Text>
                    </View>

                    <View className='px-4'>
                        <Text className='text-[#767676] text-[16px] font-normal'>
                            {description.length > 100 ? `${description.substring(0, 100)}...` : description}
                        </Text>
                    </View>
                </ImageBackground>
            </View>
        </TouchableOpacity>
    );

    // Filtrar pelas categorias selecionadas
    const filteredData = data.filter(item => selectedCategories.includes(item.id));

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
            <ScrollView showsVerticalScrollIndicator={false}>

                <ScrollView horizontal showsHorizontalScrollIndicator={false} className='mt-2 ml-2'>
                    {categories.map((category, index) => (
                        <TouchableOpacity
                            key={index}
                            className={`bg-white h-12 p-4 mx-3 my-2 rounded-xl shadow flex-row items-center justify-between ${selectedCategories.includes(category.label) ? 'bg-[#78CAD2]' : ''}`}
                            onPress={() => toggleCategory(category.label)}
                        >
                            <Text className={`${selectedCategories.includes(category.label) ? 'text-white' : 'text-black'}`}>{category.label}</Text>
                            <Image source={category.icon} className="w-6 h-6 ml-2" />
                        </TouchableOpacity>
                    ))}
                </ScrollView>
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
                    keyExtractor={(item) => item.username || item.id}
                    scrollEnabled={false}
                    contentContainerStyle={{ paddingBottom: 200 }}
                />
            </ScrollView>
        </View>
    );
}

export default CategoryComponent;
