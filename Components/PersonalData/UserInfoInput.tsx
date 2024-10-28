import { View, Text, TextInput } from 'react-native';
import React from 'react';

interface UserInfoProps {
    label: string;
    value: string;
    editable?: boolean;
    placeholder: string;
    onChangeText: (text: string) => void;
}

const UserInfoInput: React.FC<UserInfoProps> = ({ label, value, editable, placeholder, onChangeText }) => {
    return (
        <View className='mb-4' >
            <Text className='text-xl text-[#B0BEC5]' >{label}</Text>
            <TextInput
                editable={editable}
                value={value}
                placeholder={placeholder}
                onChangeText={onChangeText}
                className='border-2 rounded-xl pl-2 border-[#B0BEC5] w-80 h-12 text-[#B0BEC5] text-base'
                style={{ fontFamily: 'poppins-medium' }}
            />
        </View>
    );
}

export default UserInfoInput;