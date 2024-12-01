import { Dimensions, TouchableOpacity, Image, FlatList } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../utils/types/navigation';
import { Post } from '../../utils/types/post'; 

type NavigationProp = StackNavigationProp<RootStackParamList>;

interface PostListProps {
	posts: Post[]; 
}

const PostList: React.FC<PostListProps> = ({ posts }) => {
	const navigation = useNavigation<NavigationProp>();
	const { width } = Dimensions.get('window');

	// Função que renderiza cada item da lista
	const renderPostItem = ({ item }: { item: Post }) => (
		
		<TouchableOpacity
			className="border-r border-b border-[#B8B8B8]"
			style={{ width: width / 3 - 1 }}
			onPress={() =>
				navigation.navigate('PostDetails', {
					id: item.id,
					imageUrl: item.fotos[0] || '', 
					titulo: item.titulo,
					conteudo: item.conteudo,
					
				})
				
			}
		>
			
			<Image
				source={{ uri: item.fotos[0] || 'https://via.placeholder.com/140' }} // dando erro por conta do any em navigation
				className="w-[140.33px] h-[140.33px]"
			/>
		</TouchableOpacity>
	);

	return (
		<FlatList
			data={posts} 
			keyExtractor={(item) => item.id.toString()}
			renderItem={renderPostItem}
			numColumns={3} 
			scrollEnabled={false} 
		/>
	);
};

export default PostList;
