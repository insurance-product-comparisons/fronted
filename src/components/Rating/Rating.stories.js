import Rating from '.';

export default {
	title: 'Components/Rating',
	component: Rating,
};

const Template = (arg) => <Rating {...arg} />;

export const Default = Template.bind({});

Default.args = {
	rating: 5,
};
