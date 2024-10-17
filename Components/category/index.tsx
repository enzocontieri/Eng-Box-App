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