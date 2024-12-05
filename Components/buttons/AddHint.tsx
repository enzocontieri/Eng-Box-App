import { Alert, View, Text, TouchableOpacity, Modal, Keyboard, TouchableWithoutFeedback, TextInput, KeyboardAvoidingView, Platform  } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import React, {useRef, useState} from 'react'
import { Options } from './../../node_modules/@expo/fingerprint/build/Fingerprint.types.d';
import { ScrollView } from 'react-native-gesture-handler';
import { HintFormData } from './../../utils/types/form/formData';
import { getApiAxios } from '../../services/axios';


const AddHint = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const textInputRef = useRef(null);

    const fetchUploadPost = async (data: HintFormData) => {
		try {
			const formData = new FormData();
			formData.append('tema', 'Enge');
			formData.append('subtema', 'Enge');
			formData.append('titulo', data.titulo);
			formData.append('descricao', data.descricao);

			const api = await getApiAxios();
			await api.post('/api/dicas', formData);
		} catch (error: any) {
			if (error.response) {
				console.error('Erro na resposta:', error.response.data);
				console.error('Status do erro:', error.response.status);
				console.error('Cabeçalhos do erro:', error.response.headers);
			} else if (error.request) {
				// Erro na requisição, mas sem resposta (ex.: problema de rede)
				console.error('Erro na requisição:', error.request);
			} else {
				// Outro tipo de erro
				console.error('Erro geral:', error.message);
			}
			alert('Erro ao enviar Dica');
		} 
	};

    const handleHint = async () => {
		try {
			await fetchUploadPost(uploadData);
			setTitle('');
			setDescription('');
		} catch (error) {
			console.log(error);
		}
	};

    const uploadData: HintFormData = {
		titulo: title,
		descricao: description,
		tema: 'Enge',
		subtemas: 'Enge',
	};

    

    const handleViewPress = () => {
        if (textInputRef.current) {
        textInputRef.current.focus(); // Foca no TextInput
        }
    };

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
                                onChangeText={setTitle}/>
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
                                        onChangeText={setDescription}
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
                                        onPress={() => {setModalVisible(!modalVisible); handleHint() ;Alert.alert('Dica enviada aguarde a aprovação de um Especialista')}}
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