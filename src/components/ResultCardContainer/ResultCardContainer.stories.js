import { ResultCardContainer } from 'components';

export default {
	title: 'Components/ResultCardContainer',
	component: ResultCardContainer,
	tags: ['autodocs'],
	argTypes: {
		cards: {
			description: 'Объект с данными карточки',
			type: 'array',
			control: { type: 'object' },
		},
	},
};

const Template = (arg) => <ResultCardContainer {...arg} />;

const ARRAY_DEFAULT = [
	{
		id: '1',
		company: 'СберСтрахование',
		rating: 4.9,
		franchise: {
			name: 'Франшиза',
			sum: '15 000 ₽',
		},
		period: { name: 'Срок', value: '1 год' },
		price: { name: 'Цена', value: '10 000 ₽' },
	},
	{
		id: '2',
		company: 'Тинькофф Страхование',
		rating: 4.8,
		franchise: {
			name: 'Франшиза',
			sum: '15 000 ₽',
		},
		period: { name: 'Срок', value: '1 год' },
		price: { name: 'Цена', value: '10 000 ₽' },
	},
	{
		id: '3',
		company: 'Ренессанс Страхование',
		rating: 4.5,
		franchise: {
			name: 'Франшиза',
			sum: '15 000 ₽',
		},
		period: { name: 'Срок', value: '1 год' },
		price: { name: 'Цена', value: '10 000 ₽' },
	},
	{
		id: '4',
		company: 'ВСК',
		rating: 4.1,
		franchise: {
			name: 'Франшиза',
			sum: '15 000 ₽',
		},
		period: { name: 'Срок', value: '1 год' },
		price: { name: 'Цена', value: '10 000 ₽' },
	},
	{
		id: '5',
		company: 'Абсолют Страхование',
		rating: 3.9,
		franchise: {
			name: 'Франшиза',
			sum: '15 000 ₽',
		},
		period: { name: 'Срок', value: '1 год' },
		price: { name: 'Цена', value: '10 000 ₽' },
	},
	{
		id: '6',
		company: 'Совкомбанк Страхование',
		rating: 3.0,
		franchise: {
			name: 'Франшиза',
			sum: '15 000 ₽',
		},
		period: { name: 'Срок', value: '1 год' },
		price: { name: 'Цена', value: '10 000 ₽' },
	},
];

export const Default = Template.bind({});

Default.args = {
	data: ARRAY_DEFAULT,
};
