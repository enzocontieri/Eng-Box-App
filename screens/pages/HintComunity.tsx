import { View, Text, SafeAreaView, TouchableWithoutFeedback } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../utils/types/navigation';
import AddHint from '../../Components/Hint/AddHint';
import HintComponent from '../../Components/Hint/HintComponent';
import EspecialistHint from '../../Components/Hint/EspecialistHint';
import GoBackButton from '../../Components/GoBackButton';
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native';

type NavigationProp = StackNavigationProp<RootStackParamList>;

const HintComunity = () => {
    const [isPressed, setIsPressed] = useState(false);
    const navigation = useNavigation<NavigationProp>();
    
    const togglePress = () => {
        setIsPressed((prevState) => !prevState);
    };

    return (
        <SafeAreaView className="bg-[#F8F8F8] h-full">
            <TouchableWithoutFeedback onPress={togglePress}>
                <View className="absolute bottom-6 right-6 bg-[#4A4A4A] rounded-full w-14 h-14 flex items-center justify-center shadow-lg z-10">
                    <Icon
                        name={isPressed ? 'bulb' : 'bulb-outline'} // Alterna o ícone com base no estado
                        size={24}
                        color="#fff"
                    />
                </View>
            </TouchableWithoutFeedback>
            {isPressed ? (
                <View className="m-6">
                    <View>
                        <GoBackButton />
                        <View className="items-center bottom-4">
                            <Text className="font-bold mb-2 text-lg text-[#4A4A4A]"style={{ fontFamily: 'poppins-medium' }}>
                                Dicas da Comunidade
                            </Text>
                        </View>
                    </View>
                    <View className="absolute right-4 top-4 justify-between flex-row gap-1">
                        <AddHint />
                        <TouchableOpacity onPress={() => navigation.navigate('UserHint')}>
                            <Icon name='newspaper-outline' size={24} color='4A4A4A'/>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <HintComponent />
                    </View>
                </View>
            ) : (
                <View className="m-6">
                    <View>
                        <GoBackButton />
                        <View className="items-center bottom-4">
                            <Text className="font-bold mb-2 text-lg text-[#4A4A4A]" style={{ fontFamily: 'poppins-medium' }}>
                                Dicas dos Especialistas
                            </Text>
                        </View>
                    </View>
                    <View className="absolute right-8 top-4">
                        <AddHint />
                    </View>
                    <View>
                        <EspecialistHint />
                    </View>
                </View>
            )}
        </SafeAreaView>
    );
};

export default HintComunity;
