import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

type LikeButtonProps = {
	setIsLiked: (state: boolean) => void;
	isLiked: boolean;
};

const LikeButton = ({ setIsLiked, isLiked }: LikeButtonProps) => {
	const handlePressLikeButton = () => {
		setIsLiked(!isLiked);
	};

	return (
		<>
			<TouchableOpacity onPress={handlePressLikeButton}>
				<Ionicons
					name={isLiked ? 'heart' : 'heart-outline'}
					color={isLiked ? 'red' : '#767676'}
					size={35}
				/>
			</TouchableOpacity>
		</>
	);
};

export default LikeButton;
