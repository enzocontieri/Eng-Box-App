import {View, Text, ScrollView, TouchableOpacity, FlatList, ImageBackground, Image} from 'react-native'
import React, {useState} from 'react'
import 'tailwindcss/tailwind.css';
import {data} from '../../data/dataEspecialist'
import { useNavigation } from '@react-navigation/native';


const CategoryComponent = () => {

    const [engstate, setEngState] = useState<string>()
    const navigation = useNavigation();
    
    const Item = ({ username, description, CategoryIcon, icon, title, useravatar }) => (
        <TouchableOpacity 
            className='items-center shadow' 
            onPress={() => navigation.navigate('UserDetail', { username, description, CategoryIcon, icon, title, useravatar })}
        >
            <View className='h-[180px] w-[90%] bg-[#78CAD2] rounded-2xl mt-5'>
                <ImageBackground 
                    source={CategoryIcon} 
                    className='h-full w-full absolute rounded-2xl overflow-hidden'
                    resizeMode="cover"
                >
                    {/* Icon and Title in the same line */}
                    <View className="flex-row justify-between px-4 pt-3">
                        <Text className='text-[22px] font-semibold text-black rounded p-1'>{title}</Text>
                        <Image 
                            source={icon} 
                            className='h-8 w-8'
                        />
                    </View>
    
                    {/* User profile image in white circle and username */}
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
    
                    {/* Description text */}
                    <View className='px-4'>
                        <Text className='text-[#767676] text-[16px] font-normal'>
                            {description.length > 100 ? `${description.substring(0, 100)}...` : description}
                        </Text>
                    </View>
                </ImageBackground>
            </View>
        </TouchableOpacity>
    );
    
      const filteredData = data.filter(item => item.id === engstate);

  return (
    <View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}  className='mb-5 p-3'>
            <TouchableOpacity className="bg-white h-12 p-4 mx-3 rounded-xl shadow flex-row items-center justify-between" onPress={() => setEngState('Civil')}>
                <Text className="text-base">Civil</Text>
                <Image 
                    source={require('../../assets/icons/iconsFilter/icone-eng.png')}
                    className="w-6 h-6 ml-2"
                />
            </TouchableOpacity>
            <TouchableOpacity className="bg-white h-12 p-4 mx-3 rounded-xl shadow flex-row items-center justify-between" onPress={() => setEngState('Quimica')}>
                <Text>Quimica</Text>
                <Image 
                    source={require('../../assets/icons/iconsFilter/quimico.png')}
                    className="w-6 h-6 ml-2"
                />
            </TouchableOpacity>
            <TouchableOpacity className="bg-white h-12 p-4 mx-3 rounded-xl shadow flex-row items-center justify-between" onPress={() => setEngState('Arquitetura')}>
                <Text>Arquitetura</Text>
                <Image 
                    source={require('../../assets/icons/iconsFilter/projeto-da-casa.png')}
                    className="w-6 h-6 ml-2"
                />
            </TouchableOpacity>
            <TouchableOpacity className="bg-white h-12 p-4 mx-3 rounded-xl shadow flex-row items-center justify-between" onPress={() => setEngState('Eletrica')}>
                <Text>Eletrica</Text>
                <Image 
                    source={require('../../assets/icons/iconsFilter/energia-eletrica.png')}
                    className="w-6 h-6 ml-2"
                />
            </TouchableOpacity>
            <TouchableOpacity className="bg-white h-12 p-4 mx-3 rounded-xl shadow flex-row items-center justify-between" onPress={() => setEngState('Mecanica')}>
                <Text>Mecanica</Text>
                <Image 
                    source={require('../../assets/icons/iconsFilter/engenharia-mecanica.png')}
                    className="w-6 h-6 ml-2"
                />
            </TouchableOpacity>
            <TouchableOpacity className="bg-white h-12 p-4 mx-3 rounded-xl shadow flex-row items-center justify-between" onPress={() => setEngState('Software')}>
                <Text>Software</Text>
                <Image 
                    source={require('../../assets/icons/iconsFilter/engenharia-de-software.png')}
                    className="w-6 h-6 ml-2"
                />
            </TouchableOpacity>
            <TouchableOpacity className="bg-white h-12 p-4 mx-3 rounded-xl shadow flex-row items-center justify-between" onPress={() => setEngState('Automacao')}>
                <Text>Automacao</Text>
                <Image 
                    source={require('../../assets/icons/iconsFilter/linha-de-montagem.png')}
                    className="w-6 h-6 ml-2"
                />
            </TouchableOpacity>
            <TouchableOpacity className="bg-white h-12 p-4 mx-3 rounded-xl shadow flex-row items-center justify-between" onPress={() => setEngState('Producao')}>
                <Text>Producao</Text>
                <Image 
                    source={require('../../assets/icons/iconsFilter/recursos-humanos.png')}
                    className="w-6 h-6 ml-2"
                />
            </TouchableOpacity>
            <TouchableOpacity className="bg-white h-12 p-4 mx-3 rounded-xl shadow flex-row items-center justify-between" onPress={() => setEngState('Computacao')}>
                <Text>Computacao</Text>
                <Image 
                    source={require('../../assets/icons/iconsFilter/computacao-em-nuvem.png')}
                    className="w-6 h-6 ml-2"
                />
            </TouchableOpacity>
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
            />
    </View>
    
  )
}

export default CategoryComponent