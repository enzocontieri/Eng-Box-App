import {View, Text, ScrollView, TouchableOpacity, FlatList, ImageBackground, Image} from 'react-native'
import React, {useState} from 'react'
import 'tailwindcss/tailwind.css';
import {data} from '../../data/dataEspecialist'
import { useNavigation } from '@react-navigation/native';


const CategoryComponent = () => {

    const [engstate, setEngState] = useState<string>()
    const navigation = useNavigation();
    
    const Item = ({ username, description, useravatar, icon, title }) => (
        <TouchableOpacity 
            className='items-center' 
            onPress={() => navigation.navigate('UserDetail', { username, description, useravatar, icon, title })}
        >
            
            <View className='h-[150px] w-[90%] bg-[#78CAD2] rounded-2xl mt-5'>
                <ImageBackground 
                    source={useravatar} 
                    className='h-full w-full rounded-2xl overflow-hidden'
                    resizeMode="cover"
                >
                    
                    <Image 
                        source={icon} 
                        className='h-8 w-8 absolute top-2 right-2'
                    />
                    
                    
                    <View className='flex-1 justify-end items-start px-4 py-3 gap-1'>
                            <Text className='text-[20px] font-bold text-black bg-white rounded p-1 inline-block'>{title}</Text>
                        <Text className='text-white text-[16px] font-semibold'>@{username}</Text>
                        <Text className='text-white text-[10px] font-normal'>{description.length > 100 ? `${description.substring(0, 100)}...` : description}</Text>
                    </View>
                </ImageBackground>
            </View>
        </TouchableOpacity>
    );
      const filteredData = data.filter(item => item.id === engstate);

  return (
    <View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}  className='mb-5'>
            <TouchableOpacity className='bg-[#FFFFFF] w-35 h-35 p-5 mx-2 rounded-xl' onPress={() => setEngState('Civil')}>
                <Text>Civil</Text>
            </TouchableOpacity>
            <TouchableOpacity className='bg-[#FFFFFF] w-35 h-35 p-5 mx-2 rounded-xl' onPress={() => setEngState('Quimica')}>
                <Text>Quimica</Text>
            </TouchableOpacity>
            <TouchableOpacity className='bg-[#FFFFFF] w-35 h-35 p-5 mx-2 rounded-xl' onPress={() => setEngState('Arquitetura')}>
                <Text>Arquitetura</Text>
            </TouchableOpacity>
            <TouchableOpacity className='bg-[#FFFFFF] w-35 h-35 p-5 mx-2 rounded-xl' onPress={() => setEngState('Eletrica')}>
                <Text>Eletrica</Text>
            </TouchableOpacity>
            <TouchableOpacity className='bg-[#FFFFFF] w-35 h-35 p-5 mx-2 rounded-xl' onPress={() => setEngState('Mecanica')}>
                <Text>Mecanica</Text>
            </TouchableOpacity>
            <TouchableOpacity className='bg-[#FFFFFF] w-35 h-35 p-5 mx-2 rounded-xl' onPress={() => setEngState('Software')}>
                <Text>Software</Text>
            </TouchableOpacity>
            <TouchableOpacity className='bg-[#FFFFFF] w-35 h-35 p-5 mx-2 rounded-xl' onPress={() => setEngState('Automacao')}>
                <Text>Automacao</Text>
            </TouchableOpacity>
            <TouchableOpacity className='bg-[#FFFFFF] w-35 h-35 p-5 mx-2 rounded-xl' onPress={() => setEngState('Producao')}>
                <Text>Producao</Text>
            </TouchableOpacity>
            <TouchableOpacity className='bg-[#FFFFFF] w-35 h-35 p-5 mx-2 rounded-xl' onPress={() => setEngState('Computacao')}>
                <Text>Computacao</Text>
            </TouchableOpacity>
        </ScrollView>        
        <FlatList 
                data={filteredData} 
                renderItem={({ item }) => (
                    <Item 
                        username={item.username} 
                        description={item.description} 
                        useravatar={item.useravatar} 
                        icon={item.icon} 
                        title={item.title}
                    />
                )}
                keyExtractor={(item) => item.username || item.id} 
            />
    </View>
    
  )
}

export default CategoryComponent