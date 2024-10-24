import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput
} from 'react-native'
import React from 'react'
import { useForm, Controller } from 'react-hook-form';

type FormData = {
  email: string
}

export default function ForgotPassword() {
  /* Este código retorna exceção na pagina Esqueceu sua Senha */
  const { control, handleSubmit } = useForm<FormData>();
  return (
    <View className='flex-1 bg-[#F9F9F9]  items-center' >
      <View className='relative flex justify-center items-center  w-full h-64 mb-6'>
        <Image
          source={require('../../assets/icons/iconsLogin/ImagemDeFundo.png')}
          className="absolute shadown top-0 left-0 w-full h-full bg-[#F9F9F9] object-cover"
        />
        <View className='justify-center items-center'>
          <Image
            source={require('../../assets/icons/iconsLogin/NomeDoApp.png')}
          />
        </View>
      </View>

      {/*ForgotPassword */}
      <View className='flex justify-center items-center'>
        <Text style={{ fontFamily: 'poppins-semi-bold' }} className='text-[#1F3B4D] mb-4 font-bold text-3xl ml-1'>Esqueceu sua senha?</Text>
        <Text className='text-[#455A64] ml-1 mb-8 text-justify w-[322px] font-bold  '>
          Digite o endereço de e-mail para o qual deseja que suas informações de redefinição de senha sejam enviadas.</Text>
      </View>


      {/*Email*/}
      <View className='w-4/5 mb-10'>
        <View className='flex-row items-center mb-4 mr-5 '
        >
          <Image
            className='mr-1'
            source={require('../../assets/icons/iconsLogin/IconeEmail.png')}
          />
          <Text className='ml-1 text-[#455A64] '>Email</Text>
        </View>

        <Controller
          control={control}
          name='email'
          rules={{
            required: "O Email é obrigatorio",
            maxLength: {
              value: 51,
              message: "Limite excedido de caracteres"
            },
            pattern: {
              value: /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/,
              message: 'Email inválido'
            }
          }}
          render={({ field: { value, onChange }, fieldState: { error } }) => (
            <>
              <TextInput
                className='bg-[#EDEDED] border border-[#B0BEC5] shadow rounded-2xl px-4 py-4  '
                placeholder='Digite seu Email'
                onChangeText={onChange}
                value={value}
                keyboardType='email-address'
                autoCapitalize='none'

              />
              {error && <Text
                style={{ fontFamily: 'poppins-semi-bold' }}
                className='text-[#ff375b] text-xs ml-2'>{error.message}</Text>}
            </>
          )}

        />

      </View>

      {/*Button Send*/}
      <TouchableOpacity
        className='w-4/5 bg-[#1F3B4D] shadow-lg py-4 mb-5 rounded-2xl'
        onPress={handleSubmit((data) => {
          console.log(data);
        })}>
        <Text className='text-center text-white text-lg'>Enviar</Text>
      </TouchableOpacity>
    </View>
  )
}