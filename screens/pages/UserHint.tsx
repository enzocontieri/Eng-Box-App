import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator, Alert, TouchableOpacity } from 'react-native';
import { getApiAxios } from '../../services/axios';
import Icon from 'react-native-vector-icons/Ionicons';
import GoBackButton from './../../Components/GoBackButton';

interface Hint {
  id: string; // Ajuste conforme a chave primária do dado
  usuarioid: string;
  titulo: string;
  conteudo: string;
}

const UserHint = () => {
  const [hints, setHints] = useState<Hint[]>([]);
  const [loading, setLoading] = useState(false);

  // Substitua pelo método correto de obter o usuarioid, por exemplo:
  const usuarioid = "usuario-logado-id"; // Obtenha o usuário logado via contexto ou AsyncStorage

  const fetchHints = async () => {
    try {
      setLoading(true);
      const api = await getApiAxios();
      const response = await api.get<Hint[]>('/api/Enge/dicas'); // Tipagem da resposta
      const userHints = response.data.filter((hint) => hint.usuarioid === usuarioid);
      setHints(userHints);
    } catch (error) {
      console.error('Erro ao buscar dicas:', error);
    } finally {
      setLoading(false);
    }
  };

  const deleteHint = async (dicaId: string) => {
    try {
      const api = await getApiAxios();
      await api.delete(`/api/dicas/${dicaId}`);
      // Atualizar a lista de dicas após a exclusão
      setHints((prevHints) => prevHints.filter((hint) => hint.id !== dicaId));
    } catch (error) {
      Alert.alert('Erro ao deletar dica');
    }
  };

  useEffect(() => {
    fetchHints();
  }, []);

  const renderHint = ({ item }: { item: Hint }) => (
    <View className="mx-[5%]">
      <View className="bg-white w-[100%] p-4 rounded-lg shadow mb-2 mt-2">
        <Text
          className="font-bold mb-2 text-lg text-[#4A4A4A]"
          style={{ fontFamily: 'poppins-medium' }}
        >
          {item.titulo}
        </Text>
        <View className="absolute top-3 right-3">
          <TouchableOpacity onPress={() => deleteHint(item.id)}>
            <Icon name="trash-outline" size={20} color="red" />
          </TouchableOpacity>
        </View>
        <Text
          className="text-[#4A4A4A] text-sm"
          style={{ fontFamily: 'poppins-medium', opacity: 0.7 }}
        >
          {item.conteudo}
        </Text>
      </View>
    </View>
  );

  return (
    <View className="mt-16">
      <GoBackButton />
      <View className="items-center mb-10">
        <Text
          className="font-bold text-lg text-[#4A4A4A]"
          style={{ fontFamily: 'poppins-medium' }}
        >
          Suas Dicas
        </Text>
      </View>
      {loading ? (
        <View className="flex-1 items-center justify-center mt-44">
          <ActivityIndicator size="large" color="#4A4A4A" />
        </View>
      ) : (
        <FlatList
          data={hints}
          keyExtractor={(item) => item.id}
          renderItem={renderHint}
          nestedScrollEnabled
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 200 }}
          ListEmptyComponent={
            <View className='items-center justify-center mt-16'>
                <Text className="text-[#4A4A4A] text-sm" style={{ fontFamily: 'poppins-medium', opacity: 0.7 }}>
                Nenhuma dica encontrada.
                </Text>
              </View>
          }
        />
      )}
    </View>
  );
};

export default UserHint;
