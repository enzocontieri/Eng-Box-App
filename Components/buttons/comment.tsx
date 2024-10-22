import { Text, TouchableOpacity } from 'react-native';

const CommentButton = () => {
	return (
		<>
			{/* Botão de Comentário */}
			<TouchableOpacity className="bg-[#767676] w-60 h-12 justify-center items-center rounded-lg">
				<Text
					className="text-[18px] text-white"
					style={{ fontFamily: 'poppins-medium' }}
				>
					Comentários
				</Text>
			</TouchableOpacity>
		</>
	);
};

export default CommentButton;
