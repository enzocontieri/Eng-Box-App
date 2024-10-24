import { TouchableOpacity } from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../utils/types/navigation';

type NavigationProp = StackNavigationProp<RootStackParamList>;

const HeaderMenu = () => {

    const navigation = useNavigation<NavigationProp>();

    return (
        <TouchableOpacity onPress={() => navigation.navigate('MoreOptions')} >
            <Ionicons name="menu-outline" size={30} color="#303030" />
        </TouchableOpacity>
    )
}

export default HeaderMenu;