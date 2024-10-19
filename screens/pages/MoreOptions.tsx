import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const MoreOptions = () => {

    const navigation = useNavigation();

    return (
        <SafeAreaView>
            <View>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    className='absolute top-10 left-5 bg-white p-2 rounded-full'
                >
                    <Ionicons name="chevron-back" size={24} color="black" />
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    )
}

export default MoreOptions