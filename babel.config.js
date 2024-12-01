module.exports = (api) => {
	api.cache(true);
	return {
		presets: ['babel-preset-expo'],
		plugins: [
			'nativewind/babel',
			'react-native-reanimated/plugin',
			'module:react-native-dotenv',
			[
				'module-resolver',
				{
					root: ['./'], // Define o diretório raiz
					alias: {
						'@assets': './assets',
					},
				},
			],
		],
	};
};
