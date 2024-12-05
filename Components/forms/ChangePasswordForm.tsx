import { View, Text, TextInput, SafeAreaView, TouchableOpacity, TouchableWithoutFeedback, Platform, KeyboardAvoidingView } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'

const ChangePasswordForm = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [token, setToken] = useState('');
    const [error, setError] = useState(false);


    const textInputRef = useRef(null);

    const handleViewPress = () => {
        if (textInputRef.current) {
        textInputRef.current.focus(); // Foca no TextInput
        }
    };

    useEffect(() => {
        if (confirmPassword && password !== confirmPassword) {
          setError(true);
        } else {
          setError(false);
        }
      }, [password, confirmPassword]);

  return (
    <SafeAreaView className='bg-white h-full'>
        <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
        >
        <View className='m-[5%] justify-center h-full'> 
            <View className='items-center justify-center'>
                <Text className="text-3xl text-[#4A4A4A]" style={{ fontFamily: 'poppins-medium' }}>Alterar Senha</Text>
            </View>
            {/*new password view*/}
            <View>
                <Text className='mx-[5%] mt-[10%] text-[#4A4A4A] text-base' style={{ fontFamily: 'poppins-medium' }}>Nova Senha</Text>
                <TouchableWithoutFeedback onPress={handleViewPress}>
                    <View className='bg-[#F8F8F8] p-3 mx-[5%]'>
                        <TextInput 
                        ref={textInputRef}
                        placeholder="Digite aqui..."
                        onChangeText={setPassword}
                        value={password}
                        secureTextEntry={true}
                        />
                    </View>
                </TouchableWithoutFeedback>
            </View>
            {/*confirm password view*/}
            <View>
                <Text className='mx-[5%] mt-[10%] text-[#4A4A4A] text-base' style={{ fontFamily: 'poppins-medium' }}>Repetir Nova Senha</Text>
                <TouchableWithoutFeedback onPress={handleViewPress}>
                    <View className='bg-[#F8F8F8] p-3 mx-[5%]'>
                    <TextInput 
                        ref={textInputRef}
                        placeholder="Digite aqui..."
                        secureTextEntry={true}
                        onChangeText={setConfirmPassword}
                        value={confirmPassword}
                        />
                    </View>
                </TouchableWithoutFeedback>
                    {error ? (
                    <Text
                    className="mx-[5%] mt-2 text-red-500 text-base"
                    style={{ fontFamily: 'poppins-medium' }}
                    >
                    As senhas não se coincidem
                    </Text>
                ) : null}
            </View>
            {/*Token View*/}
            <View>
                <Text className='mx-[5%] mt-[10%] text-[#4A4A4A] text-base' style={{ fontFamily: 'poppins-medium' }}>Inserir Token</Text>
                <TouchableWithoutFeedback onPress={handleViewPress}>
                    <View className='bg-[#F8F8F8] p-3 mx-[5%]'>
                        <TextInput 
                        ref={textInputRef}
                        placeholder="Digite aqui..."
                        onChangeText={setToken}
                        value={token}
                        secureTextEntry={true}
                        />
                    </View>
                </TouchableWithoutFeedback>
            </View>
            <View className='mx-[4%]'>
            {/* Submit Button */}
                <TouchableOpacity
                    className="w-full h-12 items-center justify-center bg-[#767676] rounded-lg mt-8"
                    onPress={() => {}}
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
        </KeyboardAvoidingView>
    </SafeAreaView>

  )
}

export default ChangePasswordForm