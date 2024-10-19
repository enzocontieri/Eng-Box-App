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

                <View className='top-20'>
                <TouchableOpacity onPress={() => navigation.navigate('Help')}>
                    <Text>Help</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Info')}>
                    <Text>Info</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('LogOut')}>
                    <Text>LogOut</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
                    <Text>Notifications</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('PersonalData')}>
                    <Text>PersonalData</Text>
                </TouchableOpacity>
                </View>
            </View>

        </SafeAreaView>
    )
}

export default MoreOptions

