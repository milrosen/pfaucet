import {
	publish
} from 'gh-pages';

publish(
	'build', // path to public directory
	{
		branch: 'gh-pages',
		repo: 'https://github.com/milrosen/pfaucet.git',
		user: {
			name: 'Milton Rosenabum',
			email: 'milton.rosenbaum@gmail.com'
		},
		dotfiles: true
	},
	() => {
		console.log('Deploy Complete!');
	}
);