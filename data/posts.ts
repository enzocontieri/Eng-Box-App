import { Post } from '../utils/types/post';

const posts: Post[] = [
	{
		id: 1,
		description: 'This is the first post description.',
		author: 'Author One',
		title: 'First Post',
		imageUrl: require('../assets/images/posts/examples/image.png'),
	},
	{
		id: 2,
		description: 'This is the second post description.',
		author: 'Author Two',
		title: 'Second Post',
		imageUrl: require('../assets/images/posts/examples/image.png'),
	},
	{
		id: 3,
		description: 'This is the third post description.',
		author: 'Author Three',
		title: 'Third Post',
		imageUrl: require('../assets/images/posts/examples/image.png'),
	},
	{
		id: 4,
		description: 'This is the fourth post description.',
		author: 'Author Four',
		title: 'Fourth Post',
		imageUrl: require('../assets/images/posts/examples/image.png'),
	},
	{
		id: 5,
		description: 'This is the fifth post description.',
		author: 'Author Five',
		title: 'Fifth Post',
		imageUrl: require('../assets/images/posts/examples/image.png'),
	},
];

export default posts;
