import { Dimensions, TouchableOpacity, Image, FlatList } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import postsData from '../../data/postsData';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../utils/types/navigation';

type NavigationProp = StackNavigationProp<RootStackParamList>;

const PostList = () => {

    const navigation = useNavigation<NavigationProp>();
    const { width } = Dimensions.get('window');

    const renderPostItem = ({ item }: any) => (
        <TouchableOpacity
            className='border-r border-b border-[#B8B8B8]'
            style={{ width: width / 3 - 1 }}
            onPress={() => navigation.navigate('PostDetails', {
                imageUrl: item.imageUrl,
                title: item.title,
                description: item.description,
            })}
        >
            <Image
                source={item.imageUrl}
                resizeMode='cover'
                className='w-[140.33px] h-[140.33px]'
            />
        </TouchableOpacity>
    )

    return (
        <FlatList
            data={postsData}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderPostItem}
            numColumns={3}
            scrollEnabled={false}
        />
    );
}

export default PostList;