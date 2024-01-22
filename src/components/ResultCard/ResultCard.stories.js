import { ResultCard } from 'components';
import { withRouter } from 'storybook-addon-react-router-v6';

export default {
	title: 'Components/ResultCard',
	component: ResultCard,
	decorators: [withRouter],
	tags: ['autodocs'],
	argTypes: {
		data: {
			description: 'Объект с данными карточки',
			type: 'object',
			control: { type: 'object' },
		},
	},
};

const Template = (arg) => <ResultCard {...arg} />;

const OBJECT_DEFAULT = {
	id: '1',
	company: 'СберСтрахование',
	rating: 5,
	franchise: {
		name: 'Франшиза',
		sum: '15 000 ₽',
	},
	period: { name: 'Срок', value: '1 год' },
	price: { name: 'Цена', value: '10 000 ₽' },
};

export const Default = Template.bind({});

Default.args = {
	data: OBJECT_DEFAULT,
};
