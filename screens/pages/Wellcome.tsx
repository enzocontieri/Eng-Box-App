import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import React from 'react';
import 'tailwindcss/tailwind.css';

const WellcomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
        <View className='items-center justify-center mt-20'>
            <Text>WellcomeScreen</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Main")}><Text>ir para Mains Page</Text></TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

export default WellcomeScreen