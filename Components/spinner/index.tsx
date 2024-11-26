import { ActivityIndicator, View } from 'react-native';

const Spinner = () => {
	return (
		<View className="absolute inset-0 flex justify-center items-center bg-black/40 h-full w-full text-7xl">
			<ActivityIndicator size="large" color="#4F46E5" className="text-7xl" />
		</View>
	);
};

export default Spinner;
