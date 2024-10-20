import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';

const Help = () => {
    const [isExpanded, setIsExpanded] = useState(false); 
    const [isExpandedQuest1, setIsExpandedQuest1] = useState(false);
    const [isExpandedQuest2, setIsExpandedQuest2] = useState(false);
    const [isExpandedQuest3, setIsExpandedQuest3] = useState(false);
    const [isExpandedQuest4, setIsExpandedQuest4] = useState(false);
    // Função para alternar entre expandido e recolhido
    const toggleExpansion = () => {
      setIsExpanded(!isExpanded);
    };
    
    const toggleExpansionQuest1 = () => {
        setIsExpandedQuest1(!isExpandedQuest1);
      };
    const toggleExpansionQuest2 = () => {
        setIsExpandedQuest2(!isExpandedQuest2);
      };
    const toggleExpansionQuest3 = () => {
        setIsExpandedQuest3(!isExpandedQuest3);
      };
    const toggleExpansionQuest4 = () => {
        setIsExpandedQuest4(!isExpandedQuest4);
      };


    return (
        <ScrollView contentContainerStyle={{ paddingBottom: 800, paddingTop: 20,  }}>

      <View className='items-center justify-center mt-16 '>
        <Text className='text-[22px] font-semibold text-[#767676] rounded p-1' style={{ fontFamily: 'poppins-medium' }}>Guia de Árvores</Text>
  
        
        <TouchableOpacity
          onPress={toggleExpansion}
          className='bg-[#D9D9D9] h-[50px] w-[90%] rounded-md justify-between items-center flex-row px-4 mt-4'
        >
          <Text className='text-[14px] font-semibold text-black' style={{ fontFamily: 'poppins-medium' }}>Guia de Perfil Consumidor Verde</Text>
          <Ionicons name={isExpanded ? 'chevron-up' : 'chevron-down'} size={20} color="black" />
        </TouchableOpacity>
  
        
        {isExpanded && (
          <View className='bg-[#D9D9D9] w-[90%] mt-2 p-3 rounded-md'>
            <Text className='text-[14px] text-black' style={{ fontFamily: 'poppins-medium' }}>
              O que são essas árvores ?
            </Text>
            <Text className='mx-1 my-1 text-[#767676] text-[11px] font-normal' style={{ fontFamily: 'poppins-medium' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</Text>
            <ScrollView>
                <View className='flex items-center justify-center'>
                    
                    <View className='bg-white w-[97%] h-32 my-2 rounded-md shadow flex-row items-center relative'>
                        
                        <Image 
                            source={require('../../assets/icons/IconsLevel/arvore1.1.png')}  
                            className='h-[100px] w-[110px] mx-1 '
                                
                        />
                        
                        
                        <View className="absolute top-3 left-32 bg-black rounded-md px-2"> 
                            <Text className='text-[#fcff31] text-[13px] font-semibold' style={{ fontFamily: 'poppins-medium' }}> 
                                Consumidor Imprudente
                            </Text>
                        </View>

                        
                        <View className='flex-1 ml-2'>
                            
                            <Text className='text-[10px] mt-4 text-[#767676] break-words w-[160px]' style={{ fontFamily: 'poppins-medium' }}>
                            Seus hábitos de consumo acabam que por prejudicar a natureza em graus bem negativos.  
                            </Text>
                        </View>

                    </View>
                </View>
                <View className='flex items-center justify-center'>
                    
                    <View className='bg-white w-[97%] h-32 my-2 rounded-md shadow flex-row items-center relative'>
                        
                        <Image 
                            source={require('../../assets/icons/IconsLevel/arvore0.png')}  
                            className='h-[180px] w-[110px] mx-1 '
                                
                        />
                        
                        
                        <Text className=' absolute top-3 left-32 text-[#50B454] text-[14px] font-semibold' style={{ fontFamily: 'poppins-medium' }}>
                                Consumidor Iniciante
                            </Text>

                        
                        <View className='flex-1 ml-2'>
                            
                            <Text className='text-[10px] mt-3 text-[#767676] break-words w-[160px]' style={{ fontFamily: 'poppins-medium' }}>
                            Você ainda não têm muita noção de gasto e consumo, ainda está desenvolvendo seus hábitos!  
                            </Text>
                        </View>

                        
                        <TouchableOpacity className='absolute top-3 right-2'>
                            <Image source={require('../../assets/icons/user-pages-icons/user-info/level-icon.png')}/>
                        </TouchableOpacity>
                    </View>
                </View>
                <View className='flex items-center justify-center'>
                    
                    <View className='bg-white w-[97%] h-32 my-2 rounded-md shadow flex-row items-center relative'>
                        
                        <Image 
                            source={require('../../assets/icons/IconsLevel/arvore1.png')}  
                            className='h-[120px] w-[110px] mx-1 '
                                
                        />
                        
                        
                        <Text className=' absolute top-3 left-32 text-[#50B454] text-[14px] font-semibold' style={{ fontFamily: 'poppins-medium' }}>
                                Consumidor Verde
                            </Text>

                        
                        <View className='flex-1 ml-2'>
                            
                            <Text className='text-[10px] mt-3 text-[#767676] break-words w-[160px]' style={{ fontFamily: 'poppins-medium' }}>
                            Você é alguém com noções de impacto ambiental, que toma decisões de consumo cautelosas
                            </Text>
                        </View>

                        
                        <TouchableOpacity className='absolute top-3 right-2'>
                            <Image source={require('../../assets/icons/user-pages-icons/user-info/level-icon.png')}/>
                        </TouchableOpacity>
                    </View>
                </View>
                <View className='flex items-center justify-center'>
                    
                    <View className='bg-white w-[97%] h-32 my-2 rounded-md shadow flex-row items-center relative'>
                        
                        <Image 
                            source={require('../../assets/icons/IconsLevel/arvore2.png')}  
                            className='h-[120px] w-[110px] mx-1 '
                                
                        />
                        
                        
                        <Text className=' absolute top-3 left-32 text-[#50B454] text-[14px] font-semibold' style={{ fontFamily: 'poppins-medium' }}>
                                Consumidor Responsá...
                            </Text>

                        
                        <View className='flex-1 ml-2'>
                            
                            <Text className='text-[10px] mt-3 text-[#767676] break-words w-[160px]' style={{ fontFamily: 'poppins-medium' }}>
                            Muitas de suas escolhas levam em consideração o reaproveitamento de materiais e descarte adequado!  
                            </Text>
                        </View>

                        
                        <TouchableOpacity className='absolute top-3 right-2'>
                            <Image source={require('../../assets/icons/user-pages-icons/user-info/level-icon.png')}/>
                        </TouchableOpacity>
                    </View>
                </View>
                <View className='flex items-center justify-center'>
                    
                    <View className='bg-white w-[97%] h-32 my-2 rounded-md shadow flex-row items-center relative'>
                        
                        <Image 
                            source={require('../../assets/icons/IconsLevel/arvore3.png')}  
                            className='h-[120px] w-[120px] '
                                
                        />
                        
                        
                        <Text className=' absolute top-3 left-32 text-[#50B454] text-[14px] font-semibold' style={{ fontFamily: 'poppins-medium' }}>
                                Consumidor Expert
                            </Text>

                        
                        <View className='flex-1 ml-2'>
                            
                            <Text className='text-[10px] mt-3 text-[#767676] break-words w-[160px]' style={{ fontFamily: 'poppins-medium' }}>
                            Você é um exemplo de consciência ambiental, nunca falhando com a sustentabilidade ecológica em sua vida.  
                            </Text>
                        </View>

                        
                        <TouchableOpacity className='absolute top-3 right-2'>
                            <Image source={require('../../assets/icons/user-pages-icons/user-info/level-icon.png')}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>

          </View>
        )}
  
        <Text className='text-[18px] font-semibold text-[#767676] rounded p-1 mt-16' style={{ fontFamily: 'poppins-medium' }}>Perguntas Frequentes</Text>
            <View className='items-center'>
                <TouchableOpacity
                onPress={toggleExpansionQuest1}
                className='bg-[#D9D9D9] h-[50px] w-[90%] rounded-md justify-between items-center flex-row px-4 mt-4'
                >
                <Text className='text-[14px] font-semibold text-black' style={{ fontFamily: 'poppins-medium' }}>
                    O que são essas árvores ?
                </Text>
                <Ionicons name={isExpandedQuest1 ? 'chevron-up' : 'chevron-down'} size={20} color="black" />
                </TouchableOpacity>

                
                {isExpandedQuest1 && (
                <View className='bg-[#D9D9D9] w-[90%] mt-2 p-3 rounded-md'>
                    <Text className='text-[14px] text-black' style={{ fontFamily: 'poppins-medium' }}>
                    Lorem Ipsum
                    </Text>
                    <Text className='mx-1 my-1 text-[#767676] text-[11px] font-normal' style={{ fontFamily: 'poppins-medium' }}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                    </Text>
                    
                </View>
                )}
            </View>
            <View className='items-center'>
                <TouchableOpacity
                onPress={toggleExpansionQuest2}
                className='bg-[#D9D9D9] h-[50px] w-[90%] rounded-md justify-between items-center flex-row px-4 mt-4'
                >
                <Text className='text-[14px] font-semibold text-black' style={{ fontFamily: 'poppins-medium' }}>
                    O que são essas árvores ?
                </Text>
                <Ionicons name={isExpandedQuest2 ? 'chevron-up' : 'chevron-down'} size={20} color="black" />
                </TouchableOpacity>
                {isExpandedQuest2 && (
                <View className='bg-[#D9D9D9] w-[90%] mt-2 p-3 rounded-md'>
                    <Text className='text-[14px] text-black' style={{ fontFamily: 'poppins-medium' }}>
                    Lorem Ipsum
                    </Text>
                    <Text className='mx-1 my-1 text-[#767676] text-[11px] font-normal' style={{ fontFamily: 'poppins-medium' }}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                    </Text>
                </View>
                )}
            </View>
            <View className='items-center'>
                <TouchableOpacity
                onPress={toggleExpansionQuest3}
                className='bg-[#D9D9D9] h-[50px] w-[90%] rounded-md justify-between items-center flex-row px-4 mt-4'
                >
                <Text className='text-[14px] font-semibold text-black' style={{ fontFamily: 'poppins-medium' }}>
                    O que são essas árvores ?
                </Text>
                <Ionicons name={isExpandedQuest3 ? 'chevron-up' : 'chevron-down'} size={20} color="black" />
                </TouchableOpacity>
                {isExpandedQuest3 && (
                <View className='bg-[#D9D9D9] w-[90%] mt-2 p-3 rounded-md'>
                    <Text className='text-[14px] text-black' style={{ fontFamily: 'poppins-medium' }}>
                    Lorem Ipsum
                    </Text>
                    <Text className='mx-1 my-1 text-[#767676] text-[11px] font-normal' style={{ fontFamily: 'poppins-medium' }}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                    </Text>
                </View>
                )}
            </View>
            <View className='items-center'>
                <TouchableOpacity
                onPress={toggleExpansionQuest4}
                className='bg-[#D9D9D9] h-[50px] w-[90%] rounded-md justify-between items-center flex-row px-4 mt-4'
                >
                <Text className='text-[14px] font-semibold text-black' style={{ fontFamily: 'poppins-medium' }}>
                    O que são essas árvores ?
                </Text>
                <Ionicons name={isExpandedQuest4 ? 'chevron-up' : 'chevron-down'} size={20} color="black" />
                </TouchableOpacity>
                {isExpandedQuest4 && (
                <View className='bg-[#D9D9D9] w-[90%] mt-2 p-3 rounded-md'>
                    <Text className='text-[14px] text-black' style={{ fontFamily: 'poppins-medium' }}>
                    Lorem Ipsum
                    </Text>
                    <Text className='mx-1 my-1 text-[#767676] text-[11px] font-normal' style={{ fontFamily: 'poppins-medium' }}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                    </Text>
                </View>
                )}
            </View>
      </View>

    </ScrollView >
    );
  };

export default Help