import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { NavigationProp } from '../../utils/types/navigation';

interface MenuBtnProps {
    buttonName: string;
    onPress: () => void;
}

const MenuBtn = ({ buttonName, onPress }: MenuBtnProps) => {
    return (
        <TouchableOpacity
            className='flex-row w-4/5 h-16 rounded-lg items-center justify-center mb-4 bg-[#767676] shadow-md'
            onPress={onPress}
        >
            <Text className='text-white text-2xl' style={{ fontFamily: "poppins-medium" }} >{buttonName}</Text>
        </TouchableOpacity>
    )
}

const Menu = () => {

    const navigation = useNavigation<NavigationProp>();

    return (
        <SafeAreaView>
            <ScrollView>
                <View className='items-center mt-8'>
                    <Image
                        source={require("../../assets/images/login/LogoAppHome.png")}
                    />

                    <Text className='w-4/5 text-justify text-sm mt-8 text-[#767676]' style={{ fontFamily: "poppins-medium" }} >Explore dicas, compartilhe ideias e aprenda mais sobre práticas sustentáveis para transformar o mundo através da engenharia.</Text>

                    <View className='w-full items-center mt-10'>
                        <MenuBtn buttonName='Inicio' onPress={() => navigation.navigate("Main")} />
                        <MenuBtn buttonName='Explorar Dicas' onPress={() => navigation.navigate("Explore")} />
                        <MenuBtn buttonName='Postar' onPress={() => navigation.navigate("Upload")} />
                        <MenuBtn buttonName='Perfil' onPress={() => navigation.navigate("Profile")} />
                        <MenuBtn buttonName='Eng Box Quiz' onPress={() => navigation.navigate("QuizPresentation")} />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default Menu;