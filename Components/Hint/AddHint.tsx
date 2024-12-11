import { Alert, View, Text, TouchableOpacity, Modal, TouchableWithoutFeedback, TextInput, KeyboardAvoidingView, Platform  } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import React, {useRef, useState} from 'react'
import { ScrollView } from 'react-native-gesture-handler';
import { getApiAxios } from '../../services/axios';
import { UserResponse } from '../../utils/types/user-response';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { getUserDetails } from '../../utils/session/user-data';
import { getToken } from '../../utils/session/manager';
import { NavigationProp } from '../../utils/types/navigation';
import Spinner from '../spinner';
import { HintFormData } from '../../utils/types/form/formData';


const AddHint = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [titulo, setTitulo] = React.useState('');
	const [conteudo, setConteudo] = React.useState('');
    const [user, setUserProfile] = useState<UserResponse | undefined>(undefined);
    const textInputRef = useRef(null);
    const navigation = useNavigation<NavigationProp>();
    const [loading, setLoading] = useState(true);

    const fetchUploadPost = async (data: HintFormData) => {
		try {
            setLoading(true)
			const formData = new FormData();
			formData.append('titulo', data.titulo);
			formData.append('conteudo', data.conteudo);
			formData.append('tema', 'Enge');
			formData.append('subtema', 'Enge');
			formData.append('usuarioId', user?.email ?? '');

			const api = await getApiAxios();
			await api.postForm('/api/dicas',formData);
		} catch (error: any) {
			if (error.response) {
				console.error('Erro na resposta:', error.response.data);
				console.error('Status do erro:', error.response.status);
				console.error('Cabeçalhos do erro:', error.response.headers);
			} else if (error.request) {
				console.error('Erro na requisição:', error.request);            
			} else {
				
				console.error('Erro geral:', error.message);
			}
			alert('Erro ao enviar Dica');
		}  finally{
            setLoading(false)
        }
	};
    
    useFocusEffect(
		React.useCallback(() => {
			(async () => {
				const token = await getToken();
				if (!token) {
					alert('Você precisa realizar o login para acessar!');
					navigation.navigate('LogIn');
					return;
				} else {
					const user = await getUserDetails();
					setUserProfile(user as UserResponse);
				}
				setLoading(false);
			})();
			return () => {
				setLoading(true);
			};
		}, []),
	);

    const handleHint = async () => {
		try {
			await fetchUploadPost(hintData);
		} catch (error) {
			console.log(error);
		}
	};

    const hintData: HintFormData = {
		titulo: titulo,
		conteudo: conteudo,
		tema: 'Enge',
		subtemas: 'Enge',
	};

    const handleViewPress = () => {
        if (textInputRef.current) {
        textInputRef.current.focus(); // Foca no TextInput
        }
    };
    if (loading) return <Spinner />;
  return (
    <View>
       <TouchableOpacity onPress={() => setModalVisible(true)} className='items-center justify-center p-1'>
            <View className="border-2 border-[#4A4A4A] border-opacity-60 rounded-full w-6 h-6 items-center justify-center">
                <Icon name="add-sharp" size={15} color="#4A4A4A" />
            </View>
        </TouchableOpacity>
        <Modal 
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}
            >
                <View className='bg-white w-full h-[65%] bottom-0 absolute rounded-3xl'>
                    <ScrollView contentContainerStyle={{paddingBottom: 100}}>
                        {/*Header*/}
                        <View className="">
                            {/*Titulo e Close*/}
                            <View className='flex-row justify-between items-center w-full p-6'>
                                <Text className="text-base text-[#4A4A4A]'" style={{ fontFamily: 'poppins-medium' }}>Adicione dica</Text>
                                <Icon name="close" size={20} color="#4A4A4A" onPress={() => setModalVisible(!modalVisible)}/>
                            </View>
                        </View>
                        {/*Body*/}
                        <View className='mx-[15%]'>
                            <Text className="text-base text-[#4A4A4A]'" style={{ fontFamily: 'poppins-medium' }}>Titulo</Text>
                            <View className='bg-[#F8F8F8] w-[100%] '>
                                <TextInput 
                                placeholder='digite aqui...' 
                                className='p-4'
                                onChangeText={setTitulo}
                                value={titulo}
                                />
                            </View>
                            <View className='mt-[10%]'>
                                <Text className="text-base text-[#4A4A4A]'" style={{ fontFamily: 'poppins-medium' }}>Descrição</Text>
                                <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                                 style={{ flex: 1 }}>
                                <TouchableWithoutFeedback  onPress={handleViewPress}>
                                    <View className="bg-[#F8F8F8] w-[100%] pb-[50%]">
                                        <ScrollView>
                                        <TextInput
                                        ref={textInputRef}
                                        placeholder="Digite aqui..."
                                        className="p-4"
                                        multiline={true}
                                        textAlignVertical="top"
                                        onChangeText={setConteudo}
                                        value={conteudo}
                                        />
                                        </ScrollView>
                                    </View>
                                </TouchableWithoutFeedback>
                                </KeyboardAvoidingView>
                            </View>
                        </View>
                        {/*Footer*/}
                        <View className='mx-[15%]'>
                            <View>
                                {/* Submit Button */}
                                    <TouchableOpacity
                                        className="w-full h-16 items-center justify-center bg-[#767676] rounded-lg mt-8"
                                        onPress={() => {
                                            setModalVisible(!modalVisible); 
                                            handleHint() ;Alert.alert('Dica enviada aguarde a aprovação de um Especialista')}}
                                    >
                                        <Text
                                            className="text-lg text-[#FFFFFF]"
                                            style={{ fontFamily: 'poppins-medium' }}
                                        >
                                            Enviar
                                        </Text>
                                    </TouchableOpacity>
                            </View>
                        </View>
                    </ScrollView>
                </View>
        </Modal>
    </View>
  )
}

export default AddHint

