import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator, ScrollView, Alert, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { getApiAxios } from '../../services/axios';
import { Especialist } from '../../utils/types/post';
import Icon from 'react-native-vector-icons/Ionicons';

const HintComponent = () => {
  const [hints, setHints] = useState([]);
  const [loading, setLoading] = useState(false);

  // Função para buscar dados da API
  const fetchHints = async () => {
    try {
      setLoading(true);
      const api = await getApiAxios();
      const response = await api.get('/api/Enge/dicas');
      setHints(response.data);
    } catch (error) {
      console.error('Erro ao buscar dicas:', error);
    } finally {
      setLoading(false);
    }
  };

  const deleteHint = async () => {
    try {
      const api = await getApiAxios();
      const response = await api.delete('/api/Enge/dicas');
    } catch (error) {
    Alert.alert("erro ao deletar dica")
  } 
}

  useEffect(() => {
    fetchHints();
  }, []);

  const renderHint = ({ item }: { item: Especialist }) => (
    <View className="mx-[5%]">
      <View className="bg-white w-[100%] p-4 rounded-lg shadow mb-2 mt-2">
        <Text
          className="font-bold mb-2 text-lg text-[#4A4A4A]"
          style={{ fontFamily: 'poppins-medium' }}
        >
          {item.titulo}
        </Text>
        <View className='position absolute top-3 right-3'>
          <TouchableOpacity onPress={deleteHint}>
            <Icon name='trash-outline' size={20} color="red" />
          </TouchableOpacity>
        </View>
        <Text className="text-[#4A4A4A] text-sm" style={{ fontFamily: 'poppins-medium', opacity: 0.7 }}>{item.conteudo}</Text>
        <Text className="text-[#4A4A4A] text-base" style={{ fontFamily: 'poppins-medium'}}></Text>
      </View>
    </View>
  );

  return (
    
    <View>
      {loading ? (
        <View className="flex-1 items-center justify-center mt-44">
          <ActivityIndicator size="large" color="#4A4A4A" />
          </View>
      ) : (
            <FlatList 
            data={hints}
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderHint}
            nestedScrollEnabled
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 200 }}
            ListEmptyComponent={
                <Text className="text-[#4A4A4A] text-sm" style={{ fontFamily: 'poppins-medium', opacity: 0.7 }}>
                Nenhuma dica encontrada.
                </Text>
            }
            />
      )}
    </View>
  );
};

export default HintComponent;
