import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, {useState} from 'react'
import { Ionicons } from 'react-native-vector-icons/Ionicons';


const ThreeGuide = () => {

    const [isExpanded, setIsExpanded] = useState(false); 

    // Função para alternar entre expandido e recolhido
    const toggleExpansion = () => {
      setIsExpanded(!isExpanded);
    };

  return (
    <View className='items-center justify-center mt-16 '>
        <Text className='text-[22px] font-semibold text-[#767676] rounded p-1' style={{ fontFamily: 'poppins-medium' }}>Guia de Árvores</Text>
  
        
        <TouchableOpacity
          onPress={toggleExpansion}
          className='bg-[#D9D9D9] h-[50px] w-[90%] rounded-md justify-between items-center flex-row px-4 mt-4'
        >
          <Text className='text-[14px] font-semibold text-black' style={{ fontFamily: 'poppins-medium' }}>Guia de Perfil Consumidor Verde</Text>
          <Ionicons name={isExpanded ? 'chevron-up' : 'chevron-down'} size={20} color="black" />
        </TouchableOpacity>
  
        {/* Conteúdo extra que aparece ao expandir */}
        {isExpanded && (
          <View className='bg-[#D9D9D9] w-[90%] mt-2 p-3 rounded-md'>
            <Text className='text-[14px] text-black' style={{ fontFamily: 'poppins-medium' }}>
              O que são essas árvores ?
            </Text>
            <Text className='mx-1 my-1 text-[#767676] text-[11px] font-normal' style={{ fontFamily: 'poppins-medium' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</Text>
            <ScrollView>
                <View className='flex items-center justify-center'>
                    {/* Container principal */}
                    <View className='bg-white w-[97%] h-32 my-2 rounded-md shadow flex-row items-center relative'>
                        {/* Imagem à esquerda */}
                        <Image 
                            source={require('../assets/icons/IconsLevel/arvore1.1.png')}  
                            className='h-[100px] w-[110px] mx-1 '
                                
                        />
                        
                        {/* Título */}
                        <View className="absolute top-3 left-28 bg-black rounded-md p-1"> 
                            <Text className='text-[#fcff31] text-[13px] font-semibold' style={{ fontFamily: 'poppins-medium' }}> 
                                Consumidor Imprudente
                            </Text>
                        </View>

                        {/* Conteúdo ao lado direito da imagem */}
                        <View className='flex-1 ml-2'>
                            {/* Descrição */}
                            <Text className='text-[12px] mt-3 text-[#767676] break-words w-[160px]' style={{ fontFamily: 'poppins-regular' }}>
                            Seus hábitos de consumo acabam que por prejudicar a natureza em graus bem negativos.  
                            </Text>
                        </View>

                        {/* Ícone no canto superior direito */}
                        <TouchableOpacity className='absolute top-3 right-3'>
                            <Image source={require('../assets/icons/user-pages-icons/user-info/level-icon.png')}/>
                        </TouchableOpacity>
                    </View>
                </View>
                <View className='flex items-center justify-center'>
                    {/* Container principal */}
                    <View className='bg-white w-[97%] h-32 my-2 rounded-md shadow flex-row items-center relative'>
                        {/* Imagem à esquerda */}
                        <Image 
                            source={require('../assets/icons/IconsLevel/arvore0.png')}  
                            className='h-[180px] w-[110px] mx-1 '
                                
                        />
                        
                        {/* Título */}
                        <Text className=' absolute top-3 left-28 text-[#50B454] text-[14px] font-semibold' style={{ fontFamily: 'poppins-medium' }}>
                                Consumidor Iniciante
                            </Text>

                        {/* Conteúdo ao lado direito da imagem */}
                        <View className='flex-1 ml-2'>
                            {/* Descrição */}
                            <Text className='text-[12px] mt-3 text-[#767676] break-words w-[160px]' style={{ fontFamily: 'poppins-regular' }}>
                            Você ainda não têm muita noção de gasto e consumo, ainda está desenvolvendo seus hábitos!  
                            </Text>
                        </View>

                        {/* Ícone no canto superior direito */}
                        <TouchableOpacity className='absolute top-3 right-3'>
                            <Image source={require('../assets/icons/user-pages-icons/user-info/level-icon.png')}/>
                        </TouchableOpacity>
                    </View>
                </View>
                <View className='flex items-center justify-center'>
                    {/* Container principal */}
                    <View className='bg-white w-[97%] h-32 my-2 rounded-md shadow flex-row items-center relative'>
                        {/* Imagem à esquerda */}
                        <Image 
                            source={require('../assets/icons/IconsLevel/arvore1.png')}  
                            className='h-[120px] w-[110px] mx-1 '
                                
                        />
                        
                        {/* Título */}
                        <Text className=' absolute top-3 left-28 text-[#50B454] text-[14px] font-semibold' style={{ fontFamily: 'poppins-medium' }}>
                                Consumidor Verde
                            </Text>

                        {/* Conteúdo ao lado direito da imagem */}
                        <View className='flex-1 ml-2'>
                            {/* Descrição */}
                            <Text className='text-[12px] mt-3 text-[#767676] break-words w-[160px]' style={{ fontFamily: 'poppins-regular' }}>
                            Você é alguém com noções de impacto ambiental, que toma decisões de consumo cautelosas
                            </Text>
                        </View>

                        {/* Ícone no canto superior direito */}
                        <TouchableOpacity className='absolute top-3 right-3'>
                            <Image source={require('../assets/icons/user-pages-icons/user-info/level-icon.png')}/>
                        </TouchableOpacity>
                    </View>
                </View>
                <View className='flex items-center justify-center'>
                    {/* Container principal */}
                    <View className='bg-white w-[97%] h-32 my-2 rounded-md shadow flex-row items-center relative'>
                        {/* Imagem à esquerda */}
                        <Image 
                            source={require('../assets/icons/IconsLevel/arvore2.png')}  
                            className='h-[120px] w-[110px] mx-1 '
                                
                        />
                        
                        {/* Título */}
                        <Text className=' absolute top-3 left-28 text-[#50B454] text-[14px] font-semibold' style={{ fontFamily: 'poppins-medium' }}>
                                Consumidor Responsável
                            </Text>

                        {/* Conteúdo ao lado direito da imagem */}
                        <View className='flex-1 ml-2'>
                            {/* Descrição */}
                            <Text className='text-[12px] mt-3 text-[#767676] break-words w-[160px]' style={{ fontFamily: 'poppins-regular' }}>
                            Muitas de suas escolhas levam em consideração o reaproveitamento de materiais e descarte adequado!  
                            </Text>
                        </View>

                        {/* Ícone no canto superior direito */}
                        <TouchableOpacity className='absolute top-3 right-3'>
                            <Image source={require('../assets/icons/user-pages-icons/user-info/level-icon.png')}/>
                        </TouchableOpacity>
                    </View>
                </View>
                <View className='flex items-center justify-center'>
                    {/* Container principal */}
                    <View className='bg-white w-[97%] h-32 my-2 rounded-md shadow flex-row items-center relative'>
                        {/* Imagem à esquerda */}
                        <Image 
                            source={require('../assets/icons/IconsLevel/arvore3.png')}  
                            className='h-[90px] w-[110px] mt-10 ml-2 '
                                
                        />
                        
                        {/* Título */}
                        <Text className=' absolute top-3 left-28 text-[#50B454] text-[14px] font-semibold' style={{ fontFamily: 'poppins-medium' }}>
                                Consumidor Expert
                            </Text>

                        {/* Conteúdo ao lado direito da imagem */}
                        <View className='flex-1 ml-2'>
                            {/* Descrição */}
                            <Text className='text-[12px] mt-3 text-[#767676] break-words w-[160px]' style={{ fontFamily: 'poppins-regular' }}>
                            Você ainda não têm muita noção de gasto e consumo, ainda está desenvolvendo seus hábitos!  
                            </Text>
                        </View>

                        {/* Ícone no canto superior direito */}
                        <TouchableOpacity className='absolute top-3 right-3'>
                            <Image source={require('../assets/icons/user-pages-icons/user-info/level-icon.png')}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>

          </View>
        )};

            <Text className='text-[18px] font-semibold text-[#767676] rounded p-1 mt-16' style={{ fontFamily: 'poppins-medium' }}>Perguntas Frequentes</Text>
        </View>
  );
};

export default ThreeGuide