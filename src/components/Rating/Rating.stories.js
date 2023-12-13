import Rating from '.';

export default {
	title: 'Components/Rating',
	component: Rating,
	tags: ['autodocs'],
	argTypes: {
		rating: {
			description: 'Рейтинг компании',
			type: 'number',
			control: { type: 'number' },
		},
	},
};

const Template = (arg) => <Rating {...arg} />;

export const Default = Template.bind({});

Default.args = {
	rating: 5,
};
